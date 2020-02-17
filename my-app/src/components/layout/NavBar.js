import React, { useState, useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './NavBar.scss';
import LinearProgress from '@material-ui/core/LinearProgress';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CardsContext from '../contexts/cards/cards.context';
import AddIcon from '@material-ui/icons/Add';

function NavBar(props) {
  const [page, changePage] = useState('main');
  const { 
    currentProgress,
    setNewColorFilter,
    changeIndex,
    openCardForm,
    openSetForm,
  } = useContext(CardsContext);
  
  const [inputValue, setInputValue] = useState('all');
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setNewColorFilter(e.target.value);
  }

 const history = useHistory();
  useEffect(() => {
    if(history.location.pathname.startsWith('/set')) {      
      changePage('set');      
    } else {
      changePage('main');
    }
    setNewColorFilter('all');
    setInputValue('all');
    changeIndex(null);
  }, [history.location.pathname]);
 

  return (
    <header className={ page === 'set' ? "NavBar" : "NavBar NavBar-white" }>
    <div className="NavBar_Wrapper"> 
    <div className="NavBar_Logo">
      <Link to='/'>IndexCards</Link>      
    </div>
    { page === 'set' &&
      <div className="NavBar_CardsProgress">
        <div className="NavBar_CardsProgress_Nums">
          {`${currentProgress.numOfCompleted} / ${currentProgress.numOfCards}`}
        </div>
        <LinearProgress 
          variant="determinate" 
          value={currentProgress.progress}
          className="NavBar_CardsProgress_Bar"
        />
      </div>
    }
      
    <div className='NavBar_Controllers'>
      <div className="NavBar_CardsFilter">
        { page === 'set' &&
          <Select 
            className="select"
            onChange={handleChange}
            value={inputValue}
          >
            <MenuItem value='all'>ALL</MenuItem>
            <MenuItem value='red'>RED</MenuItem>
            <MenuItem value='blue'>BLUE</MenuItem>
            <MenuItem value='green'>GREEN</MenuItem>
          </Select>
        }
      </div>
      { page === 'set' ?
        <div className='NavBar_AddCard' title="Add New Card" onClick={openCardForm}><AddIcon /></div>
        :
        <div className='NavBar_AddSet' title="Add New Card Set" onClick={openSetForm} ><AddIcon /></div>
      }
    </div>
    
    </div>
    </header>
  );
}

export default withRouter(NavBar);