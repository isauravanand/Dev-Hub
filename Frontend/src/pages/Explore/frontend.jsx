import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/footer'

function frontend() {
    return (
        <>
            <Navbar />
            <hr />
            <div className="mern-navbar">
                <span>Complete Frontend Development</span>
            </div>

            <div className="about-mern">

                <div className="overview">
                    <h6>Overview:</h6>  <hr /><br />
                    <p><b>Validity : 2 Years</b></p>
                    <p>In Dev-Hub's Web Development, We'll be diving deep  <br />into the Frontend Development from the basics. <br />The Goal is for you to be able to understand any <b> Frontend Development</b> codebase out there.</p>

                    <div className='mern'>
                        <h5><b>Frontend Development</b></h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                        <span>JavaScript Library : <b>React.Js</b></span>
                        <span> <br />CSS Frameworks : 
                        <b>Bootstrap & Tailwind CSS</b> <br />
                        <b>Material UI</b>
                        </span>
                    </div>
                   

                </div>



                <div className="mern-card">
                    <div className="mc-upper">
                    <img src="https://images.stockcake.com/public/e/3/5/e3596b37-f08c-4577-a356-cfc2e71a3355_large/mobile-app-designs-stockcake.jpg" alt="Loading..."/>
                    </div>

                    <div className="mc-lower">
                        <div className="ml-1">
                            Frontend Development
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

export default frontend
