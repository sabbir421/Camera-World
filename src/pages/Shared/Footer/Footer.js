import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {


    return (
        <Container fluid className="mt-5 footer pb-5">
            <div className='bg-dark'>
                <Row xs={1} md={3}>
                    <Col className="mt-1 ps-5">
                        <h3 className="text-white text-start">Contact Us</h3>
                        <p className="text-secondary text-start join"> dhanmondhi 32,Dhaka,Bangladesh</p>
                        <p className="text-secondary text-start join">Banani, sector-5, road-4,house-45</p>
                        <p className="text-secondary text-start join">sabbir@gmail.com</p>
                    </Col>
                    <Col className="mt-1">

                        <div className="w-50 mx-auto user-details">
                            <h4 className="text-start text-white">My Account</h4>
                            <p className="text-start text-secondary">My account</p>
                            <p className="text-start text-secondary">My address</p>

                            <p className="text-start text-secondary">Helps & Support</p>
                            <p className="text-start text-secondary">LogOut</p>
                        </div>



                    </Col>
                    <Col className="mt-1">
                        <h4 className=" text-white">Join With Us</h4>

                        <p className=" text-secondary">Subscribe for latest update</p>
                        <input type="text" placeholder="Enter Email" className="p-1" />
                        <input type="submit" value="Subscribed" className="bg-warning border-0 p-1"/>
                        
                         <br />
                         <div className="me-5">
                         <FontAwesomeIcon icon={faFacebook} className="fb-icon mt-3" />
                        <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                        <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                        <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />

                         </div>
                       
                    </Col>
                </Row>
            </div>
            


        </Container>
    );
};

export default Footer;