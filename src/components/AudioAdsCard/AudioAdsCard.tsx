import Button from '../Button/Button';
import Image from 'next/image';
import styles from './AudioAdsCard.module.scss';

interface AudioAdsCardProps {
  cardData: {
    headingText: string;
    subHeadingText: string;
    headingNumber: string;
    id: number;
    btnText: string;
    btnHref: string;
    backgroundImg: string;
    backgroundСolor: string;
    imageContentSrc: string;
  };
}

const AudioAdsCard = ({ cardData }: AudioAdsCardProps) => {
  const hasButton = cardData.btnText && cardData.btnHref;
  const hasImage = cardData.imageContentSrc;

  return (
    <div
      className={styles.container}
      style={
        {
          '--bg-img-src': `url(${cardData.backgroundImg})`,
          '--bg-color': `${cardData.backgroundСolor}`,
        } as React.CSSProperties
      }
      key={cardData.id}
    >
      <span className={styles.card_heading_number}>{cardData.headingNumber}</span>
      <span className={styles.card_heading}>{cardData.headingText}</span>
      <span className={styles.card_subheading}>{cardData.subHeadingText}</span>
      {hasImage ? (
        <Image
          className={styles.card_image}
          src={cardData.imageContentSrc}
          layout="responsive"
          objectFit="contain"
          width={500}
          height={500}
          alt="Picture"
        />
      ) : null}
      {hasButton ? (
        <div className={styles.card_button}>
          <Button text={cardData.btnText} className="button" />
        </div>
      ) : null}
    </div>
  );
};

export default AudioAdsCard;
