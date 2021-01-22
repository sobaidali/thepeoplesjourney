import React from 'react'
import PropTypes from 'prop-types'
//react-bootstrap
import { Button, Card, Form, FormControl } from 'react-bootstrap'

const CardUI = ({ title, subtitle, content, text, bg, src, type, overlay }) => {
    return (
        <Card 
            className="my-3 p-3 rounded border-0"
            bg={bg} 
            text={text}
            //style={{ width: '20rem' }}
        >
            <Card.Img 
                variant="top" 
                src={src} 
                //className="border-0"
                thumbnail
                //style={{ opacity: '0.5', position: 'absolute', zIndex: '-1' }}
            />
            {overlay=="true" 
                ? <Card.ImgOverlay>
                    <Card.Body className="text-center" style={{ position: 'absolute', bottom: '30px', width: '100%'}}>
                        <Card.Title as="h2">{title}</Card.Title>
                        <Card.Text>{content}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card.ImgOverlay>

                : <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                        {subtitle}
                    </Card.Subtitle>
                    <Card.Text>
                        {content}
                    </Card.Text>

                    {type=="search" 
                        ? <Form inline>
                            <FormControl type="text" placeholder="Search" className="m-sm-2"/>
                            <Button variant="light">Search</Button>
                          </Form> 
                        : ''
                    }
                    {type=="login"
                        ? <Form>
                            <FormControl type="email" placeholder="Email" size="sm" className="mb-3"/>
                            <FormControl type="password" placeholder="Password" size="sm" className="mb-3"/>
                            <Button variant="primary">Search</Button>
                          </Form>
                        : ''
                    }
                 </Card.Body>
            }
        </Card> 
    )
}

CardUI.defaultProps = {
    overlay: "false"
}

CardUI.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string
}

export default CardUI
