import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import SetsList from './components/ListOfSets/SetsList';
import CardSet from './components/CardsSet/CardSet';
import startCards from './startCards';

function App() {

  function findCardSet(id) {    
    return startCards.find(set => set.id === id);        
  }
   
  return (
    <Switch>
      <Route exact path='/' render={routeProps => <SetsList allSets={startCards} {...routeProps} />} />
      <Route 
        exact path='/set/:id'
        render={ routeProps => <CardSet set={findCardSet(routeProps.match.params.id)} /> }
      />
    </Switch>
  );
}

export default App;
