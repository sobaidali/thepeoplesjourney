import React from 'react'
//react-bootstrap
import { Carousel } from 'react-bootstrap'
//assets
import slideone from '../assets/carousel/carousel_one.jpg'
import slidetwo from '../assets/carousel/carousel_two.png'
import slidethree from '../assets/carousel/carousel_three.jpg'

const CarouselUI = () => {
    return (
        <Carousel className="mt-3">
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={slideone}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={slidetwo}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={slidethree}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselUI
