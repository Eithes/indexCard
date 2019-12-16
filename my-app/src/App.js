import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import SetsList from './components/ListOfSets/SetsList';
import CardSet from './components/CardsSet/CardSet';
import startCards from './startCards';
import {CardsProvider} from './components/contexts/cards.context';

function App() {

  function findCardSet(id) {    
    return startCards.find(set => set.id === id);        
  }
   
  return (
    <Switch>
      <Route exact path='/' render={routeProps => <SetsList allSets={startCards} {...routeProps} />} />
      <Route 
        exact path='/set/:id'
        render={ routeProps => (
            <CardsProvider default={findCardSet(routeProps.match.params.id).cards}>
              <CardSet set={findCardSet(routeProps.match.params.id)} />
            </CardsProvider>
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
