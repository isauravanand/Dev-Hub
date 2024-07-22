import React from 'react'
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/footer"
import "./batches.css"
import { Link } from 'react-router-dom';

function batches() {
  return (
    <>
    <Navbar/><hr />
    <div className="batch-1">
        <div className="b1-left">
            <span>Complete Full Stack Development</span>
            <p><i class="fa-solid fa-video"></i>Complete MERN Stack</p>
            <p><i class="fa-solid fa-users"></i>Individual Doubt Solving</p>
            <p><i class="fa-solid fa-book"></i>Access to PYQ's of Top Companies</p>
            <div className='fee'>
            <p>&#8377;5999 <s>8499</s></p>
            <p>29.42% off</p>
            </div>

            <button>Enroll Now</button> 
            <Link to="/mern"> <button>Explore</button></Link>

        </div>
        <div className="b1-right">
           <img src="https://wallpapercave.com/wp/wp8903914.jpg" alt="Loading..."/>
        </div>
    </div>

     <div className="batch-2">
        <div className="b2-left">
        <i class="fa-solid fa-database"></i>
        </div>
        <div className="b2-right">
            <span>Data Structure And Algorithm</span>
            <p><i class="fa-brands fa-java"></i>Java Language</p>
            <p><i class="fa-solid fa-database"></i>Advance DSA</p>
            <p><i class="fa-solid fa-video"></i>50+ Live Seesions with MAANG Engineers</p>
            <p><i class="fa-regular fa-calendar"></i>Duration:4 Months</p>
            <p><i class="fa-regular fa-calendar"></i>Certificate Of Completion</p>
            <div className='fee'>
            <p>&#8377;5999 <s>8499</s></p>
            <p>29.42% off</p>
            </div>
            <button>Enroll Now</button>
            <Link to="/dsa"> <button>Explore</button></Link>

        </div>
     </div>

     <div className="batch-1">
        <div className="b1-left">
            <span>Complete Frontend Development</span>
            <p><i class="fa-solid fa-video"></i>Complete <b>HTML , CSS , JAVASCRIPT , REACT.JS</b> </p>
            <p><i class="fa-solid fa-users"></i>Individual Doubt Solving</p>
            <p><i class="fa-solid fa-book"></i>Access to PYQ's of Top Companies</p>
            <div className='fee'>
            <p>&#8377;5999 <s>8499</s></p>
            <p>29.42% off</p>
            </div>
            <button>Enroll Now</button>
            <Link to="/frontend"><button>Explore</button></Link>
        </div>
        <div className="b1-right">
           <img src="https://images.stockcake.com/public/e/3/5/e3596b37-f08c-4577-a356-cfc2e71a3355_large/mobile-app-designs-stockcake.jpg" alt="Loading..."/>
        </div>
    </div>

    <div className="batch-2">
        <div className="b1-right">
        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww" alt="Loading..." />
        </div>
        <div className="b2-right">
            <span>Complete Backend Development</span>
            <p><i class="fa-brands fa-java"></i>Advance Javascript Concepts</p>
            <p><i class="fa-solid fa-server"></i>Backend Framework - <b>Express.Js & Node.Js</b></p>
            <p><i class="fa-solid fa-video"></i>50+ Live Seesions with MAANG Engineers</p>
            <div className='fee'>
            <p>&#8377;5999 <s>8499</s></p>
            <p>29.42% off</p>
            </div>
            <button>Enroll Now</button>
            <Link to="/backend"> <button>Explore</button></Link>
        </div>
     </div>

     <Footer/>
    </>
  )
}

export default batches
