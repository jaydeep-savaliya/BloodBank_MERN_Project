import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './MyContext';
const Profile = () => {
  const {dispatch} = useContext(MyContext);
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
        dispatch({type:"USER",payload:true})
        setMyData(data);
      } catch (error) {
        console.log(error);
        dispatch({type:"USER",payload:false})
        navigate("/Login");
      }
    };
    LoadProfile();
  });
  return (
    <>
        <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-4 gradient-custom text-center text-white">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" className="img-fluid my-5"  />
              <h5>{mydata.name}</h5>
              <p>{mydata.work}</p>
              <i className="far fa-edit mb-5"></i>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Information</h6>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>E-mail</h6>
                    <p className="text-muted">{mydata.email}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">{mydata.phone}</p>
                  </div>
                </div>
                <h6>Projects</h6>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Recent</h6>
                    <p className="text-muted">{mydata.work}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Most Viewed</h6>
                    <p className="text-muted">Dolor sit amet</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                  <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                  <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Profile
