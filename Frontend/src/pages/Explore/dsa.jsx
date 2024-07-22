import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/footer'

function dsa() {
    return (
        <>
            <Navbar />
            <hr />
            <div className="mern-navbar">
                <span>Complete Data Structure and Algorithm</span>
            </div>

            <div className="about-mern">

                <div className="overview">
                    <h6>Overview:</h6>  <hr /><br />
                    <p><b>Validity : 2 Years</b></p>
                    <p>In Dev-Hub's Data Structure and Algorithm, We'll be diving deep  <br />into the Data Structure and Algorithm from the basics. <br />The Goal is for you to be able to understand any <b> Data Structure and Algorithm</b> codebase out there.</p>

                    <div className='mern'>
                        <h5><b>Data Structure and Algorithm</b></h5>
                        <ul>
                            <li>Java Language</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Advanced DSA</li>
                            <li>50 Live Practice Sessions with MAANG Engineers: alternate day</li>
                            <li>Quant & Aptitude Preparation</li>
                            <li>Individual doubt support: TA</li>
                            <li>Certificate of Completion</li>
                        </ul>
                    </div>


                </div>



                <div className="mern-card">
                    <div className="mc-upper">
                        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww" alt="Loading..." />
                    </div>

                    <div className="mc-lower">
                        <div className="ml-1">
                            dsa Development
                        </div>
                        <div className="ml-2">
                            <p>&#8377;5999 <s>8499</s></p>
                            <p>29.42% off</p>
                        </div>

                        <button className="buy-mern">Buy Now</button>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default dsa
