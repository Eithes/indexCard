import React, {useEffect, useCallback, useContext} from 'react';
import './Card.scss';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';
import CardsContext from '../contexts/cards/cards.context';


function Card(props) {
  const currentColor = props.color;
  const { deleteCard, openCardForm, setCurrentCardState } = useContext(CardsContext);

  const {
    openShownCard, 
    closeShownCard,
    opened, 
    currentCardId,
    setSubTheme,
  } = useContext(ShownCardsContext);

  const cardToEdit = {
    name: props.name,
    id: props.id,
    question: props.question,
    answer: props.answer,
    difficulty: props.difficulty,
    subTheme: props.subTheme,
    color: currentColor,
  }

  const handleChange = (e) => {
    props.changeCardColor(props.id, e.target.value);    
  }

  const handleOpen = (e) => {
    openShownCard(props.id);
    setCurrentCardState(cardToEdit);
  }

  const closeCard = () => {
    closeShownCard();
    setCurrentCardState();
  }
  const closeCardById = () => {
    closeShownCard(props.id);
    setCurrentCardState();
  }

  const closeThisCard = (e) => {
    if(e.target.className === 'Card_opened') {
      closeCardById();
    }    
  }
  const handleCardDelete = () => {
    deleteCard(props.id);
    closeCardById();
  }

  const handleOpenCardForm = () => {   
    openCardForm(props.id, cardToEdit);
  }

  const handleSetSubTheme = (e) => {
    e.stopPropagation(); 
    setSubTheme(props.subTheme);
  }

  const escFunction = useCallback((e) => {
    if(e.key === "Escape" ) {     
      closeCardById();
    }
    //eslint-disable-next-line
  }, []); 
  
  useEffect(() => {
      document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <article className="Card" onClick={closeThisCard}>
    { currentCardId===props.id && opened ?  (
      <div className="Card_opened" 
        style={{backgroundColor: currentColor}}                  
      >    
      <div className="Card_opened_wrapper">
        <div 
          className="Card_opened_close"
          onClick={closeCard}>
          X
        </div>
        <h2 className="Card_opened_header">
          {props.name}
        </h2>
        <h4 className="Card_opened_difficulty">
          {props.difficulty}
        </h4>          
        <div className="Card_answer">
          {props.answer}
        </div>
        <form className="Card_opened_buttons">
          <div className="form_radio">
            <input 
              type='radio' 
              id='green' 
              name='answered' 
              value='green' 
              onChange={handleChange} 
            />
            <label htmlFor='green' className='greenBtn'>I know it!</label>
          </div>
          <div className="form_radio">
            <input 
              type='radio' 
              name='answered' 
              id='blue' 
              value='blue'  
              onChange={handleChange} 
            />
            <label htmlFor='blue' className='blueBtn'>To Repeat</label>
          </div>   
          <div className="form_radio">
            <input 
              type='radio' 
              name='answered' 
              id='red'  value='red'  
              onChange={handleChange} 
            />
            <label htmlFor='red' className='redBtn' >Forgotten</label>
          </div>            
        </form>
        <h4 className="Card_header--sub">
          {props.subTheme}
        </h4>
        <div className='cardEditButtons'>
          <button 
            className='editCardBtn' 
            onClick={handleOpenCardForm}
          >
            Edit
          </button>
          <button className='deleteCardBtn' onClick={handleCardDelete}>Delete</button>
        </div>
      </div>
    </div>  
    ) : (
      <div className="Card_wrapper"
        style={{backgroundColor: currentColor}}   
        onClick={handleOpen}
      >
        <h3 className="Card_header">
          {props.name}
        </h3>
        <ul className="Card_question">
          {props.question.split('- ').map((line, i) => <li key={i}>{line}</li>)}
        </ul>
        <div className="Card_info">
          <span className="Card_info_difficulty">{props.difficulty}</span>          
        <div className="Card_info_more" onClick={handleSetSubTheme}>{props.subTheme}</div>
        </div>
      </div>
      )
    }    
    </article>
  );
}

export default Card;