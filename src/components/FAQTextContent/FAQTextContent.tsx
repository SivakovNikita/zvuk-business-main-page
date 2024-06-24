import styles from './FAQTextContent.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState, type ReactNode, CSSProperties } from "react";

interface FAQTextContentProps {
    paragraph: ReactNode;
    isActive: boolean
};

const FAQTextContent = ({ paragraph, isActive }: FAQTextContentProps) => {
    const [height, setHeight] = useState(0);
    
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            const [entry] = entries;
            setHeight(entry.contentRect.height || 0);
        });
        
        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                resizeObserver.unobserve(ref.current);
            }
            resizeObserver.disconnect();
        };
    }, [paragraph]);
    
      
    return (
        <div className={ 
            clsx({[styles.text_content]: true, [styles.text_content_active]: isActive}) } 
            style={{ "--text-height": `${height}px` } as React.CSSProperties }>
                <div className={ styles.text } ref={ref}>{paragraph}</div>
        </div>
    );
};

export default FAQTextContent;