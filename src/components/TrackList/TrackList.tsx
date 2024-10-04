import { useContext } from 'react';
import Track from '../Track/Track';
import styles from './TrackList.module.scss';
import { TrackContext } from '../Player/TrackContex';

const TrackList = () => {
  const { trackList } = useContext(TrackContext);

  return (
    <div className={styles.trackList_wrapper}>
      {trackList.map((track) => {
        let index = trackList.indexOf(track);
        return <Track key={index} index={index} track={track} />;
      })}
    </div>
  );
};

export default TrackList;
