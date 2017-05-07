import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import App from './App';
// import reducer from './reducer';
import Hello from './Hello';
import reducer from './myreducer';

// Store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root')
);
