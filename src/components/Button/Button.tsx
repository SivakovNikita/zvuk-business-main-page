import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ className, text = "Подключить" }) => {
     
    return <button
        className={ clsx({[styles.button]: true, [styles.className]: className}) }
        >
        {text}
        </button>
};

export default Button;