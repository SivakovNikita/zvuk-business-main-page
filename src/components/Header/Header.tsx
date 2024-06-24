import { useState } from 'react';
import Link from 'next/link';
import List from '../List/List';
import Image from 'next/image';
import logo from '../../../public/images/logo/zvuk_business_logo.png';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { businessTypesData, toolsData, aboutData } from './constants';
import { IoMdArrowDropdown } from 'react-icons/io';
import clsx from 'clsx';

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
          <div className={clsx(styles.hamburger, { [styles.active]: isMenuOpen })}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
        </div>
      </div>

      {/* Меню */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_open : ''}`}>
        {/* Ссылки */}

        <ul className={styles.links_container}>
          <li>
            <Link className={styles.menu_link} href="/">
              Тарифы
            </Link>
          </li>

          <li className={styles.nav_list_item}>
            <Link className={styles.menu_link} href="/">
              Типы бизнеса
              <IoMdArrowDropdown className={styles.arrow} />
            </Link>
            <div className={styles.nav_list_item_content}>
              <List items={businessTypesData} />
            </div>
          </li>

          <li className={styles.nav_list_item}>
            <Link className={styles.menu_link} href="/">
              Инструменты
              <IoMdArrowDropdown className={styles.arrow} />
            </Link>
            <div className={styles.nav_list_item_content}>
              <List items={toolsData} />
            </div>
          </li>

          <li className={styles.nav_list_item}>
            <Link className={styles.menu_link} href="/">
              О нас
              <IoMdArrowDropdown className={styles.arrow} />
            </Link>
            <div className={styles.nav_list_item_content}>
              <List items={aboutData} />
            </div>
          </li>
        </ul>
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
