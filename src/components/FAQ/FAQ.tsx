import CrossIcon from '../CrossIcon/CrossIcon';
import FAQTextContent from '../FAQTextContent/FAQTextContent';
import styles from './FAQ.module.scss';
import clsx from 'clsx';
import { ReactNode, useState } from 'react';

interface FAQComponentProps {
    FAQData: ReactNode
}

const FAQ = ( {FAQData}: FAQComponentProps ) => {
    const [activeIndex, setActiveIndex] = useState(-1);
   
    const handleToggle = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? -1 : index);
    }

    return ( 
    <div className={ styles.faq_wrapper }>
        <span className={ styles.faq_heading }>Дополнительная информация</span>
        
        <ul className={ styles.faq_container }>
            {FAQData.map((item, index) => {
                const isActiveItem = index === activeIndex;

                return (
                <li className={ styles.faq_item } key={item.title}>
                    <button 
                        className={styles.faq_button}
                        onClick={ () => handleToggle(index) }
                    >
                        <p>{item.title}</p>
                        <span className={ 
                            clsx({[styles.icon]: true, [styles.active]: isActiveItem})  
                        }>
                            <CrossIcon />
                        </span>
                    </button>
                    <FAQTextContent paragraph={ item.text } isActive={ isActiveItem }/>
                </li>)
            })}
        </ul>
    </div>)
}

export default FAQ;