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
          <div className='col col-md-6' id='carosoul'>
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={img} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={img} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={img} class="d-block w-100" alt="..."/>
                  </div>
                </div>
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
              data.map((val)=>{
                return(
                  <Card
                  key={val.id}
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
