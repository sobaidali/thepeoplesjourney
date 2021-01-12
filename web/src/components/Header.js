import React from 'react'
//react-bootstrap
import { Button, Container, Form, FormControl, Image, Nav, Navbar } from 'react-bootstrap'
//logo
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header>
            <div>
                <Container className="d-flex align-items-center"> 
                    <div className="p-2 bd-highlight">
                        <Nav as="ul">
                            <Nav.Item as="li" className="mr-3"><a href="#"><i className="fa fa-facebook"></i></a></Nav.Item>
                            <Nav.Item as="li" className="mr-3"><a href="#"><i className="fa fa-twitter"></i></a></Nav.Item>
                            <Nav.Item as="li" className="mr-3"><a href="#"><i className="fa fa-instagram"></i></a></Nav.Item>
                        </Nav>
                    </div>
                    <div className="ml-auto p-2 bd-highlight">
                        <Nav as="ul">
                            <Nav.Link>Join Us</Nav.Link>
                            <Nav.Link>Forum</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </div>
            <div>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect >
               
                <Container>
                <Navbar.Brand className="ml-auto">
                    <Image 
                        src={logo} 
                        className="" 
                    />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link>HOME</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>WHAT WE DO</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>RESOURCE LIBRARY</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="m-sm-2"/>
                            <Button variant="light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </header>
    )
}

export default Header
