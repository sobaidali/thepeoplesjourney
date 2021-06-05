import React, { useEffect, useState } from 'react'
import './style.css';
//react-bootstrap
import { Card, CardColumns, CardDeck, CardGroup, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Axios from '../../axios';
//components
import CardUI from '../CardUI';
import PaginationUI from '../PaginationUI';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'react-feather';
import Select from 'react-dropdown-select';

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
        <Container>
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
            <form>
          <section id="find-researchers-filter" className="container pt-5">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-row align-items-end">
                  <div className="form-group col-lg col-sm-12">
                    <label
                      htmlFor="search-researchers"
                      className="font-weight-bold"
                    >
                      Search for researchers
                    </label>
                    <input
                    //   onKeyPress={(e) => {
                    //     if (e.key === "Enter") {
                    //       searchFeatured();
                    //     }
                    //   }}
                    //   onChange={(e) => setQueryName(e.target.value)}
                    //   value={queryName}
                      className="form-control"
                      type="text"
                      id="search-researchers"
                      placeholder="Enter the name"
                    />
                  </div>
                  <div className="form-group col-lg col-sm-12 col-md-6">
                    <label
                      htmlFor="search-researchers"
                      className="font-weight-bold"
                    >
                      Location
                    </label>

                    <Select
                    //  options={options}
                      searchable={true}
                    //   onChange={handleChange}
                      className="form-control"
                    ></Select>
                  </div>

                  <div className="form-group col-lg col-sm-12 col-md-6">
                    <label
                      htmlFor="research-interest"
                      className="font-weight-bold"
                    >
                      Research Interest
                    </label>

                    <input
                    //   onKeyPress={(e) => {
                    //     if (e.key === "Enter") {
                    //       searchFeatured();
                    //     }
                    //   }}
                    //   onChange={(e) => setRinterest(e.target.value)}
                    //   value={rInterest}
                      className="form-control"
                      type="text"
                      id="search-researchers"
                      placeholder="Search"
                    />
                  </div>

                    
                    <div className="form-group col-md-2 col-sm-12">
                      {" "}
                      <button
                        type="button"
                        // onClick={onSearch}
                        className="btn w-100 btn-primary"
                      >
                        Search
                      </button>
                    </div>
                  
                </div>
              </div>
            </div>
          </section>
        </form>
        <div
                  className="mt-4 mb-4 mr-3 tns-custom-controls cs-controls-inverse "
                  tabIndex="0"
                >
                  <button
                    className="mr-2 disabled-btn"
                    type="button"
                    data-controls="prev"
                    tabIndex="-1"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    // onClick={nextFeatured}
                    data-controls="next"
                    tabIndex="-1"
                    
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <Row className="mt-3">
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
            </Container>
        </Container>
    )
}

export default BookScreen;
