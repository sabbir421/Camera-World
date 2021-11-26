import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
const AddProducts = () => {
    const nameRef = useRef()
    const priceRef = useRef()
    const imgRef = useRef()
    const descRef = useRef()
    const handleAddPlace = (e) => {
      
        const name = nameRef.current.value
        const cost = priceRef.current.value
        const img = imgRef.current.value
        const desc = descRef.current.value
        const product = { cost, name, img, desc, }
        fetch('https://radiant-journey-86015.herokuapp.com/cameras', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added succesfully')
                    e.target.reset()
                }
            })
        e.preventDefault()
    }

    return (
        <Container fluid className="" >
            <h2 className="text-start dashboard">Add  Product</h2>
            <div className='bg-primary'>
                <Row xs={1} md={1}>

                    <Col md={8}>
                        <div className="form ms-8 ">
                            <Form onSubmit={handleAddPlace}>

                                <Row className="mb-3 text-start ms-5 ">
                                    <Form.Group as={Col} >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                                    </Form.Group>

                                </Row>

                                <Row className="mb-3 text-start ms-5">
                                    <Form.Group as={Col} >
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control ref={priceRef} type="number" placeholder="Enter even numbers price" />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control ref={imgRef} type="text" placeholder="Image" />
                                    </Form.Group>
                                </Row>
                            
                                <Row className="mb-3 text-start ms-5">
                                    
                                    <Form.Group as={Col} >
                                        <Form.Label>Description</Form.Label>
                                       
                                    
                                        <Form.Control ref={descRef}  as="textarea"  />

                                    </Form.Group>
                                  
                                </Row>
                                <Button className="w-50 mx-auto ms-5" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </div>

                    </Col>

                </Row>
            </div>
        </Container>
    );
};

export default AddProducts;