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

function Login() {
    const [credentials, setCredentials] = useState({});

    const onHandleChange = (e) => {
        const { name, value } = e.target

        setCredentials(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();

        try {
            // await Axios.post('/auth/local/register', {
            //     first_name: state.first_name,
            //     last_name: state.last_name,
            //     username: state.username,
            //     email: state.email,
            //     password: state.password,
            // });

            toast.dark('You have successfully registered! Please confirm your email.', {
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
            <div className="login_paper">
                <Image className="login_avatar" src={loginAvatar}/>
                <h1 className="login_heading">Sign in</h1>
                <Form className="login_form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="email" placeholder="Enter password" />
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
                <div>
                    <NavLink className="link" to="signup">
                        <small style={{ marginLeft: '115px' }}>Does not have an account? Please sign up</small>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login;
