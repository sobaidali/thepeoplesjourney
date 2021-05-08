import React, { useEffect, useState } from 'react'
import './style.css';
//react-bootstrap
import { Card, CardColumns, CardDeck, CardGroup, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Axios from '../../axios';
//components
import CardUI from '../CardUI';
import PaginationUI from '../PaginationUI';
import { ArrowUpRight } from 'react-feather';

const BookScreen = () => {
    const [state, setstate] = useState([]);

    useEffect(() => {
        const books = async () => {
            try {
                const { data } = await Axios.get('/books');
                setstate(data);
                console.log(data);
            } catch (error) {
                console.error(error)
            }
        }
        books();
    }, [])
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1 className="text-center" style={{color: "#1C054D"}}>Books and everything</h1>
                    <p className="text-center" style={{color: "#1C054D"}}>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
            <Container fluid>
                <Row>
                    {state.map((curr, ind) => (
                            <Col lg={3}>
                            <Card
                                bg="white"
                                text="primary"
                                border="light"
                                style={{ width: '17.5rem' }}
                            >
                                <a href={curr.book_url} target="_blank">
                                <span className="profile-link">
                                    <ArrowUpRight size={18} />
                                </span>
                                    <Card.Img   
                                        className="featured-card-img"
                                        variant="top" 
                                        src={"http://localhost:1337" + curr.book_image[0].url} 
                                        thumbnail
                                    />
                                    <Card.Body>
                                    <Card.Title>
                                        {curr.book_name}
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <small>{curr.book_author_name, curr.book_genre}</small>
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {curr.book_description}
                                    </Card.Text>
                                    </Card.Body>
                                </a>
                            </Card>
                            </Col>
                        
                    ))}
                </Row>
                <div className="mx-auto" style={{width: "50%"}}>
                    <PaginationUI />
                </div>
            </Container>
        </>
    )
}

export default BookScreen;
