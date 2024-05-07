import React from 'react';
import Button from '../../components/Button/Button';
import Gallery from '../../components/Gallery/Gallery';
import Icons from '../../components/Icons/Icons'
import { cardsData } from "./galleryData";
import { iconsData } from "./iconsData";

function MyApp() {
    return (
      <>
        <h1>Аудиосервис <br/>для вашего бизнеса</h1>
        <h2>Уникальная атмосфера для ресторана с сотнями <br/>плейлистов и подборками под любое событие</h2>
        <Icons iconsData={ iconsData }/>
        <Button />
        <Gallery cardsData={ cardsData }/>
      </>
    );
};
  
export default MyApp;