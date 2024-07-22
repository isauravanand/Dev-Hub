import React from 'react'
import {Link} from "react-router-dom";
import batches from '../Batches/batches';
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/footer'
import "./Home.css"


function Home() {
  return (
    <>
      <Navbar />

      <div className='container-1'>
        <div className="c1-section1">
          <p>Learn from Dev-Hub & Become<br />
            <span> The Top 1% of Developer</span></p>
          <Link to="/batches"><button>Explore Batches</button> </Link>
        </div>
        <div className="c1-section2">
          <i class="fa-solid fa-code-compare"></i>
        </div>
      </div>


      <div className="container-2">
        <div className='c2-upper'>India's Most Loved Coding Community</div>
        <div className="c2-lower">
          <p><i class="fa-solid fa-users"></i><span>1 Millions+ </span> <br /> Happy Learners</p>
          <p><i class="fa-solid fa-hand-holding-heart"></i><span>10 Millions+</span> <br /> Monthly Views</p>
        </div>
      </div>
      <br />

      <p className="c3-heading">Featured</p>

      <div className="container-3">
        <div className='cards'>
          <div className='cards-upper'>
            <img src="https://images.stockcake.com/public/e/3/5/e3596b37-f08c-4577-a356-cfc2e71a3355_large/mobile-app-designs-stockcake.jpg" alt="Loading..." />
          </div>
          <div className="cards-lower">
            <div className="cl-1">Complete Frontend Development</div>
            <div className="cl-2">
              <p>&#8377;5999 <s>8499</s></p>
              <p>29.42% off</p>
            </div>
            <button className='explore'>Explore</button>
          </div>

        </div>

        <div className='cards'>
          <div className='cards-upper'>
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww" alt="Loading..." />
          </div>
          <div className="cards-lower">
            <div className="cl-1">Complete Backend Development</div>
            <div className="cl-2">
              <p>&#8377;5999 <s>8499</s></p>
              <p>29.42% off</p>
            </div>
            <button className='explore'>Explore</button>
          </div>

        </div>

        <div className='cards'>
          <div className='cards-upper'>
            <img src="https://wallpapercave.com/wp/wp8903914.jpg" alt="Loading..." />
          </div>
          <div className="cards-lower">
            <div className="cl-1">Complete MERN Stack Development</div>
            <div className="cl-2">
              <p>&#8377;5999 <s>8499</s></p>
              <p>29.42% off</p>
            </div>
            <button className='explore'>Explore</button>
          </div>
        </div>
      </div>

      <p className='why-dev-hub'>Why Dev-Hub?</p>
      <div className='container-4'>
        <div className="c4-left">
          <div className="c4">
            <span>Learn From The Best</span>
            <p>Dev-Hub is One of the best Platform <br /> to learn and apply Concepts</p>
          </div>
          <div className="c4">
          <span>Open Source</span>
          <p>Helping You to make Your 1st open source contribution</p>
          </div>
        </div>
        
        <div className="c4-mid">
          <div className="c4">
            <span>Beginner Friendly</span>
            <p>Starts From Basic and go inside Deep</p>
          </div>

          <div className="c4">
            <span>Version Control</span>
            <p>Helping  you to understand how version control <br /> works in Industry</p>
          </div>
        </div>
        <div className="c4-right">
          <div className="c4">
            <span>Reach Your Interest</span>
            <p>Choose Course on the basis of your Interest</p>
          </div>
          <div className="c4">
            <span>Assignments</span>
            <p>Given Multiple Assignments to Test <br />Your Dev/Problem solving Skills</p>
          </div>
        </div>
      </div>

      <div className="about-section">
       <span>About Dev-Hub</span>
        <p>1.&nbsp;This is an initiative by Dev-Hub to personally mentor folks in the field of Programming.</p>
        <p>
2. Dev-Hub strongly feels that today you are either a 1x engineer or a 100x engineer and nothing in the middle, and his hope is to take everyone in this community to be a 100x Engineer. 
        </p>
        <p>

3. Join Dev-Hub in his first course on Full Stack development with a heavy focus on Open source projects to learn programming practically.
        </p>
      </div>
      <Footer/>
    </>
  )
}

export default Home
