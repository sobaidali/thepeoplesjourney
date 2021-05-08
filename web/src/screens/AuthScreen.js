import {React, useState} from 'react'
//components
import ModalUI from '../components/ModalUI';
import FormUI from '../components/FormUI';
import InputUI from '../components/InputUI';
//react-bootstrap
import { Tab, Tabs } from 'react-bootstrap';

const AuthScreen = ({ show, onHide }) => {
    //const [lgShow, setLgShow] = useState(false);
    const [key, setKey] = useState('login');
    
    const handleChange = () => {
        console.log("Hi, this is Header InputUI.")
    }

    const handleSubmit = () => {
        console.log("Hi, this is Header FormUI.")
    }

    return (
        <>
            <ModalUI 
                size={'lg'}
                title="The People's Journey"
                show={show}
                onHide={onHide}
            >
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab
                        eventKey="login" title="Login"
                    >
                        <FormUI
                            submitBtnText="Login"
                            submit={handleSubmit}
                            elements={(
                                <>
                                <div>
                                    <InputUI 
                                        name="email"
                                        type="email"
                                        placeholder="Email address"
                                        onChange={handleChange}
                                    />
                                    <InputUI 
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <small>Forgot password?</small>
                                </div>
                                </>
                            )}
                        />
                    </Tab>
                    <Tab
                        eventKey="signup" title="Sign up"
                    >
                        <div>
                            <div>
                                <small>
                                    Sign up as a student.
                                </small>
                            </div>
                            
                            <div>
                                <small>
                                    Sign up as a mentor.
                                </small>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </ModalUI> 
        </>
    )
}

export default AuthScreen
