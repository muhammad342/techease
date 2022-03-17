import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Bg from "../Image/Bg.png";
import { Row, Col, Card, Button, Image } from "react-bootstrap";
const HomeScreen = () => {
  return (
    <>
      <Header />
      <Row className='d-flex justify-content-center '>
        <Col lg={4} md={7} sm={12} className='py-5  '>
          <h1 className='col text-center mb-4 '>
            We Build Digital Products That Users Love.{""}
          </h1>

          <p className='text-center fs-5 fw-light'>
            We're a software design & development Company that builds web and
            mobile products for our clients.{" "}
          </p>
        </Col>
      </Row>
      <Row></Row>

      <Row className='secondRow  p-5' style={{ color: "white" }}>
        {" "}
        <Row className='d-flex justify-content-center  secondRow pt-5'>
          <Col lg={4} md={7} sm={12}>
            <h2 className='text-center mb-5'>Experienced And Skilled.{""}</h2>

            <p className='text-center fs-5 fw-light '>
              We have produced top quality products for hundred of clients for
              almost a decade. From one person startups to 500 fortune companies
              and non-profits.Here's what we can do for you.{" "}
            </p>
          </Col>
        </Row>
        <Row className='  secondRow pt-5' style={{ color: "white" }}>
          <Col md={4} className='d-flex justify-content-center '>
            <Card
              style={{ width: "18rem", border: "none", color: "white" }}
              className='secondRow d-flex align-items-center'
            >
              <Image
                src='./Logo/box.png'
                alt='logo'
                className='d-flex justify-content-center'
                style={{ width: "15vw", height: "15vh", objectFit: "contain" }}
                fluid
              />

              <Card.Body>
                <Card.Title className='text-center'>Strategy</Card.Title>
                <Card.Text className='text-center fs-6 fw-light '>
                  From idea to project plan. We’ll work to research, define and
                  validate your product.
                </Card.Text>
                <Row className='mt-3'>
                  {" "}
                  <Col className='d-flex justify-content-center'>
                    <Button variant='outline-light'>Learn More</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center '>
            <Card
              style={{ width: "18rem", border: "none" }}
              className='secondRow d-flex align-items-center'
            >
              <Image
                src='./Logo/Stack.png'
                alt='logo'
                className='d-flex justify-content-center'
                style={{ width: "13vw", height: "14vh", objectFit: "contain" }}
                fluid
              />
              <Card.Body>
                <Card.Title className='text-center'>UI/UX</Card.Title>
                <Card.Text className='text-center fs-6 fw-light '>
                  From idea to project plan. We’ll work to research, define and
                  validate your product.
                </Card.Text>
                <Row className='mt-3'>
                  {" "}
                  <Col className='d-flex justify-content-center'>
                    <Button variant='outline-light'>Learn More</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center  '>
            <Card
              style={{ width: "18rem", border: "none" }}
              className='secondRow d-flex align-items-center'
            >
              <Card.Img
                variant='top'
                src='./Logo/Dbox.png'
                className='d-flex justify-content-center'
                style={{ width: "13vw", height: "14vh", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title className='text-center'>
                  Custom Developement
                </Card.Title>
                <Card.Text className='text-center fs-6 fw-light '>
                  From idea to project plan. We’ll work to research, define and
                  validate your product.
                </Card.Text>
                <Row className='mt-3'>
                  {" "}
                  <Col className='d-flex justify-content-center'>
                    <Button variant='outline-light'>Learn More</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row className='mt-5'>
        <Row className='d-flex justify-content-center   '>
          <Col lg={4} md={7} sm={12}>
            <h2 className='text-center mb-5' style={{ color: "#57196a" }}>
              Experienced And Skilled.{""}
            </h2>

            <p className='text-center fs-5 fw-normal '>
              We have produced top quality products for hundred of clients for
              almost a decade. From one person startups to 500 fortune companies
              and non-profits.Here's what we can do for you.{" "}
            </p>
          </Col>
        </Row>

        <Row>
          <Row>
            <Col
              lg={6}
              md={8}
              sm={12}
              className='d-flex justify-content-evenly'
            >
              {" "}
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Body>
                  <Card.Img
                    variant='top'
                    src='./Logo/Group 4.png'
                    style={{ width: "3vw" }}
                  />
                  <Card.Title>Project Transparency</Card.Title>
                  <Card.Text className=' fs-6  fw-light '>
                    We’re your partner, not your cendor. You’ll have full
                    insights into the project every step of the way. From the
                    current task to the big picture, you’ll always be part of
                    the conversation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              className='d-flex justify-content-evenly'
              lg={6}
              md={8}
              sm={12}
            >
              {" "}
              <Card style={{ width: "18rem", border: "none" }}>
                {/* <Card.Img
                  variant='top'
                  src='./Logo/Group 5.png'
                  style={{ width: "3vw" }}
                  className='float-end'
                /> */}
                <div className='d-flex justify-content-end'>
                  <Image
                    src='./Logo/Group 5.png'
                    style={{ width: "3vw", objectFit: "cover" }}
                  />
                </div>

                <Card.Body>
                  <Card.Title className='text-end'>Small Teams</Card.Title>
                  <Card.Text className=' fs-6 fw-light text-end '>
                    Our team is your team. You’ll have a small, dedicated team
                    to work on your project, consult with you and help build and
                    scale your product.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col
              lg={6}
              md={8}
              sm={12}
              className='d-flex justify-content-evenly'
            >
              {" "}
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Img
                  variant='top'
                  src='./Logo/Messenger.png'
                  style={{ width: "3vw", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>Constant Communication</Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    Throughout the life cycle of your project, we’ll be in
                    constant communication. From standups to Trell and Slack
                    conversations to weekly updates, we’re always in touch.
                  </Card.Text>
                  <Button variant='outline-light'>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col
              className='d-flex justify-content-evenly '
              lg={6}
              md={8}
              sm={12}
            >
              {" "}
              <Card style={{ width: "18rem", border: "none" }}>
                <div className='d-flex justify-content-end'>
                  <Image
                    src='./Logo/Group 5.png'
                    style={{ width: "3vw", objectFit: "cover" }}
                  />
                </div>

                <Card.Body>
                  <Card.Title className='text-end'>
                    Weekly Budget Report
                  </Card.Title>
                  <Card.Text className=' fs-6 fw-light text-end '>
                    We create and share weekly budget reports that we review
                    with you in order to prioritize and stay focused on daily,
                    weekly and overall goals.
                  </Card.Text>
                  <Button variant='outline-light'>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Row>
      <Row className='bg-light'>
        <Col className='d-flex justify-content-center flex-column align-items-center p-3'>
          <Image
            src='./Logo/Quote.png'
            style={{ width: "3vw", objectFit: "contain" }}
          />
          <p className='fs-5 fw-light text-center'>
            Without Great Quality It Does’nt Matter What Something Costs
          </p>
        </Col>
      </Row>
      <Footer img={Bg} />
    </>
  );
};

export default HomeScreen;
