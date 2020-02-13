import React, { useContext } from 'react';
import './Footer.scss';
import CardsContext from '../contexts/cards/cards.context';

function Footer(props) {
  const { cards, currentIndex } = useContext(CardsContext);
  let emoji, setName;
  if(currentIndex !== null && cards.length > 0) {
   emoji = cards[currentIndex].emoji;
   setName = cards[currentIndex].setName;
  } 

  return (   
    <footer className="Footer">
      { cards.length > 0  ?
      <>
      <h4 className='Footer-name'>{setName}</h4>
      <span className='emoji'>{emoji}</span>  
      </>  
      : <></>
      }  
    </footer>
  );
}

export default Footer;