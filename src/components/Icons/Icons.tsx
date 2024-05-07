import React from 'react';  
import Icon from "../Icon/Icon";
import styles from "./Icons.module.css";

const Icons = ({ iconsData }) => {
    
    return (
        <div className={styles.icons_container}>
            {iconsData.map((data) => (
                <Icon
                    src={data.src}
                    text={data.text}
                    alt={data.alt}
                    key={data.id}
                />
            ))}
        </div>
    )
};

export default Icons;