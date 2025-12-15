import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer>
      <div style={{width:"100.9%",height:"110px",color:"white",backgroundColor:"grey"}} className="row">
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="col-6">
          <h3>EduScale</h3>
           <hr class="my-6 border-default sm:mx-auto lg:my-8" />
        <span class="block text-sm text-body sm:text-center">© 2025 <a href="#" class="hover:underline">EduScale™</a>. All Rights Reserved.</span>
        </div>
        <div className="col-6 text-center">
           <h3>Social media</h3>
           <div className="icon">
            <a href="https://github.com/"><img style={{width:"60px",height:"60px",padding:"8px"}} src="https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png" alt="" /></a>
            <a href=""><img style={{width:"40px",height:"40px"}} src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="" /></a>
            <a href=""><img style={{width:"65px",height:"65px"}} src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="" /></a>
            <a href=""><img style={{width:"60px",height:"60px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="" /></a>
           </div>
           
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer