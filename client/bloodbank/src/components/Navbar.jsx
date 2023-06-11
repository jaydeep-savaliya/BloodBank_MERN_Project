import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { MyContext } from './MyContext';
const Navbar = () => {
  const {state} = useContext(MyContext);
  const RenderMenu = ()=>{
    if(state){
      return(
        <>
          <li className="nav-item active">
                      <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/Stock">Stock</NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/Donate">Donate</NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/Profile">Profile</NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/Logout">Logout</NavLink>
                    </li>
        </>
      )
    }else{
      return(
        <>
        <li className="nav-item active">
                      <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    
                      <li className="nav-item active">
                      <NavLink className="nav-link" to="/Login">Sign In</NavLink>
                    </li> 
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/Stock">Stock</NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/Donate">Donate</NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/Profile">Profile</NavLink>
                    </li>
        </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
      <NavLink className="navbar-brand" to="/"> Blood Community</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav" id='nav_ul'>
                    <RenderMenu/>
                  </ul>
                </div>
        </nav>
    </>
  )
}

export default Navbar
