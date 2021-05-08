import React from 'react'
//react-bootstrap
import { Button, Form, FormControl, FormGroup, Image, InputGroup } from 'react-bootstrap';
//css
import './style.css';
//assets
import loginAvatar from '../../assets/login.png'
import { NavLink } from 'react-router-dom';

function Signup() {
    return (
        <div className="login_main">
            <div className="login_paper">
                <Image className="login_avatar" src={loginAvatar}/>
                <h1 className="login_heading">Sign up</h1>
                <Form className="login_form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="User Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text><small>Must be at least 6 characters, both upper and lower case letters, a number, and a special character.</small></Form.Text>
                    </Form.Group>
                    <Button className="login_btn" variant="primary" type="submit">
                        Signup
                    </Button>
                </Form>
                <div>
                    <NavLink className="link" to="login">
                        <small>Already have an account? Please login</small>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Signup;
