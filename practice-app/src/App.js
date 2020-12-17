import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import NavBar from './NavBar.js';
import Pod from './NasaPOD/Pod';
import Users from './Users.js';

import './App.css';

const url = 'https://reqres.in/api/users'


function App() {
  const [users, setUsers] = useState([])
  // console.log('users:', users)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axios
      .get(`${url}`)
      .then(response => {
        console.log(response)
        setUsers(response.data.data)
      }) 

      .catch(err => {
        console.log('error', err)
      })
  }


  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route path='/users'>
          <Users users={users}/>
        </Route>

        <Route path='/'>
          <Pod users={users}/>
        </Route>
  
      </Switch>
    </div>
  );
}

export default App;
