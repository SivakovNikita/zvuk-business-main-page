import { useState, useEffect, useCallback } from 'react';

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

  useEffect(() => {
    const newAudio = new Audio(currentTrack.src);

    if (currentTrackIndex !== 0) {
      newAudio.play();
      setIsPlaying(true);
    }

    const handleLoadedMetadata = () => {
      const duration = newAudio.duration;
      setTrackDuration(duration);
    };

    if (newAudio.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      newAudio.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    setAudio(newAudio);

    const getFormattedTime = () => {
      const currentTime = newAudio.currentTime;
      setCurrentTrackDuration(currentTime); // обновляем время для инпута
      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      return formattedTime;
    };

    const updateTime = () => {
      const formattedTime = getFormattedTime();
      setCurrentTime(formattedTime);
    };

    newAudio.addEventListener('timeupdate', updateTime);

    return () => {
      newAudio.pause();
      newAudio.removeEventListener('timeupdate', updateTime);
      newAudio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentTrack]);

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

  return {
    currentTrack,
    currentTime,
    isPlaying,
    play,
    pause,
    next,
    prev,
    isPrevDisabled: currentTrackIndex === 0 && repeat !== 'all',
    isNextDisabled: currentTrackIndex === queue.length - 1 && repeat !== 'all',
    trackDuration,
    currentTrackDuration,
  };
};
