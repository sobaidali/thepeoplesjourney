import React from 'react'
//react-bootstrap
import { Card, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap'
//components
import CardUI from '../components/CardUI'
import CarouselUI from '../components/CarouselUI'
import Widget from '../components/Widget'
//assets
import breakout_room from '../assets/breakout_room.jpg'
import login from '../assets/login.jpg'
import startup_stories from '../assets/startup.jpg'

const HomeScreen = () => {
    return (
        <>
            <Row className="mb-3">
                <Col lg={8}>
                    <CarouselUI />
                </Col>
                <Col lg={4}>
                <CardUI 
                        title='Login'
                        subtitle='Let us help you grow.'
                        //src={login}
                        //content='Browse mentor profiles to find the expertise you need. 
                        //    You can meet with one or several mentors via email, video 
                        //    chat or face-to-face in your chapter.'
                        text='white'
                        bg='primary'
                        type="login"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Widget heading="Stories"/>
            </Row>
            <Row className="mb-3">
                <Col lg={6}>
                <Image src={startup_stories} width="100%"/>
                </Col>
                <Col lg={6}>
                    <Card className="custom-card">
                         <Col lg={6}><Card.Img variant="top" src={startup_stories} width="100%"/></Col>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                         <Col lg={6}><Card.Img variant="top" src={startup_stories} width="100%"/></Col>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-3">
                <Widget heading="Digests"/>
            </Row>
            <Row className="mb-3">
                <Widget heading="Mentors"/>
            </Row>
            <Row className="mb-3">
                <Col>
                    <CardUI 
                        title='SEARCH FOR A MENTOR'
                        subtitle='Let us help you grow.'
                        content='Browse mentor profiles to find the expertise you need. 
                            You can meet with one or several mentors via email, video 
                            chat or face-to-face in your chapter.'
                        text='white'
                        bg='primary'
                        type="search"
                    />
                </Col>
                <Col>
                    <CardUI 
                        title='SEARCH FOR A MENTOR'
                        subtitle='Let us help you grow.'
                        content='Browse mentor profiles to find the expertise you need. 
                            You can meet with one or several mentors via email, video 
                            chat or face-to-face in your chapter.'
                        text='white'
                        bg='success'
                        type="search"
                    />
                </Col>
                <Col>
                    <CardUI 
                        title='SEARCH FOR A MENTOR'
                        subtitle='Let us help you grow.'
                        content='Browse mentor profiles to find the expertise you need. 
                            You can meet with one or several mentors via email, video 
                            chat or face-to-face in your chapter.'
                        text='white'
                        bg='info'
                        type="search"
                    />
                </Col>
            </Row>
        </>
    )
}

export default HomeScreen
