import React from 'react'

function About() {
  return (
    <>
      <h1 className='text-info text-center'>About US</h1>
      <div className="row mt-5">
        <div className="col-6">
          <div className='about' style={{ textAlign: "left", padding: "30px",marginTop:"20px" }}>
            <h2>Learn. Grow. Succeed</h2>

            <p> At LearnSphere, we believe learning should be simple, practical, and accessible to everyone. Our platform is built to help learners gain real-world skills that lead to career growth, business success, and personal development.</p>



            <h2 className='mt-5'>Who We Are</h2>
            <p>We are an online learning platform created by educators, industry professionals, and passionate learners. Our goal is to bridge the gap between education and real-world skills by offering high-quality courses taught by experts.</p>
          </div>
        </div>
        <div className="col-6 ">
          <div className='image' style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"2opx"}}>
            <img style={{ width: "400px", height: "300px", textAlign: "center" }} src="https://www.zaparetech.com/img/about-img.png" alt="" />

          </div>
        </div>




      </div>


    </>
  )
}

export default About