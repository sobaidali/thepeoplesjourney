import {React, useState} from 'react'
//components
import ModalUI from '../components/ModalUI';
import FormUI from '../components/FormUI';
import InputUI from '../components/InputUI';
//react-bootstrap
import { Tab, Tabs } from 'react-bootstrap';

const AuthScreen = ({ show, onHide }) => {
    //const [lgShow, setLgShow] = useState(false);
    const [key, setKey] = useState('home');
    
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
                elements={(
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab
                            eventKey="home" title="Home"
                        >
                            <FormUI
                                submitBtnText="Login"
                                submit={handleSubmit}
                                elements={(
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
                                )}
                            />
                        </Tab>
                    </Tabs>
                )}
            /> 
        </>
    )
}

export default AuthScreen
