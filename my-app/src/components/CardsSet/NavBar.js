import React, {useState,} from 'react';
import './NavBar.scss';
import LinearProgress from '@material-ui/core/LinearProgress';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function NavBar(props) {
  const {numOfCompleted, numOfCards, progress, changeShownCards} = props;
  const [inputValue, setInputValue] = useState('all');
  const handleChange = (e) => {
    setInputValue(e.target.value);
    changeShownCards(e.target.value);
  }
  return (
    <header className="NavBar">
    <div className="NavBar_Wrapper"> 
    <div className="NavBar_Logo">
      <a href="#">IndexCards</a>      
    </div>
    <div className="NavBar_CardsProgress">
      <div className="NavBar_CardsProgress_Nums">
        {`${numOfCompleted} / ${numOfCards}`}
      </div>
      <LinearProgress 
        variant="determinate" 
        value={progress}
        className="NavBar_CardsProgress_Bar"
      />
    </div>
    <div className='NavBar_Controllers'>
      <div className="NavBar_CardsFilter">
        <Select className="select"
          onChange={handleChange}
          value={inputValue}
        >
          <MenuItem value='all'>ALL</MenuItem>
          <MenuItem value='red'>RED</MenuItem>
          <MenuItem value='blue'>BLUE</MenuItem>
          <MenuItem value='green'>GREEN</MenuItem>
        </Select>
      </div>
      <div className="NavBar_AddCard">E</div>
    </div>
    
    </div>
    </header>
  );
}

export default NavBar;