import {React, useState} from 'react'
//react-bootstrap
import { Button, Container, Form, FormControl, Image, Nav, Navbar } from 'react-bootstrap'
//logo
import logo from '../assets/logo.png'
import donate from '../assets/donate_thumbnail.png'
//components
// import AuthScreen from '../screens/AuthScreen'
// import FormUI from './FormUI'
// import InputUI from './InputUI' 
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const [auth, showAuth]= useState(false)
    
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
                            <NavLink style={{padding: "0.5rem 0.5rem"}} to='login' >Join us</NavLink>
                            <Nav.Link style={{padding: "0.5rem 0.5rem"}}>Forum</Nav.Link>
                            <Nav.Link style={{padding: "0.5rem 0.5rem"}}><Image src={donate}/></Nav.Link>
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
                    />
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} to="/tutorials">Tutorials</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} to="/tutorials">Podcasts</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} to="/books">Books</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} to="/tutors">Find a Mentor</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link>About us</Nav.Link>
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
