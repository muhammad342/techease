import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Form,
  Row,
  Col,
  Container,
  Card,
  Button,
  InputGroup,
} from "react-bootstrap";
import BgImg from "../Image/RF.png";
import Bg from "../Image/RH.png";
const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Header color={"#E02B20"} txt={"#FFF"} />
      <Row
        className='d-flex justify-content-center  '
        style={{ backgroundImage: "url(" + Bg + ")" }}
      >
        <Col
          lg={4}
          md={7}
          sm={12}
          className='py-5  '
          style={{ color: "white" }}
        >
          <h1 className='col text-center mb-4 '>
            Let’s Build Something Amazing Together
          </h1>

          <p className='text-center fs-5 fw-light'>
            Start a project, get a quote or learn more about how we can help you
            build great softwares.
          </p>
        </Col>
      </Row>
      <Container className='d-flex justify-content-center flex-column     '>
        <Row className='mt-5'>
          <h2 className='my-1'>Tell us About Yourself</h2>
          <Col md={10}>
            {" "}
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className='py-2'
            >
              <Row>
                <Form.Group
                  as={Col}
                  md='5'
                  controlId='validationCustom01'
                  className='py-3'
                >
                  <Form.Label className='fw-light fs-5'>Full name*</Form.Label>
                  <Form.Control required type='text' placeholder='Full name' />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md='5' className='py-3'>
                  <Form.Label className='fw-light fs-5'>
                    Company/organization
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Company/organization'
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md='5'
                  controlId='validationCustomUsername'
                  className='py-3'
                >
                  <Form.Label className='fw-light fs-5'>Email*</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type='text'
                      placeholder='Email'
                      aria-describedby='inputGroupPrepend'
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                      Please enter email
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md='5'
                  controlId='validationCustom03'
                  className='py-3'
                >
                  <Form.Label className='fw-light fs-5'>
                    Phone number
                  </Form.Label>
                  <Form.Control type='text' placeholder='Phone number' />
                  <Form.Control.Feedback type='invalid'>
                    Please provide a valid phone number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <h2 className='my-3'>How can we help?</h2>
          <Col md={6}>
            <Form>
              <Form.Check
                className='fw-light fs-5 py-2'
                type='checkbox'
                id='default-checkbox'
                label='Product Strategy'
              />
              <Form.Check
                className='fw-light fs-5 py-2'
                type='checkbox'
                id='default-checkbox'
                label='Research Sprint'
              />
              <Form.Check
                className='fw-light fs-5 py-2'
                type='checkbox'
                id='default-checkbox'
                label='Design/UX'
              />
              <Form.Check
                className='fw-light fs-5 py-2'
                type='checkbox'
                id='default-checkbox'
                label='Design Sprint'
              />
            </Form>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Check
                className='fw-light fs-5 py-2'
                type='checkbox'
                id='default-checkbox'
                label='Web Development'
              />
              <Form.Check
                className='fw-light fs-5 py-2'
                type='checkbox'
                id='default-checkbox'
                label='Prototype'
              />
              <Form.Check
                className='fw-light fs-5 py-2'
                type='checkbox'
                id='default-checkbox'
                label='Mobile Development'
              />
              <Form.Check
                className='fw-light fs-5 py-2'
                type='checkbox'
                id='default-checkbox'
                label='Others'
              />
            </Form>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Form>
            <Form.Group
              as={Col}
              md='8'
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>
                <h2>Tell Us About Your Project</h2>
              </Form.Label>
              <Form.Control
                as='textarea'
                rows={5}
                placeholder='Give us some background about your project, goals and requirement'
              />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <h2 className='my-3'>What is your budget?</h2>
          <Col md={6}>
            <Form>
              <Form.Check
                className='fw-light  fs-5 py-2'
                type='radio'
                id='default-checkbox'
                label="I'm not sure"
                checked
              />
              <Form.Check
                className='fw-light  fs-5 py-2'
                type='radio'
                id='default-checkbox'
                label='$1,000 - $2,500'
              />
              <Form.Check
                className='fw-light fs-5  py-2'
                type='radio'
                id='default-checkbox'
                label='$5,000 - $10,000'
              />
            </Form>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Check
                className='fw-light  fs-5 py-2'
                type='radio'
                id='default-checkbox'
                label='$0 - $1,000'
              />
              <Form.Check
                className='fw-light fs-5 py-2'
                type='radio'
                id='default-checkbox'
                label='$2,500 - $5,000'
              />
              <Form.Check
                className='fw-light fs-5 py-2'
                type='radio'
                id='default-checkbox'
                label='$10,000 - 20,000+'
              />
            </Form>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Form>
            <Form.Group
              as={Col}
              md='8'
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>
                <h2>How did you Here about TechEase Solution?</h2>
              </Form.Label>
              <Form.Control
                as='textarea'
                rows={5}
                placeholder='Referal,Search,Blog,Social media etc.'
              />
            </Form.Group>
          </Form>
        </Row>
        <Row className='my-5'>
          <Col>
            {" "}
            <Button
              variant='outline-danger'
              style={{ width: "10vw", height: "10vh" }}
            >
              <h4>Send Now</h4>
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <Footer img={BgImg} />
    </>
  );
};

export default Contact;
