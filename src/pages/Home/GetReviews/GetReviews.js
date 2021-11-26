import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import GetReview from '../GetReview/GetReview';

const GetReviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://radiant-journey-86015.herokuapp.com/getreviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data.slice(0,8))
        })
    },[])
    return (
        <Container fluid className="mt-3 pb-3">
        <div className="">
            {reviews.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
            </div>
                : <Row xs={1} md={4} className="w-75 mx-auto">
                    {
                        reviews.map(review=><GetReview
                        key={review._id}
                        review={review}
                        
                        ></GetReview>)
                    }
                </Row>
            }
            
        </div>
    </Container>
    );
};

export default GetReviews;