import React, { useReducer } from 'react';
import './style/style.css';
import {Routes,Route} from 'react-router-dom';
import { MyContext } from './components/MyContext';
import Navbar from './components/Navbar';
import Home from '../src/components/Home';
import Login from './components/Login';
import Stock from './components/Stock'; 
import Register from './components/Register';
import Donate from './components/Donate';
import Profile from './components/Profile';
import Logout from './components/Logout';
import { initalState, reducer } from './reducer/useReducer';
import Contacts from './components/Contacts';
const App = () => {
  const [state, dispatch] = useReducer(reducer,initalState);
  return (
    <>
    <MyContext.Provider value={{state,dispatch}}>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/Stock' element={<Stock/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Donate' element={<Donate/>}/>
        <Route exact path='/Profile' element={<Profile/>} />
        <Route exact path='/Logout' element={<Logout/>}/>
        <Route exact path='/Contacts' element={<Contacts/>}/>
      </Routes>
      </MyContext.Provider>
    </>
  )
}

export default App;
