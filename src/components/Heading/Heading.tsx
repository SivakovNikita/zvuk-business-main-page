import clsx from 'clsx';
import styles from './Heading.module.scss';

interface HeadingInterface {
  className?: string;
  children?: React.ReactNode;
  text: string;
  tag: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const Heading = ({ className = 'subtitle', children, text, tag = 'span' }: HeadingInterface) => {
  const Tag = tag;

  return (
    <Tag className={clsx(styles[className], className)}>
      {text}
      {children}
    </Tag>
  );
};

export default Heading;
