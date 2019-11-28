import React from 'react';
import './Card.scss';

function Card(props) {
  const currentColor = props.colors[0];
  return (
    <div className="Card" style={{backgroundColor: currentColor}}>
      <div className="Card_wrapper">
        <h3 className="Card_header">
          {props.name}
        </h3>
        <ul className="Card_question">
          {props.question.split('- ').map((line, i) => <li key={i}>{line}</li>)}
        </ul>
        <div className="Card_info">
          <span className="Card_info_difficulty">{props.difficulty}</span>
          <a className="Card_info_more">MORE</a>
        </div>
      </div>   
    </div>
  );
}

export default Card;