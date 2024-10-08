import { useRef, useState, useEffect } from 'react';
import styles from './ProgressBar.module.scss';
import React from 'react';
import TimerBar from '../TimerBar/TimerBar';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}
const ProgressBar = React.memo(({ currentTime, duration, onSeek }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const dragginTimeRef = useRef<number | null>(null);
  const [dragginTime, setDragginTime] = useState<number | null>(null);

  const handleSeek = (e: MouseEvent | TouchEvent) => {
    if (ref.current) {
      const posX = (e instanceof MouseEvent ? e.clientX : e.touches[0]?.clientX) || 0;
      const { left: containerX, width: containerWidth } = ref.current.getBoundingClientRect();
      const newPosition = Math.max(Math.min(posX - containerX, containerWidth), 0) / containerWidth;
      const newTime = newPosition * duration;
      setDragginTime(newTime);
      dragginTimeRef.current = newTime;
    }
  };

  const handleStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    document.addEventListener('mousemove', handleSeek);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleSeek);
    document.addEventListener('touchend', handleMouseUp);

    handleSeek(e.nativeEvent);
  };

  const handleMouseUp = (e: MouseEvent | TouchEvent) => {
    document.removeEventListener('mousemove', handleSeek);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('touchmove', handleSeek);
    document.removeEventListener('touchend', handleMouseUp);

    if (dragginTimeRef.current !== null) {
      onSeek(dragginTimeRef.current);
      setDragginTime(null);
    }
  };

  const progressPercentage = Math.round((currentTime / duration) * 100);
  const calculatedWidth = dragginTime !== null ? (dragginTime / duration) * 100 : progressPercentage;

  return (
    <div ref={ref} className={styles.progress_bar} onMouseDown={handleStart} onTouchStart={handleStart}>
      <TimerBar currentTrackDuration={currentTime} duration={duration} />
      <div className={styles.track_progress} style={{ width: `${calculatedWidth}%` }}></div>
    </div>
  );
});
ProgressBar.displayName = 'ProgressBar';
export default ProgressBar;
