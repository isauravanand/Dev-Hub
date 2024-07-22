import React from 'react'
import "./Mern.css";

import Navbar from '../../layout/Navbar';
import Footer from '../../layout/footer';

function Mern() {
    return (
        <>
            <Navbar />
            <hr />
            <div className="mern-navbar">
                <span>Complete MERN-Stack Development</span>
            </div>

            <div className="about-mern">

                <div className="overview">
                    <h6>Overview:</h6>  <hr /><br />
                    <p><b>Validity : 2 Years</b></p>
                    <p>In Dev-Hub's Web Development, We'll be diving deep  <br />into the MERN stack from the basics. <br />The Goal is for you to be able to understand any <b> MERN</b> codebase out there.</p>

                    <div className='mern'>
                        <h5><b>Frontend Development</b></h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                        <span>JavaScript Library : <b>React.Js</b></span>
                        <span> <br />CSS Frameworks : <b>Bootstrap & Tailwind CSS</b></span>
                    </div>
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
                        <img src="https://wallpapercave.com/wp/wp8903914.jpg" alt="Loading..." />
                    </div>

                    <div className="mc-lower">
                        <div className="ml-1">
                            MERN Stack Development
                        </div>
                        <div className="ml-2">
                            <p>&#8377;5999 <s>8499</s></p>
                            <p>29.42% off</p>
                        </div>

                        <button className="buy-mern">Buy Now</button>
                    </div>
                </div>

            </div>

            <Footer/>

        </>
    )
}

export default Mern;
