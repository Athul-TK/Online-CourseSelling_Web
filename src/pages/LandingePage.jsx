import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function LandingePage() {
    return (
        <>
            <section style={{ width: "100%", overflow: "hidden", height: "100vh", backgroundImage: "url('https://www.imf-formacion.com/uploads/media/21-9-large/04/4814-AdobeStock_377779753.jpg?v=1-0')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                <div className="row">
                    <div className="col-6 text-center">


                        <div className="content">
                            <h1 className='main-head'>Learn Smarter Grow Faster</h1>
                            <h1 className='tittle'> Software Training Institute For You</h1>
                            <p className='tittle-para'>Institute
                                Best software training institute in Kerala. Job-ready tech skills for your career As the best software training institute in Kerala, we're committed to your career success through industry-relevant curriculum and hands-on training.</p>
                        </div>
                        <div className="btn-main">
                            
                            <div className="phone">
                                <div><Link to={"/course"}><button  className='btnex'>Explore Course</button></Link></div>
                             
                            </div>
                               <Link to={"/contact"}><div className='us'>
                                        <img style={{ width: "50px", height: "50px"}} src="https://www.pngmart.com/files/22/Phone-Icon-PNG-Transparent.png" alt="phn" />
                                        <span>Contact Us</span>
                                        
                                    </div></Link>
                                   
                               
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        
                    </div>
                </div>
            </section>

        </>
    )
}

export default LandingePage