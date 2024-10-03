import styles from './MobileMenu.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { BiSolidPhoneCall } from 'react-icons/bi';
import Button from '../Button/Button';
import MobileList from '../MobileList/MobileList';
import clsx from 'clsx';
import { IoMdArrowDropdown } from 'react-icons/io';
import { headerLinksData } from '../Header/constants';

const MobileMenu = ({ isOpen }) => {
  const [menuStates, setMenuStates] = useState(() => {
    return headerLinksData.reduce((state, item) => {
      state[item.title] = false;
      return state;
    }, {});
  });
  console.log(isOpen);

  const handleClick = (itemTitle) => {
    setMenuStates((prevStates) => ({
      ...prevStates,
      [itemTitle]: !prevStates[itemTitle],
    }));
  };

  return (
    <div
      className={clsx({
        [styles.links_container_mobile]: true,
        [styles.links_container_mobile_active]: isOpen,
      })}
    >
      <ul className={styles.nav_list_item}>
        {headerLinksData.map((item) => {
          return (
            <li className={styles.nav_list_item} onClick={() => handleClick(item.title)} key={item.title}>
              <Link className={styles.menu_link_mobile} href="/">
                {item.title}
                {item.data ? (
                  <IoMdArrowDropdown
                    className={clsx({ [styles.arrow]: true, [styles.arrow_active]: menuStates[item.title] })}
                  />
                ) : null}
              </Link>
              <div
                className={clsx({
                  [styles.nav_list_item_content_mobile]: true,
                  [styles.nav_list_item_content_mobile_active]: menuStates[item.title],
                })}
              >
                {item.data ? <MobileList items={item.data} /> : null}
              </div>
            </li>
          );
        })}

        <div className={styles.buttons_container}>
          <Link href="/">
            <BiSolidPhoneCall className={styles.phone_icon} />
          </Link>
          <Button text="Войти" className="nav_menu" />
          <Button text="Зарегистрироваться" />
        </div>
      </ul>
    </div>
  );
};

export default MobileMenu;
