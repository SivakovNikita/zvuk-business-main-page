import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/logo/zvuk_business_logo.png';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { BiSolidPhoneCall } from 'react-icons/bi';
import clsx from 'clsx';
import MobileMenu from '../MobileMenu/MobileMenu';
import { createPortal } from 'react-dom';
import { headerLinksData } from './constants';
import DesktopMenu from '../DesctopMenu/DesctopMenu';

const Header = () => {
  // логика открытия бургер меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // логика выбора меню мобайл-ПК
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 930);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
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
          <div className={clsx({ [styles.hamburger]: true, [styles.active]: isMenuOpen })}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>
          </div>
        </div>
      </div>

      {isMobile ? (
        <>{createPortal(isMenuOpen ? <MobileMenu /> : null, document.getElementById('portal')!)}</>
      ) : (
        <nav className={styles.nav}>
          <DesktopMenu linksData={headerLinksData} />
          <div className={styles.buttons_container}>
            <Link href="/">
              <BiSolidPhoneCall className={styles.phone_icon} />
            </Link>
            <Button text="Войти" className="nav_menu" />
            <Button text="Зарегистрироваться" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
