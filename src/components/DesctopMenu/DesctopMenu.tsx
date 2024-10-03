import Link from 'next/dist/client/link';
import List from '../../components/List/List';
import { IoMdArrowDropdown } from 'react-icons/io';
import styles from './DesktopMenu.module.scss';

const DesktopMenu = ({ linksData }) => {
  return (
    <ul className={styles.links_container}>
      {linksData.map((linkData) => {
        return (
          <li key={linkData.title} className={styles.nav_list_item}>
            <Link className={styles.menu_link} href="/">
              {linkData.title}
              {linkData.data ? <IoMdArrowDropdown className={styles.arrow} /> : null}
            </Link>
            {linkData.data ? (
              <div className={styles.nav_list_item_content}>
                <List items={linkData.data} />
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;
