
import { Container, Nav, Navbar, Button,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from './../../../Hooks/useAuth';

const Header = () => {
   const {user,logOut}=useAuth()
    
    return (
        <Container fluid>
           
            <Navbar className="navbar bg-primary" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="fs-2 text-warning">Camera World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home" className="link ms-3" >HOME</Link>
                          
                            <Link to="/about" className="link ms-3" >ABOUT</Link>
                           
                            <Link to="/explore" className="link ms-3">EXPOLORE</Link>
                           

                        </Nav>
                        

                        <Navbar.Text>

                            {
                                user.email && <span className="text-dark  name me-1">Welcome , <span className="text-dark">{user.displayName}</span></span>
                            }
                            <br />

                            {
                                user.email ? <div className="me-1">


                                    <Link to="/dashboard" className="me-1"> <Button variant="primary" size="sm">Dashboard</Button></Link>

                                    <Button onClick={logOut} variant="warning" size="sm" >Logout</Button>
                                </div> : <Link to="/login"><Button variant="warning" size="sm">Sign-in</Button></Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;