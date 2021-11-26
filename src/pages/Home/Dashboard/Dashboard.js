import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import MyOrders from './MyOrders/MyOrders';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import Review from './Review/Review';

import useAuth from '../../../Hooks/useAuth';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from './AdminRoute/AdminRoute';
import AddProducts from './AddProducts/AddProducts';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import UpdateProduct from './UpdateProduct/UpdateProduct';
import DashboaredHome from './DashboaredHome/DashboaredHome';
const Dashboard = () => {
    const { admin, logOut } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <Container fluid className="mt-5 pt-5 pb-5">
            <Row xs={1} md={2}>
                <Col xs={12} md={3} className="admin-panel">

                 <Link to="/dashboard" className="text-decoration-none">   <h2 className="text-primary dashboard">DashBoard</h2>
                 </Link>
                    <Link to={`${url}/myorders`} className="text-decoration-none">
                        <h6 className="text-start">My Orders</h6>
                    </Link>
                    <Link to={`${url}/review`} className="text-decoration-none">
                        <h6 className="text-start">Review</h6>
                    </Link>
                   
                    {
                        admin &&  <div>
                            <Link to={`${url}/addproduct`} className="text-decoration-none">
                                <h6 className="text-start">Add Product</h6>
                            </Link>
                            <Link to={`${url}/manageproduct`} className="text-decoration-none">
                                <h6 className="text-start">Manage Products</h6>
                            </Link>
                            <Link to={`${url}/manageorders`} className="text-decoration-none">
                                <h6 className="text-start">Manage Orders</h6>
                            </Link>
                            <Link to={`${url}/makeadmin`} className="text-decoration-none">
                                <h6 className="text-start">Make Admin</h6>
                            </Link>

                        </div>
                    
                    }

                    <Link className="text-decoration-none">
                        <h6 className="text-start" onClick={logOut}>LogOut</h6>
                    </Link>

                </Col>

                <Col xs={12} md={9}>
                    <Switch>
                        <Route exact path={path}>
                       <DashboaredHome></DashboaredHome>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>

                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
    
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}>
                           <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageorders`}>
                          <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproduct`}>
                         <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/:glassId`}>
                         <UpdateProduct></UpdateProduct>
                        </AdminRoute>
                       
                    </Switch>



                </Col>

            </Row>


        </Container>
    );
};

export default Dashboard;