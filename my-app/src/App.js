import React, {useContext} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import SetsList from './components/ListOfSets/SetsList';
import CardSet from './components/CardsSet/CardSet';
import {CardsContext} from './components/contexts/cards/cards.context';

function App() {

  const { cards } = useContext(CardsContext);
 
  function findCardSet(id) {    
    return  cards.find(set => set.id === id);  
  }

  function findCardSetIndex(id) {    
    return cards.findIndex(set => set.id === id);    
  }
   
  return (
    <Switch>
      <Route exact path='/' render={routeProps => <SetsList {...routeProps} />} />
      <Route 
        exact path='/set/:id'
        render={ routeProps => (            
          <CardSet set={findCardSet(routeProps.match.params.id)} setIndex={findCardSetIndex(routeProps.match.params.id)} />
          )           
        }
      />
      <Route 
        exact path='/set/:setId/:subTheme'
        render={ routeProps => <h1> Sub theme page </h1> }
      />
    </Switch>
  );
}

export default App;
