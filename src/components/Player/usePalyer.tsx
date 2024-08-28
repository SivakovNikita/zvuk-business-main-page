import { useState, useEffect, useCallback } from 'react';

type Track = { title: string; src: string };

export const usePlayer = ({
  queue,
  repeat,
  startIndex,
}: {
  queue: Track[];
  repeat: 'all' | 'one' | 'none';
  startIndex: number;
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(startIndex);
  const [currentTrackTitle, setCurrentTrackTitle] = useState(queue[currentTrackIndex].title);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);
  const [currentTrackDuration, setCurrentTrackDuration] = useState(0);
  const [currentVolume, setcurrentVolume] = useState();
  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(true);

  useEffect(() => {
    const newAudio = new Audio();
    setAudio(newAudio);

    return () => {
      newAudio.pause();
    };
  }, []);

  const adjustVolume = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!audio) return;

      const volumeValue = Number(event.target.value);
      audio.volume = volumeValue;
      setcurrentVolume(volumeValue);
    },
    [audio],
  );

  const play = useCallback(() => {
    if (audio) {
      if (audio.readyState === HTMLMediaElement.HAVE_NOTHING) {
        audio.src = queue[currentTrackIndex].src;
        audio.load();
      }
      audio.play();
    }
  }, [audio]);

  const pause = useCallback(() => {
    if (audio) {
      audio.pause();
    }
  }, [audio]);

  const loadAndPlay = useCallback(
    async (src: string) => {
      if (audio && src) {
        try {
          audio.src = src;
          audio.currentTime = 0;
          // колхоз без которого не работает автовоспроизведение следующего трека
          setTimeout(() => {
            audio.load();
            audio.play();
          }, 10);
        } catch (error) {
          console.error('Ошибка:', error);
        }
      }
    },
    [audio],
  );

  const next = useCallback(async () => {
    let newIndex = currentTrackIndex + 1;

    if (newIndex >= queue.length) {
      if (repeat === 'all') {
        newIndex = 0;
      } else {
        return audio?.pause();
      }
    }

    setCurrentTrackIndex(newIndex);
    await loadAndPlay(queue[newIndex].src);
  }, [currentTrackIndex, queue, repeat, loadAndPlay, audio]);

  const prev = useCallback(async () => {
    let newIndex = currentTrackIndex - 1;

    setIsPlaying(false);

    if (newIndex < 0) {
      if (repeat === 'all') {
        newIndex = queue.length - 1;
      } else {
        newIndex = 0;
      }
    }

    setCurrentTrackIndex(newIndex);
    await loadAndPlay(queue[newIndex].src);
  }, [currentTrackIndex, queue, repeat, loadAndPlay]);

  const handleSeek = (time: number) => {
    if (audio) {
      audio.currentTime = time;
      setCurrentTrackDuration(time);
    }
  };

  useEffect(() => {
    if (!audio) return;

    const handleLoadedMetadata = () => {
      const duration = audio.duration;
      setTrackDuration(duration);
    };

    const updateTime = () => {
      setCurrentTrackDuration(audio.currentTime);
    };

    const handleEnd = () => {
      if (repeat === 'one') {
        audio.currentTime = 0;
        audio.play();
      } else {
        next();
      }
    };

    const handlePlayStop = () => {
      setIsPlaying(!audio.paused);
    };

    const handleTrackTitle = () => {
      let trackTitle = queue[currentTrackIndex].title;

      if (trackTitle !== undefined) {
        setCurrentTrackTitle(trackTitle);
      }
    };

    audio.addEventListener('play', handlePlayStop);
    audio.addEventListener('pause', handlePlayStop);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnd);
    audio.addEventListener('play', handleTrackTitle);

    return () => {
      audio.pause();
      audio.removeEventListener('play', handlePlayStop);
      audio.removeEventListener('pause', handlePlayStop);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnd);
    };
  }, [audio, currentTrackIndex, next, repeat]);

  useEffect(() => {
    setPrevDisabled(currentTrackIndex === 0 && repeat !== 'all');
  }, [currentTrackIndex, repeat]);

  useEffect(() => {
    setNextDisabled(currentTrackIndex === queue.length - 1 && repeat !== 'all');
  }, [currentTrackIndex, queue.length, repeat]);

  return {
    isPlaying,
    pause,
    play,
    next,
    prev,
    adjustVolume,
    handleSeek,
    currentVolume,
    currentTrackTitle,
    isPrevDisabled,
    isNextDisabled,
    trackDuration,
    currentTrackDuration,
  };
};
