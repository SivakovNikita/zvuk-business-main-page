import styles from './MobileMenu.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { BiSolidPhoneCall } from 'react-icons/bi';
import Button from '../Button/Button';
import MobileList from '../MobileList/MobileList';
import { aboutData, businessTypesData, toolsData } from './constants';
import clsx from 'clsx';
import { IoMdArrowDropdown } from 'react-icons/io';

const MobileMenu = () => {
  // логика открытия бургер подменю
  const [menuStates, setMenuStates] = useState({
    businessTypes: false,
    tools: false,
    about: false,
  });

  const handleClick = (itemName) => {
    setMenuStates((prevStates) => ({
      ...prevStates,
      [itemName]: !prevStates[itemName],
    }));
  };

  return (
    <>
      <ul className={styles.nav_list_item}>
        <li>
          <Link className={styles.menu_link_mobile} href="/">
            Тарифы
          </Link>
        </li>

        <li className={styles.nav_list_item} onClick={() => handleClick('businessTypes')}>
          <Link className={styles.menu_link_mobile} href="/">
            Типы бизнеса
            <IoMdArrowDropdown
              className={clsx({ [styles.arrow]: true, [styles.arrow_active]: menuStates.businessTypes })}
            />
          </Link>
          <div
            className={clsx({
              [styles.nav_list_item_content_mobile]: true,
              [styles.nav_list_item_content_mobile_active]: menuStates.businessTypes,
            })}
          >
            <MobileList items={businessTypesData} />
          </div>
        </li>

        <li className={styles.nav_list_item} onClick={() => handleClick('tools')}>
          <Link className={styles.menu_link_mobile} href="/">
            Инструменты
            <IoMdArrowDropdown className={clsx({ [styles.arrow]: true, [styles.arrow_active]: menuStates.tools })} />
          </Link>
          <div
            className={clsx({
              [styles.nav_list_item_content_mobile]: true,
              [styles.nav_list_item_content_mobile_active]: menuStates.tools,
            })}
          >
            <MobileList items={toolsData} />
          </div>
        </li>

        <li className={styles.nav_list_item} onClick={() => handleClick('about')}>
          <Link className={styles.menu_link_mobile} href="/">
            О нас
            <IoMdArrowDropdown className={clsx({ [styles.arrow]: true, [styles.arrow_active]: menuStates.about })} />
          </Link>
          <div
            className={clsx({
              [styles.nav_list_item_content_mobile]: true,
              [styles.nav_list_item_content_mobile_active]: menuStates.about,
            })}
          >
            <MobileList items={aboutData} />
          </div>
        </li>
        <div className={styles.buttons_container}>
          <Link href="/">
            <BiSolidPhoneCall className={styles.phone_icon} />
          </Link>
          <Button text="Войти" className="nav_menu" />
          <Button text="Зарегистрироваться" />
        </div>
      </ul>
    </>
  );
};

export default MobileMenu;
