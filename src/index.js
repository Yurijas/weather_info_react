import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));


// gof for development, keeps the page from refreshing, which means that as we develop the code it won't reset the state (it will still update)
if (module.hot) {
  module.hot.accept();
}
