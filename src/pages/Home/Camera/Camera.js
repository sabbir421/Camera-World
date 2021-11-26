import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Camera.css'

const Sunglass = ({camera}) => {
    const {_id, name, img,desc,cost} =camera
    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <Col className="mt-5">
            <div className="card-style">

                    <img src={img} className="image" alt="" />
               
            
                <div className="price-rating mt-1">
              
                    <p className="name">{name}</p>
                    <p className="price">${cost}</p>
                    
                </div>
                <div><p className="">{desc}</p></div>


                <div className="price-rating">
                    <Link to={`/details/${_id}`}>
                        <Button variant="warning" size="sm">{cart} Purchase</Button>
                    </Link>
                 
                </div>


            </div>
        </Col>
    );
};

export default Sunglass;