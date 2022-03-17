import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ color, txt }) => {
  return (
    <header style={{ backgroundColor: color }}>
      <Navbar expand='md'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='justify-content-start  mt-4 '>
              <Nav.Item>
                <Nav.Link as={Link} to='/' style={{ color: txt }}>
                  HOME
                </Nav.Link>{" "}
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to='/strategy' style={{ color: txt }}>
                  STRATEGY
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/ui' style={{ color: txt }}>
                  UI/UX
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/development' style={{ color: txt }}>
                  DEVELOPMENT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/about' style={{ color: txt }}>
                  ABOUT US
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/contact' style={{ color: txt }}>
                  CONTACT US
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
