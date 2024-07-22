import React from 'react'
import "./footer.css"
function footer() {
  return (
   <>
   <div className='footer'>
    <div className="footer-logo">
    <i class="fa-solid fa-code"/>
    <p>Dev-Hub</p>
    </div>

    <div className="links">
        <p>Helpful Links</p>
        <ul>
            <li>Courses</li>
            <li>Privacy Policy</li>
            <li>Refund policy</li>
            <li>Term & Conditions</li>
        </ul>
    </div>
    
    <div className="get-in-touch">
        <p>Get In Touch</p>
        <ul>
            <li>devhub123@gmail.com</li>
            <li>Supprt Team: 10AM - 6PM</li>
        </ul>
    </div>
   <div className='copyright'> Copyright	&copy; 2024</div>
   </div>

   </>
  )
}

export default footer
