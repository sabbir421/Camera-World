import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Col } from 'react-bootstrap';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const size = 9
    useEffect(() => {
        fetch(`https://radiant-journey-86015.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page])
    return (
        <Container fluid className="mt-5">
            <div className="">
                {products.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                </div>
                    : <Row xs={1} md={3} className="w-75 mx-auto">
                        {
                            products.map(camera => <Explore
                                key={camera._id}
                                camera={camera}

                            ></Explore>)
                        }

                    </Row>
                }
                <Row xs={1} md={3}>
                    <Col xs={12} md={2}>
                        
                    </Col>
                    <Col xs={12} md={6}>

                    <div className="pagination">
                            {
                                [...Array(pageCount).keys()].map(number => <button
                                    key={number}
                                    onClick={() => setPage(number)}
                                    className={number === page ? 'selected' : ''}

                                >{number + 1}</button>)
                            }

                        </div>
                    </Col>
                    <Col xs={12} md={2}></Col>


                </Row>




            </div>

        </Container>
    );
};

export default Explores;