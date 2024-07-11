import clsx from 'clsx';
import styles from './Heading.module.scss';
import { useEffect, useRef, useState } from 'react';

interface HeadingInterface {
  className: string;
  children?: React.ReactNode;
  text: string;
  tag: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const Heading = ({ className, children, text, tag = 'span' }: HeadingInterface) => {
  const Tag = tag;
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(() => true);
        }
      });
    };

    const headingObserver = new IntersectionObserver(observerCallback, {});

    if (headingRef.current) {
      headingObserver.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        headingObserver.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <Tag ref={headingRef} className={clsx(styles[className], { [styles.subtitle__visible]: isVisible })}>
      {text}
      {children}
    </Tag>
  );
};

export default Heading;
