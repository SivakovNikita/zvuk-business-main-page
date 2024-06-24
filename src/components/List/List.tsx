import { MdOutlineArrowLeft } from 'react-icons/md';
import styles from './List.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

type Item = {
  title: string;
  subItems?: Item[];
  href: string;
};

interface ListInterface {
  items: Item[];
  isSubList?: boolean;
}

const List = ({ items, isSubList = false }: ListInterface) => {
  return (
    <ul
      className={clsx({
        [styles.wrapper]: true,
        [styles.wrapper_sub]: isSubList,
      })}
    >
      {items.map((item) => {
        return (
          <li key={item.title} className={styles.dropdown_item}>
            <Link href={item.href} className={styles.dropdown_item_link}>
              {item.title}
              {item.subItems?.length ? <MdOutlineArrowLeft className={styles.arrow} /> : null}
            </Link>

            {item.subItems ? (
              <div className={styles.dropdown_list}>
                <List isSubList items={item.subItems} />
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
export type { Item };
