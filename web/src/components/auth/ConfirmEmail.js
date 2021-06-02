import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Axios from '../../axios';

const ConfirmEmail = (props) => {
    useEffect(() => {
        console.log("This is props: ", props);
        const confirmEmailReq = async() => {
            const { data } = await Axios.get(`/auth/email-confirmation?confirmation=${props.match.params.id}`);
        };
        confirmEmailReq();
    }, [])

    return (
        <Container className="confirm-email-screen">
            <Row>
                <Col lg={10}>
                    <div class="sc-bTJQgd crMrTS"></div>
                    <div>
                        <h2 id="mainHeader">Hi, {props.match.params.email.split("@")[0]}!</h2>
                    </div>
                </Col>
                <p className="bcvdhv">We hope you are making progress in your journey... Feel free to read the latest news about the People's Journey. We are giving our best to improve the ourselves based on your feedback.</p>
            </Row>
            <Row>
                <Col>
                    <p>Please Login here.</p>
                    <Button className="login_btn" variant="primary">
                        Login
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ConfirmEmail;
