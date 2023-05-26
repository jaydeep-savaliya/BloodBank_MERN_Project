import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import sign_img  from '../image/6310507.jpg';
const Login = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    email:"",password:""
  });
  const HandleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user,[name]:value});
  }
  const DoRegister = ()=>{
    navigate('/Register');
  }
  const DoLogin = async(e)=>{
    e.preventDefault();
    const {email,password} = user;
    try {
      await axios.post('/Login',user).then((Response)=>{
        if(Response.data==="success"){
          navigate('/');
        }else if(Response.data==="Password Not Match"){
          window.alert("Password Are Not Match");
        }else{
          window.alert("Please Register First");
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
          <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <section className='login mt-6'>
                        <div className='col'>
                          <img className='img1' src={sign_img} alt="" />
                        </div>
                        <div className='col-8'>
                            <div className='login-container'>
                                <div className='login-content'>
                                  <div className='login-form'>
                                    <h1>Login</h1>
                                    <form className='submit-form'>
                                    <div className='form-group'>
                                      <label htmlFor="name">
                                          <i className='zmdi zmdi-email'></i>
                                        </label>
                                        <input type="email" name='email' 
                                        value={user.email}
                                          onChange={HandleInput}
                                          
                                         id='email' autoComplete='off' placeholder='Your E-mail' />
                                      </div>
                                      <div className='form-group'>
                                        <label htmlFor="password">
                                          <i className='zmdi zmdi-lock'></i>
                                        </label>
                                        <input type="password" 
                                        value={user.password}
                                         onChange={HandleInput}
                                         
                                        name='password' id='password' autoComplete='off' placeholder='Enter your password' />
                                      </div>
                                      <div className='form-control'>
                                      <div className='form-group1 form-button'>
                                          <input type="submit" 
                                          name='signup' id='signup' onClick={DoLogin} className='form-submit' value='Login'/>
                                      </div>
                                      <div className='form-group1 form-button'>
                                          <input type="submit" 
                                          name='register' id='register' onClick={DoRegister} className='form-submit' value='Register'/>
                                      </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
          </div>
    </>
  )
}

export default Login