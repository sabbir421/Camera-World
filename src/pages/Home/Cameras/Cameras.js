import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Camera from '../Camera/Camera';


const Cameras = () => {
    const [cameras,setCameras]=useState([])
    useEffect(()=>{
        fetch('https://radiant-journey-86015.herokuapp.com/cameras')
        .then(res=>res.json())
        .then(data=>{
            setCameras(data.slice(0,6))
        })
    },[])
    return (
        <Container fluid className="mt-3">
            <div className="">
                {cameras.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                </div>
                    : <Row xs={1} md={3} className="w-75 mx-auto">
                        {
                            cameras.map(camera=><Camera
                              key={camera.key}
                              camera={camera}
                            ></Camera>)
                        }
                    </Row>
                }
                
            </div>
        </Container>
    );
};

export default Cameras;