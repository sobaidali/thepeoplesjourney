import React, { useState } from 'react'
//react-bootstrap
import { Button, Form, FormControl, FormGroup, Image, InputGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//css
import './style.css';
//assets
import loginAvatar from '../../assets/login.png'
import { NavLink } from 'react-router-dom';
import Axios from '../../axios';

toast.configure();

const Signup = () => {
    const [state, setstate] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;

        setstate(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const { data } = await Axios.post('/users', state);

            toast.dark('You have successfully registered!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="login_main">
            <ToastContainer />
            <div className="login_paper">
                <Image className="login_avatar" src={loginAvatar}/>
                <h1 className="login_heading">Sign up</h1>
                <Form className="login_form" onSubmit={handleSubmit}>
                    <Form.Group>
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
                            name="username"
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
                        <small style={{ marginLeft: '135px' }}>Already have an account? Please login</small>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Signup;
