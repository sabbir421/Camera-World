import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './SignUp.css'

const SignUp = () => {

    const location = useLocation()
    const location_url = location.state?.from || '/home'
    const history = useHistory()

    const { registerUser, error, handleName,handleEmail, handlePass, setUserName,setUser,name, email, pass, setError, setLoading } = useAuth()

    // user save in database 
    const saveUser=(email,diaplayName)=>{
        const user = { email, diaplayName}
        fetch('https://radiant-journey-86015.herokuapp.com/users', {
            method:'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)

        })
    }
    
    return (
        <Container fluid className="mt-5 pt-5 pb-5 ">
            <Row xs={1} md={3}>
                <Col md={3}></Col>
                <Col md={6}>
                    <div className=" signup-card pb-5">

                        <h4 className="mt-1 text-primary text-center ms-5">Create a account </h4>

                        <Form onSubmit={(event) => {
                            event.preventDefault()

                            registerUser(email, pass)
                                .then(result => {
                                    history.push(location_url)
                                    setError('')
                                    const newUser={email,displayName:name}
                                    setUser(newUser)
                                    saveUser(email,name)
                                    setUserName()
                                  


                                })
                                .catch(error => {
                                    setError('Enter a valid email')
                                })
                                .finally(() =>
                                    setLoading(false)
                                );

                        }} className="w-75 mx-auto">

                            <Form.Group className="mb-3" >
                                <p className="text-start">Name </p>
                                <Form.Control type="text" placeholder="Enter Your Name" onBlur={handleName} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <p className="text-start">Email </p>
                                <Form.Control type="email" placeholder="Enter Your Email" onBlur={handleEmail} />

                                

                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <p className="text-start">Password</p>
                                <Form.Control onBlur={handlePass} type="password" placeholder="Eset youur Password" />
                                <p className="text-start text-muted"> Password should be more than 6 characters</p>
                                <p className="text-start text-danger"> {error}</p>
                            </Form.Group>
                            <Button type="submit" size="sm" variant="warning" className=" ms-1 mb-3 w-50 ">Signup</Button> <br />

                            <p className="text-start">Already have an account ? <Link to="/login" className="text-decoration-none create">Log-in  </Link></p>
                        </Form>



                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
};

export default SignUp;