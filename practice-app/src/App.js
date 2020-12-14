import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NavBar from './NavBar.js';
import Pod from './NasaPOD/Pod';
import Users from './Users.js';

import './App.css';


function App() {

  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route path='/users'>
          <Users/>
        </Route>

        <Route path='/'>
          <Pod/>
        </Route>
  
      </Switch>
    </div>
  );
}

export default App;
