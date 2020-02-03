import React, {useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card(props) {
  const currentColor = props.color;

  const handleOpen = (e) => {
    props.toggleCard(props.id);
  }
  
  const handleChange = (e) => {
    props.changeCardColor(props.id, e.target.value);
  } 

  const escFunction = useCallback((e) => {
    if(e.key === "Escape" ) {     
      props.closeCard(props.id);
    }
  }, []);

  const closeThisCard = (e) => {
    if(e.target.className === 'Card_opened') {
      props.closeCard(props.id);
    }    
  }
  useEffect(() => {
      document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };  
  }, []);


  return (
    <article className="Card" onClick={closeThisCard} >
    { !props.opened ? (
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
        <Link to='/' className="Card_info_more" onClick={e => e.stopPropagation()}>MORE</Link>
        </div>
      </div>
      ) : (
        <div className="Card_opened" 
          style={{backgroundColor: currentColor}}                  
        >    
        <div className="Card_opened_wrapper">
          <div 
            className="Card_opened_close"
            onClick={handleOpen}>
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
              <input type='radio' id='green' name='answered' value='green' onChange={handleChange} />
              <label htmlFor='green' className='greenBtn'>I know it!</label>
            </div>
            <div className="form_radio">
              <input type='radio' name='answered' id='blue' value='blue'  onChange={handleChange} />
              <label htmlFor='blue' className='blueBtn'>To Repeat</label>
            </div>   
            <div className="form_radio">
              <input type='radio' name='answered' id='red'  value='red'  onChange={handleChange} />
              <label htmlFor='red' className='redBtn' >Forgotten</label>
            </div>            
          </form>
          <h4 className="Card_header--sub">
            {props.subTheme}
          </h4>
          <button className='editCardBtn'>Edit</button>
        </div>
      </div>  
      )}    
    </article>
  );
}

export default Card;