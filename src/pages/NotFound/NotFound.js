import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/404.jpg'

const NotFound = () => {
    return (
       <Container fluid>
           <img src={img} style={{height:'500px'}} alt="" />
       </Container>
    );
};

export default NotFound;