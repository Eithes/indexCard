import React, {useContext} from 'react';
import './SetsList.scss';
import SetThumbnail from '../SetThumbnail/SetThumbnail';
import CardsContext from '../contexts/cards/cards.context';
import SetForm from '../Forms/editAddSetForm';

function SetsList(props) {
  const { cards } = useContext(CardsContext);
  const goToChosenSet = (id) => {
    props.history.push(`/set/${id}`);  
  }
  return (
    <div className="SetsList_wrapper">      
      <div className="SetsList">
        
        { cards.map(set => 
          <SetThumbnail 
            id={set.id}          
            key={set.id}            
            goToChosenSet={goToChosenSet}
          />
        ) }       
      </div>
      <SetForm />
    </div>
  );
}

export default SetsList;