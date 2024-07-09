import FAQ from '../../../../components/FAQ/FAQ';
import Heading from '../../../../components/Heading/Heading';
import FAQData from './data/faqData.js';

const FAQBlock = () => {
  return (
    <>
      <Heading className="subtitle" text="Дополнительная информация" tag="h2" />
      <FAQ FAQData={FAQData} />
    </>
  );
};

export default FAQBlock;
