import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../images/top-banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Container fluid className="banner mt-2 ">
             <Link to="/home">
             <img src={banner} className="image-banner" alt="" />
             </Link>
        </Container>
    );
};

export default Banner;