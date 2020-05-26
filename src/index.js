import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import configureStore from '../src/config-store';
import {createBrowserHistory} from "history";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';  
import Home from './components/home/Home';

const history = createBrowserHistory();

// Initialize store
const store = configureStore();


ReactDOM.render(
  <Provider store={store} >
   <Router history={history}>
    <Switch>
        <Route path='/' component={Home} />
    </Switch>
</Router>
  </Provider>,
  document.getElementById('root')
);

