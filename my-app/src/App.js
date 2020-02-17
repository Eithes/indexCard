import React, { useContext, useEffect } from 'react';
import { Route, Switch, } from 'react-router-dom';
import './App.scss';
import SetsList from './components/ListOfSets/SetsList';
import CardSet from './components/CardsSet/CardSet';
import CardsContext from './components/contexts/cards/cards.context';
import ShownCardsState from './components/contexts/shownCards/shownCardsState.context';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import NotFound from './components/404/notFound';

function App() {
  const { cards } = useContext(CardsContext);
 
  function findCardSet(id) {    
    return cards.find(set => set.id === id);
  }
  function findCardSetIndex(id) {    
    return cards.findIndex(set => set.id === id);    
  } 
  useEffect(() => {
    window.localStorage.setItem('cards', JSON.stringify(cards));
    //eslint-disable-next-line    
  }, [cards]);

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' render={routeProps => <SetsList {...routeProps} />} />
        <Route 
          exact path='/set/:id'
          render={ routeProps => (
            <ShownCardsState set={findCardSet(routeProps.match.params.id)} >
              <CardSet 
                set={findCardSet(routeProps.match.params.id)} 
                setIndex={findCardSetIndex(routeProps.match.params.id)}
              />
            </ShownCardsState>
            )           
          }
        />
        <Route render={() => <NotFound />} />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
