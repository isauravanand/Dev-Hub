import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom"


function Boilerplate() {
  return (
    <>
    <div className='boilerplate'>
      <div className="logo">
    <p className='Dh-logo'><i class="fa-solid fa-code"></i></p> 
    <p className='dev-hub'><Link to="/Home">Dev-Hub</Link></p>
      </div>
    <ul className='sections'>
        <li><i class="fa-solid fa-house"></i><p><Link to="/Home">Home</Link></p></li>
        <li><i class="fa-solid fa-graduation-cap"></i><p><Link to="/batches">Courses</Link></p></li>
    </ul>

    <div className='authentication'>
      <p className='auth' ><Link to="/signup">SignUp</Link></p>
      <p className='auth' ><Link to="/login">Login</Link></p>
    </div>
   </div>
    </> 
  )
}

export default Boilerplate
 