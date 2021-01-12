import React from 'react'
//react-bootstrap
import { Col, Row } from 'react-bootstrap'
//components
import CardFrame from '../components/CardFrame'
import CarouselFrame from '../components/CarouselFrame'
//assets
import breakout_room from '../assets/breakout_room.jpg'
import login from '../assets/login.jpg'

const HomeScreen = () => {
    return (
        <>
            <Row>
                <Col lg={8}>
                    <CarouselFrame />
                </Col>
                <Col lg={4}>
                <CardFrame 
                        title='Login'
                        subtitle='Let us help you grow.'
                        src={login}
                        //content='Browse mentor profiles to find the expertise you need. 
                        //    You can meet with one or several mentors via email, video 
                        //    chat or face-to-face in your chapter.'
                        text='white'
                        bg='primary'
                        type="login"
                    />
                </Col>
            </Row>
            <Row >
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
