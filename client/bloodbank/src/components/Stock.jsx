import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Stock = () => {
  const navigate = useNavigate();
  const [show,setShow] = useState();
  const[data,setData] = useState([]);
  const[user,setUser] = useState({
    statename:"",distname:"",bloodgroup:"",bloodcomponent:""
  });
  const handleInput=(e)=>{
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user,[name]:value});
  }
  const DataShow = async(e)=>{
    e.preventDefault();
    // const {statename,distname,bloodgroup,bloodcomponent} = user;
    try {
      await axios.post('/Stock',user).then((Response)=>{
        if(Response.data==="fail"){
          setShow(false);
          window.alert("Data Not Found");
          navigate('/Stock');
        }else{
          setShow(true);
          setData(Response.data);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(data);
  return (
    <>
      <div className='container stock_container'>
        <div className='row'>
          <div className='col col-10'>
            <div className='page_header'>
              <h2>Blood Stock Availability</h2>
            </div>
          </div>
        </div>
        <div className='select_header'>
          <div className='row'>
            <div className='col'>
              <select name="statename" className='stock_check' id="statename" value={user.statename} onChange={handleInput}>
                <option value="Select State">Select State</option>
                <option value="Gujrat">Gujrat</option>
              </select>
            </div>
            <div className='col'>
            <select name="distname" className='stock_check' id="distname" value={user.distname} onChange={handleInput}>
                <option value="Select District">Select District</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
            </div>
            <div className='col'>
            <select name="bloodgroup" className='stock_check' id="bloodgroup" value={user.bloodgroup} onChange={handleInput}>
                <option value="Select bloodgroup">Select bloodgroup</option>
                <option value="O-Positive">O-Positive</option>
                <option value="O-Negative">O-Negative</option>
                <option value="A-Positive">A-Positive</option>
                <option value="A-Negative">A-Negative</option>
                <option value="B-Positive">B-Positive</option>
                <option value="B-Negative">B-Negative</option>
                <option value="AB-Positive">AB-Positive</option>
                <option value="AB-Negative">AB-Negative</option>
              </select>
            </div>
            <div className='col'>
            <select name="bloodcomponent" className='stock_check' id="bloodcomponent" value={user.bloodcomponent} onChange={handleInput}>
                <option value="Select BloodComponent">Select BloodComponent</option>
                <option value="Blood Donor">Blood Donor</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="submit_button">
        <div className='row'>
          <div className='col'>
            <input className='stock_submit' type="submit" onClick={DataShow} placeholder='Submit' name='submit' />
          </div>
        </div>
      </div>
      <div className='container'>
        {show &&  <table class="table table-bordered stock_table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>State</th>
                <th>District</th>
                <th>Blood Group</th>
                <th>Location</th>
                <th>Stock Availability</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody className='table table-bordered'>
              {
                data.map((val,index)=>{
                  return(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{val.state}</td>
                      <td>{val.district}</td>
                      <td>{val.bloodgroup}</td>
                      <td>{val.location}</td>
                      <td>{val.stockavailability}</td>
                      <td>{val.rate}</td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>}
      </div>
    </>
  )
}

export default Stock
