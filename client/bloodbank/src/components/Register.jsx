import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import login_img  from '../image/Mobile-login-Cristina.png';
import axios from 'axios';
const Register = () => {
  const navigate = useNavigate();
  const[user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  const [message,setMessage] = useState('');
      const HandleINput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value});
      }
    const postData = async(e)=>{
      e.preventDefault();
      // const { name,email,phone,work,password,cpassword  } = user;
      try {
          const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(regEx.test(user.email)){
          axios.post('/Register',user).then((Response)=>{
            if(Response.data==="fail"){
              alert("Please Fill Form Properly");
            }else if(Response.data==="Fill Form Properly"){
                alert("Fill Form Properly");
            }else if(Response.data==="Already Register"){
              alert("Already Registered user");
            }else{
              alert("Succesfully Register");
              navigate('/');
            }
          });
        }else{
          setMessage("Please Enter Valid Email");
        }
      } catch (error) {
        window.alert("Please Fill Form Properly");
        console.log(error);
      }
    }
  return (
    <>
      <div className='container'>
          <div className='row justify-content-lg-center'>
            <div className='col col-8'>
              <section className='signup mt-6'>
                      <div className='col-7'>
                        <div className='container_signup'>
                        <div className='signup-content'>
                          <div className='signup-form'>
                            <h2 className='form-title'>Sign Up</h2>
                            <form method="POST" className='register-form' id='register-form'>
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
                                <label htmlFor="name"> 
                                  <i className='zmdi zmdi-email'></i>
                                </label>
                                <input type="email"
                                value={user.email}
                                onChange={HandleINput}
                                 name='email' id='email' autoComplete='off' placeholder='Your E-mail' />
                              </div>
                              <div className='form-group'>
                                <label htmlFor="phone">
                                  <i className='zmdi zmdi-phone'></i>
                                </label>
                                <input type="number"
                                value={user.phone}
                                onChange={HandleINput}
                                name='phone' id='phone' maxLength={10} minLength={10} autoComplete='off' placeholder='Your Phoneno' />
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
                                <label htmlFor="password">
                                  <i className='zmdi zmdi-lock'></i>
                                </label>
                                <input type="password" 
                                value={user.password}
                                onChange={HandleINput}
                                name='password' id='password' autoComplete='off' placeholder='Enter your password' />
                              </div>
                              <div className='form-group'>
                                <label htmlFor="cpassword">
                                  <i className='zmdi zmdi-lock'></i>
                                </label>
                                <input type="email"
                                value={user.cpassword}
                                onChange={HandleINput}
                                name='cpassword' id='cpassword' autoComplete='off' placeholder='Conform password' />
                              </div>
                              <p className='text-danger m-0 p-0'>{message}</p>
                              <div className='form-group1 form-button'>
                                  <input type="submit" onClick={postData} name='signup' id='signup' className='form-submit' />
                              </div>
                            </form>     
                          </div>
                        </div>
                      </div>
                      </div>
                      <div className='col'>
                        <img className='img2' src={login_img} alt="" />               
                      </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
