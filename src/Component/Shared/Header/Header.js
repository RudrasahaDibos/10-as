import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Image/logo.png'
import './Header.css'


const Header = () => {
  const [user] =useAuthState(auth);

  const handleSignout=()=>{
    signOut(auth);
  }
  return (
   
      
        <Navbar collapseOnSelect expand="lg"  sticky='top' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"><img src={logo} alt="" />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home#service">Services</Nav.Link>
                <Nav.Link href="home#experts">Photographer</Nav.Link>
                <NavDropdown title="Blogs" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link}to='/auth'>authorization&authentication</NavDropdown.Item>
                  <NavDropdown.Item as={Link}to='/firebase' >Why are you using firebase? What other options do you have to implement authentication?</NavDropdown.Item>
                  <NavDropdown.Item as={Link}to='/firebase2'>What other services does firebase provide other than authentication</NavDropdown.Item>
                  <NavDropdown.Divider />
                
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                { user?
                  <button className='btn btn-link text-white text-decoration-none' onClick={handleSignout}>signout</button>
                  :
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     

  );
};

export default Header;