import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonInterface {
    className?: string;
    text: string;
};

const Button = ({ className, text = "Подключить" }: ButtonInterface) => {
     
    return <button
        className={clsx(styles.button, className && styles[className])}
        >
        {text}
        </button>
};

export default Button;