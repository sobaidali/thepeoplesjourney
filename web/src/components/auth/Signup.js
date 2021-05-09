import React, { useState } from 'react'
//react-bootstrap
import { Button, Form, FormControl, FormGroup, Image, InputGroup } from 'react-bootstrap';
//css
import './style.css';
//assets
import loginAvatar from '../../assets/login.png'
import { NavLink } from 'react-router-dom';
import Axios from '../../axios';

function Signup() {
    const [state, setstate] = useState({})

    const handleChange = (e) => {
        const [name, value] = e.target;


        setstate(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log(state)

        const { data } = await Axios.post('/users', state);
        console.log("This is data: ", data);
    }

    return (
        <div className="login_main">
            <div className="login_paper">
                <Image className="login_avatar" src={loginAvatar}/>
                <h1 className="login_heading">Sign up</h1>
                <Form className="login_form" onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            name="first_name" 
                            type="text"
                            onChange={handleChange} 
                            placeholder="First Name" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            name="last_name"
                            type="text" 
                            onChange={handleChange} 
                            placeholder="Last Name" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control 
                            name="user_name"
                            type="text" 
                            onChange={handleChange} 
                            placeholder="User Name" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            name="email"
                            type="email" 
                            onChange={handleChange} 
                            placeholder="Email" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password"
                            onChange={handleChange} 
                            placeholder="Password" 
                        />
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
