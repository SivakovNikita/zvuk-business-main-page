import Button from '../../../../components/Button/Button';
import Heading from '../../../../components/Heading/Heading';
import styles from './ResultsBlock.module.scss';

function ResultsBlock() {
  return (
    <div className={styles.results_container}>
      <Heading className="subtitle" text="Результаты" tag="h2" />
      <div className={styles.cards_wrapper}>
        <div className={styles.card_container}>
          <div className={styles.card_value}>
            <span className={styles.card_value_number}>31</span>
            <span className={styles.card_percent}>%</span>
          </div>
          <span className={styles.card_text}>
            <b>клиентов возвращаются,</b> если музыкальное оформление им нравится
          </span>
          <span className={styles.card_link}>
            <a href="">А survey on music’s impact in public spaces</a>
          </span>
        </div>
        <div className={styles.card_container_middle}>
          <div className={styles.card_value}>
            <span className={styles.card_value_number}>84</span>
            <span className={styles.card_percent}>%</span>
          </div>
          <span className={styles.card_text}>
            <b>согласны с тем,</b>что качественно подобранная фоновая музыка улучшает опыт посещений.
          </span>
          <span className={styles.card_link}>
            <a href="">Enhancing your customer experience - ppl prs</a>
          </span>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_value}>
            <span className={styles.card_value_number}>21</span>
            <span className={styles.card_percent}>%</span>
          </div>
          <span className={styles.card_text}>
            <b>посетителей рекомендуют</b> места с приятной музыкой своим друзьям.
          </span>
          <span className={styles.card_link}>
            <a href="">А survey on music’s impact in public spaces</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResultsBlock;
