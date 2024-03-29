import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "./reducers/rootReducer"


const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
