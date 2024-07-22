import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/footer'

function backend() {
    return (
        <>
            <Navbar />
            <hr />
            <div className="mern-navbar">
                <span>Complete Backend Development</span>
            </div>

            <div className="about-mern">

                <div className="overview">
                    <h6>Overview:</h6>  <hr /><br />
                    <p><b>Validity : 2 Years</b></p>
                    <p>In Dev-Hub's Web Development, We'll be diving deep  <br />into the Backend Development from the basics. <br />The Goal is for you to be able to understand any <b> Backend Development</b> codebase out there.</p>

                    <div className='mern'>
                        <h5><b>Backend Development</b></h5>
                        <ul>
                            <li>Node.JS</li>
                            <li>Express.JS</li>
                            <li>MongoDB</li>
                            <li>Node.js/Bun/Cloudflare Runtime - Various JS runtimes <br />
                                HTTP Servers <br />
                                NoSQL Databases <br />
                                SQL Databases <br />
                                Typescript <br />
                                Monorepos, Turborepo, lints <br />
                                Websockets, rtc <br />
                                Testing <br />
                                Advance backend
                            </li>
                        </ul>
                        <span>JavaScript Framework : <b>Next.Js</b></span>
                    </div>
                   

                </div>



                <div className="mern-card">
                    <div className="mc-upper">
                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww" alt="Loading..." />
                    </div>

                    <div className="mc-lower">
                        <div className="ml-1">
                            Backend Development
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

export default backend
