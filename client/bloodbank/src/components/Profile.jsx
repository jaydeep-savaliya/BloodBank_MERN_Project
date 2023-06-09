import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
const navigate = useNavigate();
  const[mydata,setMyData] = useState([]);
  useEffect(() => {
    async function LoadProfile(){
      try {
        const res = await fetch('/Profile',{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-type":"application/json"
          },
          credentials:"include",
        });
        const data = await res.json();
        // console.log(data);
        setMyData(data);
      } catch (error) {
        console.log(error);
        navigate("/Login");
      }
    };
    LoadProfile();
  });
  return (
    <>
      <h1>{mydata.name}</h1>
      <h1>{mydata.email}</h1>
      <h1>{mydata.work}</h1>
    </>
  )
}

export default Profile
