
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ManageProduct = ({camera}) => {
    const { _id, name, img,cost, desc } = camera;

    return (
        <Col className="mt-5">
            <div className="card-style">
                <img src={img} className="image" alt="" />

                <div>

                </div>
                <div className="price-rating mt-1">

                    <p className="name">{name}</p>
                    <p className="price">${cost}</p><br/>
                    
                </div>
                <div><p className="">{desc}</p></div>
                
                <div className="price-rating">
                    <Link to={`${_id}`}>
                        <Button  variant="warning" size="sm"> Update</Button>
                    </Link>
                    <Button onClick={() =>camera.handleDelete(camera._id)} variant="danger" size="sm"> Delete</Button>

                </div>
            </div>
        </Col>
    );
};

export default ManageProduct;