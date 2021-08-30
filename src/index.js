import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import manageBand from './reducers/manageBand'

// const store = createStore(manageBand)

const store = createStore(
  manageBand, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  // provider looks for changes or updates within our app & re-renders the components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
