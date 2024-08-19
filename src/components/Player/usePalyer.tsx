import { useState, useEffect, useCallback } from 'react';
import getFormattedTime from './getFormattedTime';

type Track = { title: string; src: string; duration: number };

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
  const [currentTrack, setCurrentTrack] = useState(queue[startIndex]);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackDuration, setTrackDuration] = useState(0);
  const [currentTrackDuration, setCurrentTrackDuration] = useState(0);
  const [currentVolume, setcurrentVolume] = useState(0.5);
  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(true);

  useEffect(() => {
    const newAudio = new Audio(currentTrack.src);
    setAudio(newAudio);

    return () => {
      newAudio.pause();
    };
  }, [currentTrack]);

  useEffect(() => {
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setTrackDuration(audio.duration);
    };

    audio?.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio?.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [audio]);

  useEffect(() => {
    if (!audio) return;

    const handleLoadedMetadata = () => {
      const duration = audio.duration;
      setTrackDuration(duration);
    };

    if (currentTrackIndex !== 0) {
      audio.play();
      setIsPlaying(true);
    }

    return () => {
      audio.pause();

      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [audio, currentTrackIndex]);

  useEffect(() => {
    if (!audio) return;

    const updateTime = () => {
      const formattedTime = getFormattedTime(audio);
      setCurrentTime(formattedTime);
      setCurrentTrackDuration(audio.currentTime);
    };

    audio.addEventListener('timeupdate', updateTime);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, [audio]);

  const play = useCallback(() => {
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  }, [audio]);

  const pause = useCallback(() => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  }, [audio]);

  const seekTime = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const seekValue = Number(event.target.value);
      audio.currentTime = seekValue;
      setCurrentTrackDuration(seekValue);
    },
    [audio],
  );

  const volume = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let volumeValue = Number(event.target.value);
      audio.volume = volumeValue;
      setcurrentVolume(volumeValue);
    },
    [audio],
  );

  const next = useCallback(() => {
    let newIndex = currentTrackIndex + 1;
    setIsPlaying(false);
    setCurrentTrackDuration(0);
    setTrackDuration(0);
    setCurrentTime(0);

    if (newIndex >= queue.length) {
      if (repeat === 'all') {
        newIndex = 0;
      } else {
        newIndex = queue.length - 1;
      }
    }

    setCurrentTrackIndex(newIndex);
    setCurrentTrack(queue[newIndex]);
  }, [currentTrackIndex, queue, repeat, audio]);

  const prev = useCallback(() => {
    let newIndex = currentTrackIndex - 1;
    setIsPlaying(false);
    setCurrentTrackDuration(0);
    setTrackDuration(0);
    setCurrentTime(0);

    if (newIndex < 0) {
      if (repeat === 'all') {
        newIndex = queue.length - 1;
      } else {
        newIndex = 0;
      }
    }

    setCurrentTrackIndex(newIndex);
    setCurrentTrack(queue[newIndex]);
  }, [currentTrackIndex, queue, repeat]);

  useEffect(() => {
    if (audio) {
      const handleEnd = () => {
        if (repeat === 'one') {
          audio.currentTime = 0;
          audio.play();
        } else {
          next();
        }
      };

      audio.addEventListener('ended', handleEnd);

      return () => {
        audio.removeEventListener('ended', handleEnd);
      };
    }
  }, [audio, next, repeat]);

  useEffect(() => {
    setPrevDisabled(currentTrackIndex === 0 && repeat !== 'all');
  }, [currentTrackIndex, repeat]);

  useEffect(() => {
    setNextDisabled(currentTrackIndex === queue.length - 1 && repeat !== 'all');
  }, [currentTrackIndex, queue.length, repeat]);

  return {
    currentTrack,
    currentTime,
    isPlaying,
    play,
    pause,
    next,
    prev,
    seekTime,
    volume,
    isPrevDisabled,
    isNextDisabled,
    currentVolume,
    trackDuration,
    currentTrackDuration,
  };
};
