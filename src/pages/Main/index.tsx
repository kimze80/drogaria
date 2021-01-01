/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState } from 'react';
import Header from '../../components/Header';
import ContentText from '../../components/ContentText';
import Card from '../../components/Card';
import { Container } from './styles';
import DesktopImg from '../../assets/desktop-responsive-design.png';
import TabletImg from '../../assets/tablets-responsive-design.png';
import MobileImg from '../../assets/mobile-responsive-design.png';

const Main: React.FC = () => {
  // const [scrollToReadMore, setScrollToReadMore] = useState(true);

  const handleShowPopUp = useCallback(() => {
    console.log('popup');
  }, []);

  const handleChangeTheme = useCallback(() => {
    console.log('change theme');
  }, []);

  const cards = [
    {
      backgroundColor: '#FE9481',
      img: DesktopImg,
      title: 'Site Responsivo DESKTOP',
      text:
        'Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.',
      scrollMoreText: `Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.
      Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.`,
      btnText: 'Leia mais...',
      // action: handleReadMore,
    },
    {
      backgroundColor: '#FCDA92',
      img: TabletImg,
      title: 'Site Responsivo TABLET',
      text:
        'Quando pressionado o botão Leia mais... informação deverá aparecer completa em um popup na tela.',
      btnText: 'Leia mais...',
      action: handleShowPopUp,
    },
    {
      backgroundColor: '#9C8CB9',
      img: MobileImg,
      title: 'Site Responsivo MOBILE',
      text:
        'Quando pressionado o botão alterar tema modifique o tema do site para blackfriday a seu gosto.',
      btnText: 'Alterar tema',
      action: handleChangeTheme,
    },
  ];
  return (
    <Container>
      <Header />
      <section>
        <ContentText />
      </section>
      <section className="cards">
        {cards.map((card, i) => (
          <Card
            backgroundColor={card.backgroundColor}
            headerText={card.title}
            contentText={card.text}
            imgSrc={card.img}
            btnText={card.btnText}
            btnAction={card.action}
            scrollMoreText={card.scrollMoreText}
            key={i}
          />
        ))}
      </section>
    </Container>
  );
};

export default Main;
