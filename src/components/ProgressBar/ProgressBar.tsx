import { useRef, useState, useEffect } from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

const ProgressBar = ({ currentTime, duration, onSeek }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSeek(e);
  };

  const handleSeek = (e: MouseEvent) => {
    if (ref.current) {
      const posX = e.clientX;
      const { left: containerX, width: containerWidth } = ref.current.getBoundingClientRect();
      const newPosition = (posX - containerX) / containerWidth;
      const newTime = newPosition * duration;
      onSeek(newTime);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleSeek);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleSeek);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleSeek);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const progressPercentage = Math.round((currentTime / duration) * 100);

  return (
    <div ref={ref} className={styles.progress_bar} onMouseDown={handleMouseDown}>
      <div
        className={styles.track_progress}
        style={{ '--track_progress-width': `${progressPercentage ? progressPercentage : 0}%` } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default ProgressBar;
