import { useRef, useState } from 'react';
import styles from './VolumeBar.module.scss';
import React from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

interface VolumeBarProps {
  currentVolume: number;
  adjustVolume: (time: number) => void;
}
const VolumeBar = React.memo(({ currentVolume, adjustVolume }: VolumeBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const volumeLevelRef = useRef<number | null>(null);
  const [volumeLevel, setVolumeLevel] = useState<number | null>(null);

  const handleChange = (e: MouseEvent | TouchEvent) => {
    if (ref.current) {
      const posX = (e instanceof MouseEvent ? e.clientX : e.touches[0]?.clientX) || 0;
      const { left: containerX, width: containerWidth } = ref.current.getBoundingClientRect();
      const newPosition = Math.max(Math.min(posX - containerX, containerWidth), 0) / containerWidth;
      const newVolumeLevel = newPosition * 1;
      setVolumeLevel(newVolumeLevel);
      volumeLevelRef.current = newVolumeLevel;
    }
  };

  const handleStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    document.addEventListener('mousemove', handleChange);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleChange);
    document.addEventListener('touchend', handleMouseUp);

    handleChange(e.nativeEvent);
  };

  const handleMouseUp = (e: MouseEvent | TouchEvent) => {
    document.removeEventListener('mousemove', handleChange);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('touchmove', handleChange);
    document.removeEventListener('touchend', handleMouseUp);

    if (volumeLevelRef.current !== null) {
      adjustVolume(volumeLevelRef.current);
      setVolumeLevel(null);
    }
  };

  const progressPercentage = Math.round((currentVolume / 1) * 100);
  const calculatedWidth = volumeLevel !== null ? (volumeLevel / 1) * 100 : progressPercentage;

  return (
    <div className={styles.volume_control_container}>
      <div className={styles.icon_wrapper}>
        {currentVolume !== 0 ? <FaVolumeUp className={styles.icon} /> : <FaVolumeMute className={styles.icon} />}
      </div>
      <div ref={ref} className={styles.volume_bar} onMouseDown={handleStart} onTouchStart={handleStart}>
        <div className={styles.volume_level} style={{ width: `${calculatedWidth}%` }}></div>
      </div>
    </div>
  );
});

VolumeBar.displayName = 'VolumeBar';
export default VolumeBar;
