import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './SetsList.scss';
import SetThumbnail from '../SetThumbnail/SetThumbnail';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import { InitCardsContext } from '../contexts/initCards.context';

function SetsList(props) {
  const { initialCards } = useContext(InitCardsContext);

  const goToChosenSet = (id) => {
    props.history.push(`/set/${id}`);  
  }
  return (
    <div className="SetsList_wrapper">
      <NavBar />
      <div className="SetsList">
        { initialCards.map(set => 
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