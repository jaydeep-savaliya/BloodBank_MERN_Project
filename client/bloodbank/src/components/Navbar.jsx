import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
      <NavLink className="navbar-brand" to="/"> Blood Community</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav" id='nav_ul'>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {
                      <li className="nav-item active">
                      <Link className="nav-link" to="/Login">Sign In</Link>
                    </li> }
                    <li className="nav-item active">
                      <Link className="nav-link" to="/Stock">Stock</Link>
                    </li>
                    {/* <li className="nav-item active">
                      <Link className="nav-link" to="/Register">Register</Link>
                    </li> */}
                    <li className="nav-item active">
                      <Link className="nav-link" to="/Donate">Donate</Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/Profile">Profile</Link>
                    </li>
                  </ul>
                </div>
        </nav>
    </>
  )
}

export default Navbar
