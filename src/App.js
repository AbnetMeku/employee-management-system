import React from 'react';
import { Routes , Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Add from './components/Employee/Add'
import List from './components/Employee/List'
import Update from './components/Employee/Update'
import View from './components/Employee/view'
import Delete from './components/Employee/Delete'
import Login from './components/Login/Login'

import './App.css';

let App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Login/>}/>
        <Route path={'/employee/add'} element={<Add/>}/>
        <Route path={'/employee/list'} element={<List/>}/>
        <Route path={'/employee/view/:empId'} element={<View/>}/>
        <Route path={'/employee/edit/:empId'} element={<Update/>}/>
        <Route path={'/employee/delete/:empId'} element={<Delete/>}/>

      </Routes>
     
    </React.Fragment>
  );
}

export default App;
