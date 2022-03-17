import React from "react";
import "./Footer.css";

import { Row, Col, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = ({ img }) => {
  return (
    <>
      <Row
        style={{
          backgroundImage: "url(" + img + ")",
        }}
      >
        <Container>
          <Row className='p-5 mx-5 d-flex justify-content-center '>
            <Col md={4} className='p-5'>
              <h3>SERVICE</h3>

              <Nav.Item>
                <Nav.Link as={Link} to='/strategy'>
                  <p className='fw-normal fs-6 para '>Strategy</p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/ui'>
                  <p className='fw-normal fs-6 para '>UI/UX</p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/development'>
                  <p className='fw-normal fs-6 para'>Custom Developement</p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/development'>
                  <p className='fw-normal fs-6  para'>Research Sprint </p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/ui'>
                  <p className='fw-normal fs-6  para'>Design Sprint</p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/'>
                  <p className='fw-normal fs-6 para '>Sustainaility Policy</p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
            </Col>
            <Col md={4} className='p-5'>
              <h3>CONNECT</h3>

              <Nav.Item>
                <Nav.Link as={Link} to='/contact'>
                  <p className='fw-normal fs-6  para'>Contact us</p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/about'>
                  <p className='fw-normal fs-6  para'>About us</p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <p className='fw-normal fs-6  para'>Twitter</p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <p className='fw-normal fs-6  para'>Facebook</p>{" "}
                </Nav.Link>{" "}
              </Nav.Item>
            </Col>
            <Col md={4} className='p-5'>
              <h3>CONTACT US</h3>
              <p className='fw-normal fs-6 para'>Team 36, Main Double Rd,</p>
              <p className='fw-normal fs-6  para'>PMCHS E 11/3 E-11,</p>
              <p className='fw-normal fs-6 para '>Islamabad,</p>
              <p className='fw-normal fs-6  para'>
                Islamabad Capital Territory 44000
              </p>
              <p className='fw-normal fs-6 my-3 para'>+92-91-5700341</p>
              <p className='fw-normal fs-6  para'>info@techeasesol.com</p>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className='bg-dark'>
        <p style={{ color: "white" }} className='text-center p-3  fs-6'>
          Copyright © Registered 2020 Tech Ease Solutions Pvt Ltd. We ♥ Peshawar
        </p>
      </Row>
    </>
  );
};

export default Footer;
