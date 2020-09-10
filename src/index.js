import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore } from "redux";
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './Reducers/rootReducer';
import { Provider } from "react-redux";

const store = 
  process.env.NODE_ENV === "production" 
  ? createStore(rootReducer)
  : createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
