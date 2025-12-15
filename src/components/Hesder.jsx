import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"

function Hesder() {
    return (
        <>
            <Navbar expand="lg" className="bg-info">
                <Container>
                    <Navbar.Brand className='text fs-1 fw-bold fst-oblique' href="/">EduScale</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto p-3 fs-5">
                            <Nav.Link  ><Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={"/"}>Home</Link></Nav.Link>
                            <Nav.Link ><Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={"/about"}>About</Link></Nav.Link>
                            <Nav.Link ><Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={"/course"}>Course</Link></Nav.Link>
                            <Nav.Link ><Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={"/contact"}>Contact</Link></Nav.Link>
                           
                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Hesder