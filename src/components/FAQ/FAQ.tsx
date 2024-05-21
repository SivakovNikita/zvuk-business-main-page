import CrossIcon from '../CrossIcon/CrossIcon';
import styles from './FAQ.module.scss';
import { useState } from 'react';

const FAQData = [
    {title: "Что такое Звук Бизнес", text: "Звук Бизнес — аудиосервис для бизнеса. C 2016 года мы создаём музыкальную атмосферу в заведениях и помогаем брендам звучать красиво, увеличивать продажи и нравиться людям."},
    {title: "Как работает Звук Бизнес", text: "Зарегистрируйтесь по номеру телефона или с помощью СберБизнес ID и укажите вашу сферу бизнеса. После этого вы можете пользоваться Звук Бизнесом бесплатно первые 7 дней."},
    {title: "Для какого бизнеса предназначен сервис Звук Бизнес", text: `${"Мы работаем с офлайн-бизнесом, которому нужна фоновая музыка."}  \n\n\n ${"Это могут быть:"}`}
];


const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    
    const handleToggle = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? -1 : index);
    }

    return <ul className={ styles.faq_container }>
        {FAQData.map((item, index) => {
            
            return (
            <div className={ styles.faq_item } key={item.title}>
                <button 
                    className={styles.faq_button}
                    onClick={ () => handleToggle(index) }
                >
                    <p>{item.title}</p>
                    <div className={ styles.icon }>
                        <CrossIcon />
                    </div>
                </button>
                <div className={`${styles.text_content} 
                ${index === activeIndex ? styles.active : ''}`}>
                        <div style={{ marginBottom: '10px' }}>
                            <span>{item.text}</span>
                        </div>
                </div>
                
            </div>)
        })}
        </ul>;
}

export default FAQ;