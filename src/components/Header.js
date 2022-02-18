import React from 'react'
import {Container, Navbar, Nav } from 'react-bootstrap'
import './main.css'
import logo from '../Assets/logo.svg'

const Header = () => {
  return (
      <>
        <Navbar bg="light" >
            <Container>
                <Navbar.Brand href="/" className='logo' >
                    <img src={logo} style={{width:"185px",height:"42.24px"}} alt="logo"></img>
                </Navbar.Brand>
                    <Nav className="me-right right">
                        <Nav.Link className='home' href="/">Home</Nav.Link>
                        <Nav.Link className='gift' href="/gifguide">Gift Guides</Nav.Link>
                        <Nav.Link className='faq' href="/faq">FAQ</Nav.Link>
                        <Nav.Link className='about' href="/about">About Us</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
      </>
  )
}

export default Header