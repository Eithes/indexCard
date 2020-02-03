import React, {useContext} from 'react';
import './SetsList.scss';
import SetThumbnail from '../SetThumbnail/SetThumbnail';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import {CardsContext} from '../contexts/cards/cards.context';

function SetsList(props) {

  const { cards } = useContext(CardsContext);
  const goToChosenSet = (id) => {
    props.history.push(`/set/${id}`);  
  }
  return (
    <div className="SetsList_wrapper">
      <NavBar />
      <div className="SetsList">
        
        { cards.map(set => 
          <SetThumbnail 
            id={set.id}
            name={set.setName} 
            borderColor={set.borderColor} 
            key={set.id}
            emoji={set.emoji}
            size={set.cards.length}
            goToChosenSet={goToChosenSet}
          />
        ) }       
      </div> 
      <Footer /> 
    </div>
  );
}

export default SetsList;