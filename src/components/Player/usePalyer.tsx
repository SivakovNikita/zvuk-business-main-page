import { useState, useEffect, useCallback } from 'react';
import getFormattedTime from './getFormattedTime';

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
  const [currentTrackTitle, setCurrentTrackTitle] = useState(queue[currentTrackIndex].title); // нужен только для передачи названия трека в плеер
  const [isPlaying, setIsPlaying] = useState(false); // состояние или для кнопки плей/стоп в плеер
  const [trackDuration, setTrackDuration] = useState(0); // длина трека в милисекундах, чтобы не брать с "бэкенда"
  const [currentTrackDuration, setCurrentTrackDuration] = useState(0); // текущая милисекунда трека
  const [currentVolume, setcurrentVolume] = useState(0.5);
  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(true);

  useEffect(() => {
    const newAudio = new Audio(queue[currentTrackIndex].src);
    console.log(newAudio.title);

    setCurrentTrackTitle(queue[currentTrackIndex].title);
    setAudio(newAudio);

    return () => {
      newAudio.pause();
    };
  }, [currentTrackIndex]);

  const play = useCallback(() => {
    if (audio) {
      audio.play();
    }
  }, [audio]);

  const pause = useCallback(() => {
    if (audio) {
      audio.pause();
    }
  }, [audio]);

  const seek = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!audio) return;

      const seekValue = Number(event.target.value);
      audio.currentTime = seekValue;
      setCurrentTrackDuration(seekValue);
    },
    [audio],
  );

  const adjustVolume = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!audio) return;

      const volumeValue = Number(event.target.value);
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

    if (newIndex >= queue.length) {
      if (repeat === 'all') {
        newIndex = 0;
      } else {
        newIndex = queue.length - 1;
      }
    }

    setCurrentTrackIndex(newIndex);
  }, [currentTrackIndex, queue.length, repeat]);

  const prev = useCallback(() => {
    let newIndex = currentTrackIndex - 1;

    setIsPlaying(false);
    setCurrentTrackDuration(0);
    setTrackDuration(0);

    if (newIndex < 0) {
      if (repeat === 'all') {
        newIndex = queue.length - 1;
      } else {
        newIndex = 0;
      }
    }

    setCurrentTrackIndex(newIndex);
  }, [currentTrackIndex, queue.length, repeat]);

  useEffect(() => {
    if (!audio) return;

    const handleLoadedMetadata = () => {
      const duration = audio.duration;
      setTrackDuration(duration);

      if (currentTrackIndex !== 0) {
        audio.play();
      }
    };

    const updateTime = () => {
      const formattedTime = getFormattedTime(audio);
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
      setIsPlaying((prev) => {
        return !prev;
      });
    };

    audio.addEventListener('play', handlePlayStop);
    audio.addEventListener('pause', handlePlayStop);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnd);

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
    seek,
    adjustVolume,
    currentVolume,
    currentTrackTitle,
    isPrevDisabled,
    isNextDisabled,
    trackDuration,
    currentTrackDuration,
  };
};
