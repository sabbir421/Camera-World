import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageOrders = () => {

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://radiant-journey-86015.herokuapp.com/getorders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure that you want to delete')
        if (proceed) {
            const url = `https://radiant-journey-86015.herokuapp.com/myorders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Orders delete successfully ')
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }
    const handleUpdate = id => {
        const proceed = window.confirm('Are you sure that you want to update status')
        if (proceed) {
            const url = `https://radiant-journey-86015.herokuapp.com/updateorders/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orders)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        // alert('Orders update successfully ')
                        alert('Updated Successful')
                        
                    }
                })
        }
    }

    return (
        <Container fluid className="">

            <Row xs={1} md={1}>

                <Col xs={12} md={12}>
                    <h2 className="text-start dashboard">Manage Orders</h2>
                    <Table striped bordered hover variant="white">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>

                        </thead>
                        <tbody >
                            {
                                orders.map(order =>
                                    <tr className="">
                                        <td>{order.name}</td>

                                        <td >${order.email}</td>
                                        <td>{order.info.name}</td>
                                        <td>${order.info.price}</td>
                                        
                                        {
                                          order.status==='Approved'? <td>
                                              <Button onClick={() => handleUpdate(order._id)}variant="success" size="sm">
                                              {order.status}
                                              </Button>
                                          </td> :<td>
                                          <Button onClick={() => handleUpdate(order._id)}
                                            variant="danger" size="sm" >
                                              {order.status}
                                                </Button>
                                          </td>  
                                        }
                                        <td>
                                            <button onClick={() => handleDelete(order._id)} className="delete-button">
                                                <FontAwesomeIcon icon={faTrashAlt} className="fs-3 text-danger " />
                                            </button>
                                        </td>

                                    </tr>
                                )}


                        </tbody>
                    </Table>


                </Col>

            </Row>


        </Container>
    );
};

export default ManageOrders;