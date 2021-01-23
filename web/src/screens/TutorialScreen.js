import React from 'react'
//react-bootstrap
import { CardColumns, Container, Jumbotron } from 'react-bootstrap'
//components
import CardUI from '../components/CardUI'
import PaginationUI from '../components/PaginationUI'

const TutorialScreen = () => {
    return (
        <>
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
                    <CardUI 
                        bg="white"
                        text="primary"
                        border="light"
                        style={{ width: '20rem' }}
                        type="tutorial"
                        title="Binary Heaps and Priority Queues via JavaScript."
                        subtitle="Javascript"
                    />
                    <CardUI 
                        bg="white"
                        text="primary"
                        border="light"
                        style={{ width: '20rem' }}
                        type="tutorial"
                        title="Binary Heaps and Priority Queues via JavaScript."
                        subtitle="Javascript"
                    />
                    <CardUI 
                        bg="white"
                        text="primary"
                        border="light"
                        style={{ width: '20rem' }}
                        type="tutorial"
                        title="Binary Heaps and Priority Queues via JavaScript."
                        subtitle="Javascript"
                    />
                    <CardUI 
                        bg="white"
                        text="primary"
                        border="light"
                        style={{ width: '20rem' }}
                        type="tutorial"
                        title="Binary Heaps and Priority Queues via JavaScript."
                        subtitle="Javascript"
                    />
                    <CardUI 
                        bg="white"
                        text="primary"
                        border="light"
                        style={{ width: '20rem' }}
                        type="tutorial"
                        title="Binary Heaps and Priority Queues via JavaScript."
                        subtitle="Javascript"
                    />
                    <CardUI 
                        bg="white"
                        text="primary"
                        border="light"
                        style={{ width: '20rem' }}
                        type="tutorial"
                        title="Binary Heaps and Priority Queues via JavaScript."
                        subtitle="Javascript"
                    />
                    <CardUI 
                        bg="white"
                        text="primary"
                        border="light"
                        style={{ width: '20rem' }}
                        type="tutorial"
                        title="Binary Heaps and Priority Queues via JavaScript."
                        subtitle="Javascript"
                    />
                    <CardUI 
                        bg="white"
                        text="primary"
                        border="light"
                        style={{ width: '20rem' }}
                        type="tutorial"
                        title="Binary Heaps and Priority Queues via JavaScript."
                        subtitle="Javascript"
                    />
                    <CardUI 
                        bg="white"
                        text="primary"
                        border="light"
                        style={{ width: '20rem' }}
                        type="tutorial"
                        title="Binary Heaps and Priority Queues via JavaScript."
                        subtitle="Javascript"
                    />
                </CardColumns>

                <div className="mx-auto" style={{width: "50%"}}>
                    <PaginationUI />
                </div>
            </Container>
        </>
    )
}

export default TutorialScreen
