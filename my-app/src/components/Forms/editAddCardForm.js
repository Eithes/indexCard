import React, {useContext, useState, useEffect, useCallback} from 'react';
import './CardForm.scss';
import CardsContext from '../contexts/cards/cards.context';
import ShownCardsContext from '../contexts/shownCards/shownCards.context';
const uuid = require('uuid-v4');

function CardForm(props) {
  const { 
    cardFormOpened, 
    currentCardData, 
    closeCardForm, 
    setCurrentCardState, 
    submitCardForm,
  } = useContext(CardsContext); 
  const {
    name,
    id,
    question,
    answer,
    difficulty,
    subTheme,
    color,
  } = currentCardData;

  const { closeShownCard } = useContext(ShownCardsContext);

  const [formHeader, setHeader] = useState(name);
  const [formQuestion, setQuestion] = useState(question);
  const [formAnswer, setFormAnswer] = useState(answer);
  const [formDifficulty, setFormDifficulty] = useState(difficulty);
  const [formSubTheme, setFormSubTheme] = useState(subTheme);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setError] = useState(false); 

  useEffect(() => {
    setHeader(currentCardData.name);
    setQuestion(currentCardData.question);
    setFormAnswer(currentCardData.answer);
    setFormDifficulty(currentCardData.difficulty);
    setFormSubTheme(currentCardData.subTheme);
  }, [currentCardData]); 

  const handleNameChange = (e) => {
    setHeader( e.target.value);
  }
  const handleQuestionChange = (e) => {    
    setQuestion(e.target.value);
  }
  const handleAnswerChange = (e) => {  
    setFormAnswer(e.target.value);
  }
  const handleDifficultyChange = (e) => {
    setFormDifficulty(e.target.value);
  }
  const handleSubThemeChange = (e) => {   
    setFormSubTheme(e.target.value);
  }

  const validateFields = (fields) => {
    if(!formDifficulty || formDifficulty <= 0 || formDifficulty > 5) {
      setFormDifficulty(1);
      setErrorMessage('You should fill difficulty right');
      return false;
    }
    const validationSubTheme = /^[a-zA-Z0-9]{2,12}$/;
    if(!validationSubTheme.test(formSubTheme)) {
      setError(true);
      setErrorMessage('You should fill sub theme right');
      return false;
    }
    if (fields.some(field => field.length === 0)) {      
      setError(true);
      setErrorMessage('You should fill all fields');
      return false;
    } else {
      setError(false);
      setErrorMessage('');         
      return true;
    }
  }

  const handleCardFormSubmit = (e) => {    
    e.preventDefault();
    if(validateFields([formHeader, formQuestion, formAnswer, formSubTheme])) {      
      let newCard = {};  
      newCard.id = id;
      newCard.name = formHeader.toString();
      newCard.question = formQuestion.toString();
      newCard.answer = formAnswer.toString();
      newCard.difficulty = formDifficulty;
      newCard.subTheme = formSubTheme.toString();
      newCard.color = color;
      let newId = uuid();  
      submitCardForm(id, newCard, newId);
      handleCloseForm();        
    };  
  }

  const handleCloseForm = () => {
    closeCardForm();
    closeShownCard(id);
    setCurrentCardState();
    setError(false);
  }

  const escFunction = useCallback((e) => {
    if(e.key === "Escape" ) {     
      handleCloseForm();
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
    <div className={cardFormOpened ? 'CardForm-opened' : 'CardForm'}>
      <div className='CardForm_wrapper'>
        <form className='CardForm_form' onSubmit={handleCardFormSubmit}>
          <div className='CardForm_close' onClick={handleCloseForm}>X</div>
          <label htmlFor='formHeader'>Card header</label>
          <input 
            type='text'
            // required            
            id='formHeader'
            name='formHeader'
            className={isError && formHeader.length === 0 ? "CardForm_header CardForm-red" : (formHeader.length >= 2) ? "CardForm_header CardForm-green" : "CardForm_header"}
            value={formHeader} 
            onChange={handleNameChange}        
          />
          <span>{errorMessage}</span>
          <label htmlFor='difficulty'>Card difficulty (1 to 5 )</label>
          <input 
            type='number'
            // required
            name='formDifficulty'
            id='formDifficulty'         
            min='1' 
            max='5'
            className={(!formDifficulty || formDifficulty <= 0 || formDifficulty > 5) ? "CardForm_difficulty CardForm-red" : "CardForm_difficulty" }
            value={formDifficulty} 
            onChange={handleDifficultyChange}
          />
          <label htmlFor='question'>Card question</label>
          <textarea           
            className={isError && formQuestion.length === 0 ? "CardForm_question CardForm-red" : (formQuestion.length >= 2) ? "CardForm_question CardForm-green" : "CardForm_question"}
            //  required
            name='formQuestion' 
            id='formQuestion'
            value={formQuestion} 
            onChange={handleQuestionChange}>
          </textarea>
          <label htmlFor='answer'>Card answer</label>
          <textarea
            className={isError && formAnswer.length === 0 ? "CardForm_answer CardForm-red" : (formAnswer.length >= 2) ? "CardForm_answer CardForm-green" : "CardForm_answer"}
            // required
            name='formAnswer' 
            id='formAnswer' 
            onChange={handleAnswerChange}
            value={formAnswer}
          >            
         </textarea>   
          <label htmlFor='subTheme'>Card theme</label>
          <input 
            type='text' 
            name='formSubTheme'
            className={(isError && formSubTheme.length <= 1 ) ? "CardForm_sub CardForm-red" : (formSubTheme.length >= 2) ? "CardForm_sub CardForm-green" :"CardForm_sub"}
            id='formSubTheme'
            onChange={handleSubThemeChange}
            value={formSubTheme}
          />         
          <input 
            type='submit' 
            className="CardForm_submit" 
            value='Save'            
          />
        </form>
      </div>      
    </div>
  );
}

export default CardForm;