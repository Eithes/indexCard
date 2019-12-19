import React, {useContext} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import SetsList from './components/ListOfSets/SetsList';
import CardSet from './components/CardsSet/CardSet';
import { InitCardsContext } from './components/contexts/initCards.context';

function App() {  
  const { initialCards } = useContext(InitCardsContext);

  function findCardSet(id) {    
    return initialCards.findIndex(set => set.id === id);        
  }
   
  return (    
      <Switch>                
        <Route exact path='/' render={routeProps => <SetsList {...routeProps} />} />        
          <Route 
            exact path='/set/:id'
            render={ routeProps => (         
              <CardSet setIndex={findCardSet(routeProps.match.params.id)} />          
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
