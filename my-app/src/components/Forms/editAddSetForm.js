import React, {useContext, useState,} from 'react';
import './SetForm.scss';
import CardsContext from '../contexts/cards/cards.context';
const uuid = require('uuid-v4');

function SetForm() {
  const { 
    setFormOpened, 
    closeSetForm,    
    submitSetForm,
  } = useContext(CardsContext);
  
  const [nameOfSet, setNameOfSet] = useState('');
  const [formEmoji, setEmoji] = useState('');
  const [formBorderColor, setFormBorderColor] = useState(''); 

  const handleNameChange = (e) => { 
    setNameOfSet(e.target.value);
  }
  const handleBorderColorChange = (e) => {
    setFormBorderColor(e.target.value);
  }
 
  const handleEmojiChange = (e) => {
    setEmoji(e.target.value);
  } 

  const handleSetFormSubmit = (e) => {
    e.preventDefault();
    let newSet = {};  
    newSet.id = uuid();
    newSet.setName = nameOfSet;
    newSet.emoji = formEmoji;
    newSet.borderColor = formBorderColor || '#8cb7e4';
    newSet.colors = ['#A1E48C', '#8cb7e4', '#e4ae8c',];
    newSet.cards = [];
    submitSetForm(newSet);
    closeSetForm();
  }
  
  return (
    <div className={setFormOpened ? 'SetForm-opened' : 'SetForm'}>
      <div className='SetForm_wrapper'>
        <form className='SetForm_form' onSubmit={handleSetFormSubmit}>
          <div className='SetForm_close' onClick={closeSetForm}>X</div>
          <label htmlFor='formHeader'>Set Name</label>
          <input 
            type='text' 
            id='setName' 
            name='setName' 
            className="SetForm_header" 
            value={nameOfSet} 
            onChange={handleNameChange}        
          />           
          <label htmlFor='formEmoji'>Set Icon</label>
          <input 
            type='text' 
            name='formEmoji' 
            id='formEmoji' 
            className="SetForm_emoji" 
            value={formEmoji} 
            onChange={handleEmojiChange}
          />
          <label htmlFor='borderColor'>Set Border Color</label>
          <input 
            type='text' 
            name='borderColor' 
            id='borderColor' 
            className="SetForm_header" 
            placeholder='optional, Hex format'
            value={formBorderColor} 
            onChange={handleBorderColorChange}
          />           
          <input 
            type='submit' 
            className="SetForm_submit" 
            value='Save'            
          />
        </form>
      </div>      
    </div>
  );
}

export default SetForm;