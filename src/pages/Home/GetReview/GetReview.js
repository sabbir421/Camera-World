import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/useAuth';
import './GetReview.css'

const GetReview = (props) => {
    const { user } = useAuth()
    const { name, review, rating } = props.review
    return (
        <Col className="mt-5">
            <div className="review-card">
              
                    <img src={user.src} className="review-image" alt="" />
                
                <div>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star rating"
                        fullSymbol="fas fa-star rating"
                        readonly ></Rating>
                    <p className="name text-center">{name}</p>

                    <p className=" text-start ms-1  me-1" style={{ fontSize: '15px' }}>{review}</p>
                </div>
            </div>
        </Col>
    );
};

export default GetReview;