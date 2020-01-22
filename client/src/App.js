import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';

const App = () => {
  
  return (
    <Router>
      <Fragment>
        <Navbar />        
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>               
      </Fragment>
    </Router>   
  );
};

export default App;
