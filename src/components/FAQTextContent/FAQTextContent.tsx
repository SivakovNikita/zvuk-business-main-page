import styles from './FAQTextContent.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState, type ReactNode } from "react";

interface FAQTextContentProps {
    paragraph: ReactNode;
    isActive: boolean
};

const FAQTextContent = ({ paragraph, isActive }: FAQTextContentProps) => {
    const [height, setHeight] = useState(100);
    
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.offsetHeight)
        };
      }, [isActive, paragraph]);
    
    return (
        <div className={ 
            clsx({[styles.text_content]: true, [styles.active]: isActive}) } 
            style={{ "--text-height": `${height}px` }} >
                <div className={ styles.text } ref={ref}>{paragraph}</div>
        </div>
    );
};

export default FAQTextContent;