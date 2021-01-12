import React from 'react'
//react-bootstrap
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap'
//components
import CardFrame from '../components/CardFrame'
import CarouselFrame from '../components/CarouselFrame'
//assets
import breakout_room from '../assets/breakout_room.jpg'
import login from '../assets/login.jpg'
import startup_stories from '../assets/startup.jpg'

const HomeScreen = () => {
    return (
        <>
            <Row className="mb-3">
                <Col lg={8}>
                    <CarouselFrame />
                </Col>
                <Col lg={4}>
                <CardFrame 
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
                <Col lg={12}>
                <CardFrame 
                    src={startup_stories}
                    title="Start up stories"
                    content="Lorem is pum del."
                    overlay="true"
                    text="white"
                />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <CardFrame 
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
                    <CardFrame 
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
                    <CardFrame 
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
