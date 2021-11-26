import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import offer from '../../../images/offer1.jpg'
import offer2 from '../../../images/offer2.jpg'
import './Offer.css'
const Offer = () => {
    return (
        <Container fluid className="mt-5 mx-5">

                <h3 className='mx-auto text-warning ms-auto my-5'>Running Offers</h3>
            <Row xs={1} md={2}>
            <Col >
            <img src={offer} className="img-offer" alt="" />

            </Col>
            <Col >
            <img src={offer2} className="img-offer" alt="" />

            </Col>
            </Row >
        </Container>
       

    );
};

export default Offer;