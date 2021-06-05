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

const Signup = (props) => {
    const [state, setstate] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirmed: false
    })
    const [errors, setErrors] = useState("");

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
            const { first_name, last_name, username, email, password } = state;
            if (
                first_name.length==0 || 
                last_name.length==0 || 
                username.length == 0 || 
                email.length == 0 || 
                password.length == 0
                ) {
                return setErrors("Please fill all the fields as they all are required for the registration.");
            }

            await Axios.post('/auth/local/register', {
                first_name: state.first_name,
                last_name: state.last_name,
                username: state.username,
                email: state.email,
                password: state.password,
                confirmed: false
            });

            
            // Axios.post(`http://localhost:1337/auth/send-email-confirmation`, {
            //     email: state.email,
            // })
            // .then(response => {
            //     // Handle success.
            //     console.log('Your user received an email');
            // })
            // .catch(error => {
            //     // Handle error.
            //     console.error('An error occured:', error.response);
            // });

            // props.history.push('/login');
            toast.dark('You have successfully registered! Please login.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setErrors("")
        } catch (err) {
            toast.dark('This email is already registered! Please try with another email.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
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
                        {/* <Form.Text><small>Must be at least 6 characters, both upper and lower case letters, a number, and a special character.</small></Form.Text> */}
                    {errors.length > 0 && <small style={{color: "red"}}>{errors}</small>}
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
