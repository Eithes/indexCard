import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import CardsField from './CardsField';
import './CardSet.scss';

function CardSet(props) {

  return (
    <div className="CardSet">
      <NavBar />     
      <CardsField cards={props.cards} colors={props.colors}/>
      <Footer />
    </div>
  );
}

export default CardSet;