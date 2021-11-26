import React from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { setLoading, error, handleEmail, handlePass, setError, logInUser, email, pass } = useAuth()
    const location = useLocation()
    const location_url = location.state?.from || '/home'
    const history = useHistory()
   



    return (
        <Container fluid className="mt-3">
            <Row xs={1} md={3}>
                <Col md={3}></Col>
                <Col md={6} className="form-style ">

                    <h2 className="text-center fonnt-weaght-500 mt-5 mb-3">Login For All Features </h2>

                    <Form onSubmit={(e) => {
                        e.preventDefault()

                       logInUser(email, pass)
                            .then(result => {
                                history.push(location_url)
                                setError('')
                            })
                            .catch(error => {
                                setError('Email or Password is not valid')
                            })
                            .finally(() =>
                                setLoading(false)
                            );

                    }}
                    >

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <p className="text-start">Email </p>
                            <Form.Control type="email" placeholder="Enter Your Email" onBlur={handleEmail} />

                            

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <p className="text-start">Password</p>
                            <Form.Control onBlur={handlePass} type="password" placeholder="your Password" />
                            <p className="text-start text-muted"> Password should be more than 6 characters</p>
                            <p className="text-start text-danger"> {error}</p>
                        </Form.Group>
                        
                          
                          <div className="d-flex">

                         
                        <Button type="submit" variant="warning" className=" ms-1 mb-3 w-50 ">Login</Button> 
                        

                        
                        </div>
                        <p className="text-start">Already haven't a account ? <Link className="text-decoration-none fs-6" to="/signup">Go to Signup</Link></p>

                    </Form>






                </Col>
                <Col md={3}></Col>
            </Row>
        </Container >
    );
};

export default Login;