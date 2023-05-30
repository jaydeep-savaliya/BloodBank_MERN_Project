import React, { useEffect,useState } from 'react'
import axios from "axios";
import img from '../image/pngtree-blood-donation-art-free-simple-white-banner-image_180424-removebg-preview.png';
import Card from './Card';
const Home = () => {
  const[data,setData] = useState([]);
  const fetchData = async()=>{
    try {
      axios.get('http://localhost:5000/').then(Response=>{
        if(Response.data==="fail"){
          alert("Fail");
        }else{
          setData(Response.data);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(data);
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
      </section>
    </>
  )
}

export default Home
