import React from 'react'
import donate from '../image/donate.jpg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
const Donate = () => {
  const navigate = useNavigate();
  const[user,setUser] = useState({
    name:"",email:"",phone:"",work:"",date:"",gender:"",address:"",bloodgroup:"Select an option",
  });
  const HandleINput = (e)=>{
    console.log(e); 
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user,[name]:value});
  }
  const postData = async(e)=>{
    e.preventDefault();
    try {
      // const {name,email,phone,work,date,gender,address,bloodgroup} = user;
      await axios.post('/Donate',user).then((Response)=>{
        console.log(Response.status);
        if(Response.data==="fail"){
          window.alert("Please Register First");
          navigate('/Register');
        }else{
          window.alert("Successfully Donate Request Sent");
          navigate('/');
        }
      })
    } catch (error) {
      window.alert("Please Register First");
      navigate('/Register');
    }
  }
  return (
    <>
          <section className="h-100 h-custom" >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-10 col-xl-6">
                <div className="card rounded-3">
                  <img src={donate}
                    className="w-100"
                    alt="" />
                  <div className="card-body ">
                    <h3 className="donate_head ">Blood Donate Form</h3>
                    <form method="POST" className='donate-form  ' id='register-form'>
                            <div className='row m-2'>
                                <div className='col col-5 donate_form_head'>
                                  <div className='form-group'>
                                  <label htmlFor="name">
                                    <i className='zmdi zmdi-account'></i>
                                  </label>
                                  <input type="text" name='name' id='name' 
                                  autoComplete='off' 
                                  value={user.name}
                                  onChange={HandleINput}
                                  placeholder='Your Name' />
                                </div>
                                <div className='form-group'>
                                  <label htmlFor="phone">
                                    <i className='zmdi zmdi-phone'></i>
                                  </label>
                                  <input type="number"
                                  value={user.phone}
                                  minLength="10"
                                   maxLength="10" 
                                  onChange={HandleINput}
                                  name='phone' id='phone' autoComplete='off' placeholder='Your Phoneno' />
                                </div>
                                <div className='form-group'>
                                  <label htmlFor="date">
                                    <i className='zmdi zmdi-calendar'></i>
                                  </label>
                                  <input type="date"
                                  value={user.date}
                                  onChange={HandleINput}
                                  name='date' id='date' autoComplete='off'/>
                                </div>
                                <div className='form-group'>
                                  <label htmlFor="address">
                                    <i className='zmdi zmdi-pin'></i>
                                  </label>
                                  <input type="text"
                                  value={user.address}
                                  onChange={HandleINput}
                                  name='address' id='address' autoComplete='off'
                                  placeholder='Enter Your city'/>
                                </div>
                              </div>
                                <div className='col-5 donate_form_bottom'>
                                  <div className='form-group'>
                                    <label htmlFor="name">
                                        <i className='zmdi zmdi-email'></i>
                                      </label>
                                    <input type="email"
                                    value={user.email}
                                    onChange={HandleINput}
                                    name='email' id='email' autoComplete='off' placeholder='Your E-mail' />
                                  </div>
                                  <div className='form-group'>
                                    <label htmlFor="work">
                                      <i className='zmdi zmdi-slideshow'></i>
                                    </label>
                                    <input type="text" 
                                    value={user.work}
                                    onChange={HandleINput}
                                    name='work' id='work' autoComplete='off' placeholder='Your Profession' />
                                  </div>
                                  <div className='form-group'>
                                      <label htmlFor="gender">
                                        <i className="zmdi zmdi-male-female"></i>
                                      </label>
                                      <input type="text" placeholder='Enter Your Gender' name='gender' onChange={HandleINput} 
                                      value={user.gender}/>
                                  </div>
                                  <div className='form-group'>
                                      <label htmlFor="bloodgroup"><i className="zmdi zmdi-invert-colors"></i></label>
                                      <select name="bloodgroup" id="bloodgroup" onChange={HandleINput} value={user.bloodgroup} >
                                      <option  value="Select an option">Select an option</option>
                                      <option  value="O Positive">O Positive</option>
                                      <option  value="O Negative">O Negative</option>
                                      <option  value="A Positive">A Positive</option>
                                      <option  value="A Negative">A Negative</option>
                                    </select>
                                    
                                  </div>
                                </div>
                              <div className='form-group1 form-button'>
                                  <input type="submit" name='signup' id='signup' onClick={postData} className='form-submit' />
                              </div>
                            </div>  
                    </form> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Donate
