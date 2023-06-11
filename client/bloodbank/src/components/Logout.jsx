import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from './MyContext';
const Logout = () => {
    const {dispatch} = useContext(MyContext);
    const navigate = useNavigate();
    useEffect(() => {
      fetch('/Logout',{
        method:"GET",
          headers:{
            Accept:"application/json",
            "Content-type":"application/json"
          },
          credentials:"include",
      }).then((res)=>{
        dispatch({type:"USER",payload:false});
        navigate('/',{replace:true});
      }).catch((err)=>{
        console.log(err);
      })
    })
    
  return (
    <>
        
    </>
  )
}

export default Logout
