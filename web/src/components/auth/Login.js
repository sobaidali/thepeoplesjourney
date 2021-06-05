import React, { useState } from 'react'
//react-bootstrap
import { Button, Form, FormControl, FormGroup, Image, InputGroup } from 'react-bootstrap';
//css
import './style.css';
//assets
import loginAvatar from '../../assets/login.png'
import { NavLink } from 'react-router-dom';
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Login(props) {
    const [credentials, setCredentials] = useState({
        identifier: "",
        password: "",
    });
    const [errors, setErrors] = useState("")

    const onHandleChange = (e) => {
        const { name, value } = e.target

        setCredentials(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        if (credentials.identifier.length === 0 || credentials.password.length === 0) {
            return setErrors("Please fill all the fields.")
        }

        try {
            await axios.post('http://localhost:1337/auth/local', {
                identifier: credentials.identifier,
                password: credentials.password,
            });

            setErrors("");
            toast.dark('You have successfully logged in! Welcome back.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            props.history.push('/user/home');
        } catch (err) {
            setErrors("Identifier or password invalid.");
        }
    }

    return (
        <div className="login_main">
            <div className="login_paper">
                <Image className="login_avatar" src={loginAvatar}/>
                <h1 className="login_heading">Sign in</h1>
                <Form className="login_form" onSubmit={onHandleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="identifier" 
                            type="email"
                            onChange={onHandleChange} 
                            placeholder="Enter email" 
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password" 
                            type="text" 
                            onChange={onHandleChange}
                            placeholder="Enter password" 
                        />
                        {errors.length > 0 && <small style={{color: "red"}}>{errors}</small>}
                        <div>
                            <NavLink className="link" to="/Signup">
                            <small>Forgot password? Click here to reset</small>
                        </NavLink>
                         </div>
                    </Form.Group>
                    <Button className="login_btn" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <div className="act">
                    <NavLink className="link" to="signup">
                        <small style={{ marginLeft: '150px' }}>Does not have an account? Please sign up</small>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login;
