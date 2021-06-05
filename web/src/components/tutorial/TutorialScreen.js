import React from 'react'
import './style.css'
//react-bootstrap
import { Card, CardColumns, Container, Jumbotron } from 'react-bootstrap';
//components
import CardUI from '../CardUI';
import PaginationUI from '../PaginationUI';
import { ArrowUpRight } from 'react-feather';

const TutorialScreen = () => {
    return (
        <Container>
            <Jumbotron fluid>
                <Container>
                    <h1 className="text-center" style={{color: "#1C054D"}}>Tutorials</h1>
                    <p className="text-center" style={{color: "#1C054D"}}>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
            <Container fluid>
                <CardColumns>
                    <Card
                        className="my-3 p-3 rounded card-tutor"
                        bg="white"
                        text="primary"
                        border="dark"
                        style={{ width: '20rem' }}
                    >
                        <div>
                            <small>Tutorial</small>
                            <span className="profile-link">
                                <ArrowUpRight size={16} />
                            </span>
                            <Card.Body>
                                <Card.Title>Binary Heaps and Priority Queues via JavaScript.</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <small>JavaScript</small>
                                </Card.Subtitle>
                            </Card.Body>
                        </div>
                    </Card>
                </CardColumns>
            </Container>
        </Container>
    )
}

export default TutorialScreen
