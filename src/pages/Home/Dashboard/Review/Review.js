import React, { useRef } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Review = () => {
    const nameRef = useRef()
    const ratingRef = useRef()
    const reviewRef = useRef()
    const handleAddPlace = (e) => {
        const name = nameRef.current.value
        const rating = ratingRef.current.value
        const review = reviewRef.current.value

        const reviews= {name,rating, review }
        fetch('https://radiant-journey-86015.herokuapp.com/reviews', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review added succesfully')
                    e.target.reset()
                }
            })
        e.preventDefault()
    }
    return (
        <Container fluid className="">
            <Row xs={1} md={1}>

                

                <Col xs={12} md={10}>
                    <h2 className=" text-start dashboard" >Review</h2>
                    <Row xs={1} md={2}>
                        <Col>
                            <div className="">
                                <Form onSubmit={handleAddPlace}>
                                    <Form.Group className="mb-3 text-start" >
                                        <Form.Label>Your name</Form.Label>
                                        <Form.Control ref={nameRef}  type="name" placeholder="Enter name" />

                                    </Form.Group>
                                    <Form.Group as={Col} className="mb-3 text-start">
                                        <Form.Label>Give Rating</Form.Label>
                                        <Form.Control ref={ratingRef} type="number" placeholder="Give even numbers  rating" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your Feedback</Form.Label>
                                        <Form.Control ref={reviewRef}  as="textarea" rows={3} />
                                    </Form.Group>


                                    <Button variant="primary" type="submit" className="w-100 text-center">
                                        Submit
                                    </Button>
                                </Form>

                            </div></Col>
                        <Col></Col>

                    </Row>



                </Col>

            </Row>


        </Container>
    );
};

export default Review;