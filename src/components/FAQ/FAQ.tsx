import CrossIcon from '../CrossIcon/CrossIcon';
import Heading from '../Heading/Heading';
import FAQTextContent from '../FAQTextContent/FAQTextContent';
import styles from './FAQ.module.scss';
import clsx from 'clsx';
import { ReactNode, useState } from 'react';

interface FAQComponentProps {
    FAQData: { title: string, text: ReactNode }[];
}

const FAQ = ( {FAQData}: FAQComponentProps ) => {
    const [activeIndex, setActiveIndex] = useState(-1);
   
    const handleToggle = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? -1 : index);
    }

    return ( 
    <div className={ styles.faq_wrapper }>
        <Heading text={"Дополнительная информация"} tag={"h2"}/>
        
        <ul className={ styles.faq_container }>
            {FAQData.map((item, index) => {
                const isActiveItem = index === activeIndex;

                return (
                <li className={ styles.faq_item } key={item.title}>
                    <button 
                        className={styles.faq_button}
                        onClick={ () => handleToggle(index) }
                    >
                        <span>{item.title}</span>
                        <span className={ 
                            clsx({[styles.icon]: true, [styles.icon_active]: isActiveItem})  
                        }>
                            <CrossIcon className={'className'} />
                        </span>
                    </button>
                    <FAQTextContent paragraph={ item.text } isActive={ isActiveItem }/>
                </li>)
            })}
        </ul>
    </div>)
}

export default FAQ;