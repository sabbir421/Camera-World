import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Modal, Row, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './Details.css'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Rating from 'react-rating';


const Details = () => {
    const { user } = useAuth()
    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    const plus = <FontAwesomeIcon icon={faPlus} />
    const minus = <FontAwesomeIcon icon={faMinus} />
    const { glassId } = useParams()
    const [glass, setGlass] = useState({})
    const [glasses, setGlasses] = useState({})
    const [show, setShow] = useState(false);
    // modal  function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //  shipping 
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    useEffect(() => {
        fetch(`https://radiant-journey-86015.herokuapp.com/camera/${glassId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGlass(data)
            })
    }, [])
    useEffect(() => {
        fetch('https://radiant-journey-86015.herokuapp.com/cameras')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGlasses(data)
            })
    }, [])

    const onSubmit = data => {
        const found = glasses.find(glas => glas._id === glassId)
        data.info = found
        data.status='pending'
        fetch('https://radiant-journey-86015.herokuapp.com/orders ', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Orders placed Successfully')
                    reset()

                }
            })
        handleClose(true)
        reset()
    }
    const [Glasses, SetGlasses] = useState([])
    useEffect(() => {
        fetch('https://radiant-journey-86015.herokuapp.com/cameras')
            .then(res => res.json())
            .then(data => {
                SetGlasses(data.slice(7, 13))
            })
    }, [])
    return (
        <Container fluid className="mt-5">
            <Row xs={1} md={3}>
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="details-card">
                        <Row xs={1} md={2}>
                            <Col>
                                <div>
                                    <img src={glass.img} alt="" />

                                </div>
                            </Col>
                            <Col>

                                <div className="details bg-primary">
                                    <p className=" text-start fs-4 text-white ms-3">{glass.name}</p>
                                    <p className=" text-start text-white  ms-3">{glass.desc}</p>
                                

                                    <div className="price-rating">
                                        <p className=" text-start ms-3"><span className="text-muted">
                                            Price :
                                        </span>
                                            <span className="text-white">
                                                ${glass.cost}
                                            </span> </p>
                                       
                                    </div>
                                    <div className="price-rating">
                                        <div className="center-item">
                                            <button id="case-minus" className="btn-plus">
                                                <span>
                                                    {minus}
                                                </span>
                                            </button>
                                            <input id="case-number" type="number" min="0" value="1" className="input" />
                                            <button className="btn-plus" id="case-plus">
                                                <span>
                                                    {plus}
                                                </span>
                                            </button>
                                        </div>
                                        <button onClick={handleShow} className="button-cart"> {cart} Order Now</button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{glass.name}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                                                    {/* register your input into the hook by invoking the "register" function */}

                                                    <input defaultValue={user.displayName} {...register("name")} placeholder="Your name" />
                                                    {/* include validation with required or other standard HTML validation rules */}
                                                    <input defaultValue={user.email} {...register("email", { required: true })} placeholder="Your email" />
                                                    {/* errors will return when field validation fails  */}
                                                    {errors.email && <span className="error">This field is required</span>}
                                                    <input defaultValue="" {...register("phone")} placeholder="Your phone number" />
                                                    <input defaultValue="" {...register("address")} placeholder="Your  address" />
                                                    <input defaultValue="" {...register("city")} placeholder="Your city " />
                                                    <br />
                                                    <input type="submit" className="input-button" />
                                                </form>
                                            </Modal.Body>

                                        </Modal>
                                    </div>



                                </div>
                            </Col>

                        </Row>



                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>

            <div>


                

                {Glasses.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                </div>
                    :
                    <Row xs={1} md={6}>

                        {
                            Glasses.map(g => <Col>
                                <div className="card-style mb-5">



                                    <img src={g.img} className="image" alt="" />


                                    <div className="price-rating mt-1">

                                        <p className="name">{g.name}</p>
                                        <p className="price">${g.price}</p>
                                    </div>


                                    <div className="price-rating">
                                        <Link >
                                            <Button variant="warning" size="sm">{cart} Checkout</Button>
                                        </Link>
                                        <Rating
                                            initialRating={g.star}
                                            emptySymbol="far fa-star rating"
                                            fullSymbol="fas fa-star rating"
                                            readonly ></Rating>
                                    </div>


                                </div>

                            </Col>)
                        }
                    </Row>
                }
            </div>

        </Container>
    );
};

export default Details;