import React from 'react';
import './App.scss';
import CardSet from './components/CardsSet/CardSet';
import startCards from './startCards';

function App() {
  return (
    <div className="App">
      <CardSet {...startCards[0]} />
    </div>
  );
}

export default App;
