import React, {useState, useEffect, useContext } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import CardsField from './CardsField';
import './CardSet.scss';
import CardsContext from '../contexts/cards/cards.context';

function SubThemeSet(props) { 

  const colors = {
    green: '#A1E48C', 
    blue: '#8cb7e4', 
    red: '#e4ae8c',
  }

  const { cards } = useContext(CardsContext);
  const setId = props.match.params.setId;
  const subTheme = props.match.params.subTheme;
  
  const getSubThemeCards = () => {    
    const currentSet = cards.find(set => set.id === setId);
    const subThemeCards = currentSet.cards.filter(card => card.subTheme === subTheme);
    return subThemeCards;
  }

  getSubThemeCards();
  return (
    <div className="CardSet">
      <NavBar 
            
      />     

      <CardsField        
       
      />

      <Footer
       
      />
    </div>
  );
}

export default SubThemeSet;