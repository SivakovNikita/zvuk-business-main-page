import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ className }) => {
     
    return <button
        className={ clsx({[styles.button]: true, [styles.className]: className}) }
        >
        Подключить
        </button>
};

export default Button;