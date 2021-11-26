import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const {glassId } = useParams()
    const [camera, setCamera] = useState({})
    useEffect(() => {
        fetch(`https://radiant-journey-86015.herokuapp.com/camera/${glassId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCamera(data)
            })
    }, [])
    const nameRef = useRef()
    const priceRef = useRef()
    const imgRef = useRef()
    const descRef = useRef()
    const handleUpdate = (e) => {
        const name = nameRef.current.value
        const cost = priceRef.current.value
        const img = imgRef.current.value
        const desc = descRef.current.value
        const product = {cost, name, img, desc}
        const url = `https://radiant-journey-86015.herokuapp.com/updateproduct/${glassId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    alert('Product update succesfully')
                     setCamera(product)
                    e.target.reset()
                }
            })
        e.preventDefault()
    }

return (
    <Container>
        <h2 className="text-start dashboard">Update Product</h2>
        <Row xs={1} md={1}>

            <Col md={12}>
                <div className="details-card">
                    <Row xs={1} md={2}>
                        <Col>
                            <div>
                                <img src={camera.img} alt="" />

                            </div>
                        </Col>
                        <Col>

                            <div className="details">
                                <p className=" text-start fs-4 ms-3">{camera.name}</p>
                                <p className=" text-start  ms-3">{camera.desc}</p>


                                <div className="price-rating">
                                    <p className=" text-start ms-3"><span className="text-muted">
                                        Price :
                                    </span>
                                        <span className="price">
                                            ${camera.cost}
                                        </span> </p>
                                    
                                </div>

                                


                            </div>
                        </Col>

                    </Row>
                </div>
            </Col>
        </Row>
        <Row>
            <Row xs={1} md={1}>

                <Col md={8}>
                    <div className="form">
                        <Form onSubmit={handleUpdate}>

                            <Row className="mb-3 text-start ">
                
                                <Form.Group as={Col} >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3 text-start">
                                <Form.Group as={Col} >
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control ref={priceRef} type="number" placeholder="Enter  even numbers price" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control ref={imgRef} type="text" placeholder="Image" />
                                </Form.Group>
                            </Row>
                          
                            <Row className="mb-3 text-start">
                                
                                <Form.Group as={Col} >
                                    <Form.Label>Description</Form.Label>

                                    <Form.Control ref={descRef} as="textarea" />

                                </Form.Group>

                            </Row>
                            <Button className="w-50 mx-auto " variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>

                </Col>

            </Row>
        </Row>
    </Container>
)


};

export default UpdateProduct;