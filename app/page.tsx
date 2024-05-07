import React from 'react';
import Button from '../src/components/Button/Button';
import Gallery from '../src/components/Gallery/Gallery';
import Icons from '../src/components/Icons/Icons'
import '../public/global.css';
import { cardsData } from "./galleryData.js";
import { iconsData } from "./iconsData.js"

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