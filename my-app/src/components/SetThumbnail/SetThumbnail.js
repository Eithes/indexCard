import React, { useContext } from 'react';
import './SetThumbnail.scss';
import CardsContext from '../contexts/cards/cards.context';

function SetThumbnail(props) {
  const {id, goToChosenSet} = props;
  const { cards, deleteSet } = useContext(CardsContext);

  const handleClick = () => {
    goToChosenSet(id);
  }
  const findCurrentSetIndex = (id) => {
    return cards.findIndex(set => set.id===id);
  }

  const setIndex = findCurrentSetIndex(id);  
  const emoji = cards[setIndex].emoji;
  const size = cards[setIndex].cards.length;
  const name = cards[setIndex].setName;
  const borderColor = cards[setIndex].borderColor;

  const handleSetDelete = (e) => {
    e.stopPropagation();
    deleteSet(id);
    console.log(cards)
  }

  return (
      <div className="SetThumbnail" 
        style={{borderColor: borderColor}}
        onClick={handleClick}
      >
        <h4 className='SetThumbnail_name'>{name}</h4>
        <div className='SetThumbnail_info'>
          <p className='SetThumbnail_info_size'>{size}</p>
          <p className='SetThumbnail_info_emogi'>{emoji}</p>
        </div>
        <div className="SetThumbnail_delete">
          <i className="fas fa-trash" onClick={handleSetDelete}></i>
        </div>
    </div>  
  );
}

export default SetThumbnail;