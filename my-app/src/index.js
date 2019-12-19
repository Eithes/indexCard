import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {InitCardsProvider} from './components/contexts/initCards.context';

ReactDOM.render(
  <BrowserRouter>
      <InitCardsProvider>
        <App /> 
      </InitCardsProvider>
  </BrowserRouter>, document.getElementById('root')
);

serviceWorker.unregister();
