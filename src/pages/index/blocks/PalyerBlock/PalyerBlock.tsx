import PlayerBar from '../../../../components/Player/PlayerBar';
import styles from './PalyerBlock.module.scss';

const PlayerBlock = () => {
  return <div className={styles.player_wrapper}>{<PlayerBar />}</div>;
};

export default PlayerBlock;
