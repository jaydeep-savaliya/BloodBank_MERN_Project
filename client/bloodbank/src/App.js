import React from 'react';
import './style/style.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../src/components/Home';
import Login from './components/Login';
import Stock from './components/Stock'; 
import Register from './components/Register';
import Donate from './components/Donate';
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/Stock' element={<Stock/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Donate' element={<Donate/>}/>
      </Routes>
    </>
  )
}

export default App
