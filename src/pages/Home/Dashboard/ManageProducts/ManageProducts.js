import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Col} from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';


const ManageProducts = () => {
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
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure that you want to delete')
        if (proceed) {
            const url = `https://radiant-journey-86015.herokuapp.com/cameras/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product delete successfully')
                        const remaining = products.filter(product =>product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <Container fluid className="">
              <h2 className="text-start dashboard">Manage Products </h2>
        <div className="">
            {products.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
            </div>
                : <Row xs={1} md={3} className="">
                    {
                        products.map(camera => <ManageProduct
                          camera={camera}
                          handleDelete={handleDelete}
                        ></ManageProduct>)
                    }

                </Row>
            }
            <Row xs={1} md={1}>
                
                <Col >

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
             


            </Row>




        </div>

    </Container>
    );
};

export default ManageProducts;