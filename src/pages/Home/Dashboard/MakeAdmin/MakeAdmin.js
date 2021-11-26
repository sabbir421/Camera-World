import React, { useState } from 'react';
import { Container, Form,Button } from 'react-bootstrap';


const MakeAdmin = () => {
   
    const [email, setEmail] = useState('')
    const [ setSuccess] = useState(false);
    const handleOnBlur=e=>{
      setEmail( e.target.value)
    }
    const handleAdmin = e => {
        const user={email}
        fetch('https://radiant-journey-86015.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert('Successfully added')
                setEmail('')
                setSuccess(true)
            }
            else{
                alert('Already Admin')
               
            }
            
        })

        e.preventDefault()
    }
    return (
        <Container fluid>
            <h2 className="dashboard text-start">Make an Admin</h2>

            <Form onSubmit={handleAdmin} className="w-50 mt-5">
                <Form.Group className="mb-3  text-start" controlId="formGroupEmail">
                    
                    <Form.Control onBlur={handleOnBlur} type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-50">
                    Submit
                </Button>
            </Form>


        </Container>
    );
};

export default MakeAdmin;