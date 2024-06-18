import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/logo/zvuk_business_logo.png';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { BiSolidPhoneCall } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowLeft } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            
            {/* логотип и иконка бургер */}
            <div className={styles.mobile_container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src={logo} alt="Звук Бизнес" width={132} />
                    </Link>
                </div>
                <div
                    className={styles.burger_menu}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    role="button"
                >
                    <GiHamburgerMenu />
                </div>
            </div>
            
            {/* Меню */}
            <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_open : ''}`} id="primary-navigation">
                
                {/* Ссылки */}
                <div className={styles.links_container}>
                <Link className={styles.menu_link} href="/">Тарифы</Link>
                    <ul className={styles.menu}>
                        <li className={styles.menu_item}>
                            <a href="#!" className={styles.menu_link}>Типы бизнеса<IoMdArrowDropdown className={styles.arrow}/></a>
                            <ul className={styles.dropdown_content}>
                                <li className={styles.dropdown_item}>
                                    <Link href="/">Ритейл<MdOutlineArrowLeft className={styles.arrow}/></Link>
                                    <ul className={styles.sub_dropdown_content}>
                                        <li><Link href="/">Магазин одежды</Link></li>
                                        <li><Link href="/">Магазин электроники</Link></li>
                                    </ul>
                                </li>
                                <li className={styles.dropdown_item}>
                                    <Link href="/">HoReCa<MdOutlineArrowLeft className={styles.arrow}/></Link>
                                    <ul className={styles.sub_dropdown_content}>
                                        <li><Link href="/">Рестораны</Link></li>
                                        <li><Link href="/">Кафе</Link></li>
                                    </ul>
                                </li>
                                <li className={styles.dropdown_item}>
                                    <Link href="/">Медицина<MdOutlineArrowLeft className={styles.arrow}/></Link>
                                    <ul className={styles.sub_dropdown_content}>
                                        <li><Link href="/">Клиники</Link></li>
                                        <li><Link href="/">Аптеки</Link></li>
                                    </ul>
                                </li>
                                <li className={styles.dropdown_item}>
                                    <Link href="/">Красота<MdOutlineArrowLeft className={styles.arrow}/></Link>
                                    <ul className={styles.sub_dropdown_content}>
                                        <li><Link href="/">Барбершоп</Link></li>
                                        <li><Link href="/">Салон Красоты</Link></li>
                                    </ul>
                                </li>
                                <li className={styles.dropdown_item}>
                                    <Link href="/">Спорт<MdOutlineArrowLeft className={styles.arrow}/></Link>
                                    <ul className={styles.sub_dropdown_content}>
                                        <li><Link href="/">Фитнес клуб</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                
                    <ul className={styles.menu}>
                        <li className={styles.menu_item}>
                            <a href="#!" className={styles.menu_link}>Инструменты<IoMdArrowDropdown className={styles.arrow}/></a>
                            <ul className={styles.dropdown_content}>
                                <li><Link href="/">Плеер</Link></li>
                                <li><Link href="/">HiFi качество</Link></li>
                                <li><Link href="/">ИИ ролик</Link></li>
                                <li><Link href="/">Умная колонка SberBoom</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className={styles.menu}>
                        <li className={styles.menu_item}>
                            <a href="#!" className={styles.menu_link}>О нас<IoMdArrowDropdown className={styles.arrow}/></a>
                            <ul className={styles.dropdown_content}>
                                <li><Link href="/">Блог</Link></li>
                                <li><Link href="/">Артистам</Link></li>
                                <li><Link href="/">Партнерская программа</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* Кнопки */}
                <div className={styles.buttons_container}>
                    <Link href="/">
                        <BiSolidPhoneCall className={styles.phone_icon} />
                    </Link>
                    <Button text="Войти" className="nav_menu" />
                    <Button text="Зарегистрироваться" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
