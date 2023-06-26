import React, {  useEffect,useState } from 'react'
import axios from "axios";
import img from '../image/pngtree-blood-donation-art-free-simple-white-banner-image_180424-removebg-preview.png';
import Card from './Card';
import { NavLink } from 'react-router-dom';
const Home = () => {
  const[data,setData] = useState([]);
  const fetchData = async()=>{
    try {
      await axios.get('http://localhost:5000/').then(Response=>{
          setData(Response.data);
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    
    fetchData();
  });
  return (
    <>
      <section id='home_section'>
        <div className='row'>
          <div className='img_carosoul'>
            <div className='col'> </div>
          <div className='col col-8' id='carosoul'>
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={img} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={img} className="d-block w-100" alt="..."/>
                  </div>
                </div>
              </div>
          </div>
          <div className='col'>

          </div>
          </div>
        </div>
        <div className='row'>
          <div className='col' id='Blood_info'>
            <h1>Blood Type Information</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {
              data.map((val,index)=>{
                return(
                  <Card
                  key={index}
                  information={val.information}
                  name={val.name}
                  percentage={val.percentage}
                  image={val.image}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row" style={{marginLeft:"12rem"}}>
                    <div className="col-4 item">
                        <h3 style={{cursor:'pointer'}}>Services</h3>
                        <ul>
                            <li><NavLink to="/Stock">Blood Stock Availability</NavLink></li>
                            <li><NavLink to='/'>Blood Information</NavLink></li>
                            <li><NavLink to="/Donate" >Donate Blood</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-4 item">
                        <h3 style={{cursor:'pointer'}}>About</h3>
                        <ul>
                            <li ><NavLink href="#">Company</NavLink></li>
                            <li><NavLink to="/Contacts">Team</NavLink></li>
                            <li><NavLink href="#">Careers</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-4 item text">
                        <h3 style={{cursor:'pointer'}}>Team</h3>
                        <p>Jaydip</p>
                        <p>Om</p>
                        <p>Sagar</p>
                        <p>Bhargav</p>
                    </div>   
                </div>
                <p className="copyright">Design Engineering Project @ 2023</p>
            </div>
        </footer>
    </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
