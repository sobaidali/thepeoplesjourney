import React from 'react'
//react-bootstrap
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer style={{backgroundColor: "#1C054D", color: "white"}}>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <h6>About</h6>
                        <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </Col>
                    <Col>
                        <h6>Categories</h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
