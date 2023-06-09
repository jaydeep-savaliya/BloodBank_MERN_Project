import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Stock = () => {
  const [show,setShow] = useState();
  const [sta,setSta] = useState([]);
  const[data,setData] = useState([]);
  const [state,setState] = useState({
    statename:"Select State"
  });
  const[user,setUser] = useState({
    distname:"",bloodgroup:"",bloodcomponent:""
  });
  const handleInput=async(e)=>{
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user,[name]:value});
  }
  const  getStateData = async(e)=>{
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setState({...state,[name]:value});
  }
  useEffect(() => {
      async function dist(){
        try {
          await axios.post('/district',state).then(Response=>{
            if(Response.data==="fail"){
              alert("No Found City");
            }else{
              setSta(Response.data);
            }
          })
        } catch (error) {
          console.log(error);
        }
      }
      dist();
  }, [state]);
  const DataShow = async(e)=>{
    e.preventDefault();
    try {
      await axios.post('/Stock',user).then(Response=>{
        if(Response.data==="fail"){
          setShow(false);
          window.alert("Data Not Found");
        }else{
          setShow(true);
          setData(Response.data);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
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
              <select name="statename" className='stock_check' id="statename" value={state.statename} onChange={getStateData}>
                <option value="Select State">Select State</option>
                <option value="Assam">Assam</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli (UT)">Dadra and Nagar Haveli (UT)</option>
                <option value="Daman and Diu (UT)">Daman and Diu (UT)</option>
                <option value="Goa">Goa</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Lakshadweep (UT)">Lakshadweep (UT)</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Puducherry (UT)">Puducherry (UT)</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value=""></option>
              </select>
            </div>
            <div className='col'>
            <select name="distname" className='stock_check' id="distname" value={user.distname} onChange={handleInput}>
                <option value="Select District">Select District</option>
                {
                  sta.map((val)=>{
                    return(
                      val.districts.map((re,index)=>{
                        return(
                          <option key={index} value={re}>{re}</option>
                        )
                      })
                    )
                  })
                }
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
        {show &&  <table className="table table-bordered stock_table">
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
