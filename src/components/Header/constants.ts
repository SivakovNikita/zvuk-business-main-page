import { Item } from '../List/List';

const businessTypesData: Item[] = [
  {
    title: 'Ритейл',
    href: '/',
    subItems: [
      { title: 'Магазин одежды', href: '/' },
      { title: 'Магазин электроники', href: '/' },
      { title: 'Магазин обуви', href: '/' },
      { title: 'Детский магазин', href: '/' },
    ],
  },
  {
    title: 'HoReCa',
    href: '/',
    subItems: [
      { title: 'Кафе', href: '/' },
      { title: 'Ресторан', href: '/' },
      { title: 'Бар', href: '/' },
    ],
  },
  {
    title: 'Медицина',
    href: '/',
    subItems: [
      { title: 'Медицинский центр', href: '/' },
      { title: 'Аптека', href: '/' },
      { title: 'Стоматология', href: '/' },
      { title: 'Массаж', href: '/' },
    ],
  },
  {
    title: 'Красота',
    href: '/',
    subItems: [
      { title: 'Барбершоп', href: '/' },
      { title: 'Салон красоты', href: '/' },
      { title: 'Спа салон', href: '/' },
      { title: 'Парикмахерская', href: '/' },
    ],
  },
  {
    title: 'Спорт',
    href: '/',
    subItems: [
      { title: 'Фитнесс клуб', href: '/' },
      { title: 'Йога', href: '/' },
    ],
  },
  {
    title: 'Общественные пространства',
    href: '/',
    subItems: [
      { title: 'Лофт', href: '/' },
      { title: 'Автосалон', href: '/' },
      { title: 'Коворкинг', href: '/' },
      { title: 'Лифт', href: '/' },
    ],
  },
];

const toolsData: Item[] = [
  { title: 'Плеер', href: '/' },
  { title: 'HiFi качество', href: '/' },
  { title: 'ИИ ролик', href: '/' },
  { title: 'Умная колонка SberBoom', href: '/' },
];

const aboutData: Item[] = [
  { title: 'Блог', href: '/' },
  { title: 'Артистам', href: '/' },
  { title: 'Партнерская программа', href: '/' },
];

export { businessTypesData, toolsData, aboutData };
