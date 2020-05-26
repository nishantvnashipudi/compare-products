import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';  
import Home from './components/home/Home';

const Routes = () => (
<Router>
    <Switch>
        <Route path='/home' component={Home} />
    </Switch>
</Router>
)
export default Routes;