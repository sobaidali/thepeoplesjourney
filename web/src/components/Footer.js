import React from 'react'
//react-bootstrap
import { Col, Container, ListGroup, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="site-footer" style={{backgroundColor: "#1C054D", color: "white"}}>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <h6>About</h6>
                        <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </Col>
                    <Col xs={6} md={3}>     
                        <h6>Categories</h6>
                        <ListGroup as="ul" className="footer-links">
                            <ListGroup.Item as="li" className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/category/c-language/">Javascript</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/category/c-language/">Javascript</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/category/c-language/">Javascript</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/category/c-language/">Javascript</a>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/category/c-language/">Javascript</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={3}>
                        <h6>Quick Links</h6>
                        <ListGroup as="ul" className="footer-links">
                            <ListGroup.Item className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/about/">About Us</a>
                            </ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/about/">Contact Us</a>
                            </ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/about/">Contribute</a>
                            </ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
                            </ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item-color">
                                <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <hr/>
            </Container>
            <Container>
                <Row>
                    <Col md={8} sm={6} xs={12}>
                        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                            <a href="#">Scanfcode</a>.
                        </p>
                    </Col>
                    <Col md={4} sm={6} xs={12}>
                        <ListGroup as="ul" className="cutom-list-group-item social-icons">
                            <ListGroup.Item className="custom-list-group-item-color">
                                <a className="facebook" href="#"><i class="fa fa-facebook"></i></a>
                            </ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item-color">
                                <a className="twitter" href="#"><i class="fa fa-twitter"></i></a>
                            </ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item-color">
                                <a className="dribbble" href="#"><i class="fa fa-dribbble"></i></a>
                            </ListGroup.Item>
                            <ListGroup.Item className="custom-list-group-item-color">
                                <a className="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
