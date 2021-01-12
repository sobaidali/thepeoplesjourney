import React from 'react'
import PropTypes from 'prop-types'
//react-bootstrap
import { Button, Card, Form, FormControl } from 'react-bootstrap'

const CardFrame = ({ title, subtitle, content, text, bg, src, type }) => {
    return (
        <Card 
            className="my-3 p-3 rounded" 
            bg={bg} 
            text={text}
            //style={{ width: '20rem' }}
        >
            <Card.Img 
                variant="top" 
                src={src} 
                thumbnail
            />
            <Card.Body>
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
        </Card> 
    )
}

CardFrame.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string
}

export default CardFrame
