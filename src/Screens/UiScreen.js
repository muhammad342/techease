import React from "react";
import { Row, Col, Card, Image, Button, Container } from "react-bootstrap";
import Bg from "../Image/B.png";
import BgImg from "../Image/BB.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const UiScreen = () => {
  return (
    <>
      <Header color={"#4384D6"} txt={"#FFF"} />{" "}
      <Row
        className='d-flex justify-content-center  '
        style={{ backgroundImage: "url(" + BgImg + ")" }}
      >
        <Col
          lg={4}
          md={7}
          sm={12}
          className='py-5  '
          style={{ color: "white" }}
        >
          <h1 className='col text-center mb-4 '>Human Centered-Design</h1>

          <p className='text-center fs-5 fw-light'>
            Using design thinking methodologies. We’ll create experiences that
            solve problems for the humans using them.
          </p>
          <Row className='mt-3'>
            {" "}
            <Col className='d-flex justify-content-center'>
              <Button variant='light'>Start Project</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='  p-5'>
        {" "}
        <Row className='d-flex justify-content-center   pt-5'>
          <Col lg={4} md={7} sm={12}>
            <h2 className='text-center mb-3'>The Design Sprint</h2>

            <p className='text-center fs-6 fw-light '>
              We use design sprints to answer critical business question through
              design, prototyping and customer interviews
            </p>
          </Col>
        </Row>
        <Row className='   pt-5'>
          <Col md={4} className='d-flex justify-content-center '>
            <Card style={{ width: "18rem", border: "none" }}>
              <Image
                src='./Logo/arrow.png'
                alt='logo'
                fluid
                style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>Unpack</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  We start at the end and agree to a long-term goal. The
                  business owners and experts will share their knowledge, we’ll
                  map out the challenge and identify an ambitious problem to
                  solve.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center '>
            <Card
              style={{ width: "18rem", border: "none" }}
              className=' d-flex align-items-center'
            >
              <Image src='./Logo/box.png' alt='logo' fluid />

              <Card.Body>
                <Card.Title>Sketch</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  One we understand the problem at hand, we’ll attempt to create
                  as many solutions as possible. First we’ll explore existing
                  ideas and then work through various exercises to sketch
                  solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center '>
            <Card
              style={{ width: "18rem", border: "none" }}
              className=' d-flex align-items-center'
            >
              <Image src='./Logo/box.png' alt='logo' fluid />

              <Card.Body>
                <Card.Title>Decide</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  With all of the potential solutions, we’ll work as a team to
                  share, discuss and decide on the best solution. We’ll create a
                  storyboard and step-by-step plan for our prototype.s
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='   pt-5'>
          <Col md={4} className='d-flex justify-content-center '>
            <Card style={{ width: "18rem", border: "none" }}>
              <Image
                src='./Logo/prototype-red-1.png'
                alt='logo'
                fluid
                style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>Prototype</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  With a thought-out solution and storyboard, we’ll spend an
                  entire day turning the solution into a working prototype.
                  We’ll utilize this prototype to show users and get feedback.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center '>
            <Card style={{ width: "18rem", border: "none" }}>
              <Image
                src='./Logo/learn.png'
                alt='logo'
                fluid
                style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>Interview</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  With our prototype, we’ll invite real people into the office
                  to conduct interviews. We’ll learn about the product as they
                  reat to our prototype and provide us with critical feedback.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center '>
            <Card style={{ width: "18rem", border: "none" }}>
              <Image
                src='./Logo/build-blue.png'
                alt='logo'
                fluid
                style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>Built</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  With a prototype and real customer feedback, we have answered
                  the important question about our design. Now we can move into
                  high-fidelity designs and product development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row className='  p-5'>
        {" "}
        <Row className='d-flex justify-content-center   pt-5'>
          <Col lg={4} md={7} sm={12}>
            <h1 className='text-center mb-3 fw-bold'>Design Research</h1>

            <p className='text-center fs-6 fw-bold '>
              Who are your users? What are their pains and needs? What are they
              trying to accomplish? These are the important quastions we’ll
              answer.
            </p>
          </Col>
        </Row>
        <Row className='   pt-5'>
          <Col md={4} className='d-flex justify-content-center '>
            <Card style={{ width: "18rem", border: "none" }}>
              <Image
                src='./Logo/prototype-red-1.png'
                alt='logo'
                fluid
                style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>Prototype</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  With a thought-out solution and storyboard, we’ll spend an
                  entire day turning the solution into a working prototype.
                  We’ll utilize this prototype to show users and get feedback.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center '>
            <Card style={{ width: "18rem", border: "none" }}>
              <Image
                src='./Logo/learn.png'
                alt='logo'
                fluid
                style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>Interview</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  With our prototype, we’ll invite real people into the office
                  to conduct interviews. We’ll learn about the product as they
                  reat to our prototype and provide us with critical feedback.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center '>
            <Card style={{ width: "18rem", border: "none" }}>
              <Image
                src='./Logo/build-blue.png'
                alt='logo'
                fluid
                style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>Built</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  With a prototype and real customer feedback, we have answered
                  the important question about our design. Now we can move into
                  high-fidelity designs and product development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row className='mt-5'>
        <Row className='d-flex justify-content-center   '>
          <Col lg={4} md={7} sm={12}>
            <h2 className='text-center '>User Experience</h2>

            <p className='text-center fs-5 fw-normal '>
              We craft smart and intuitive user experiences through a
              user-trested, data-driven design approach.
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
                    src='./Logo/user-flow.png'
                    style={{ width: "5vw" }}
                  />
                  <Card.Title>Information Architecture</Card.Title>
                  <Card.Text className=' fs-6  fw-light '>
                    We work with you to translate business goals into software
                    requirements with measure able acceptance criteria.
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
                {/* <div className='d-flex justify-content-end'>
                  <Image
                    src='./Logo/Group 5.png'
                    style={{ width: "3vw", objectFit: "cover" }}
                  />
                </div> */}

                <Card.Body>
                  <Card.Title className='text-end'>Wireframes</Card.Title>
                  <Card.Text className=' fs-6 fw-light text-end '>
                    We’ll work from low to high-fidelity wireframes to shape the
                    layout, design and experience of your product.
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
                  src='./Logo/wireframe.png'
                  style={{ width: "4vw", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>Interaction Designs</Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    We design software to interact and respond to humans in
                    smart and intuitive ways.
                  </Card.Text>
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
                    src='./Logo/testing.png'
                    style={{ width: "5vw", objectFit: "cover" }}
                  />
                </div>

                <Card.Body>
                  <Card.Title className='text-end'>
                    Usability testing
                  </Card.Title>
                  <Card.Text className=' fs-6 fw-light text-end '>
                    Using prototypes, mockups or an actual product. We’ll
                    conduct usability tests with real users to learn and improve
                    the product.
                  </Card.Text>
                  <Button variant='outline-light'>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Row>
      <Container className='px-4'>
        <Row className='d-flex justify-content-center   '>
          <Col lg={4} md={7} sm={12}>
            <h2 className='text-center '>Product Design</h2>

            <p className='text-center fs-6 fw-bold '>
              We deliver top-quality product design through visual storytelling.
            </p>
          </Col>
        </Row>
        <Row className='d-flex flex-column'>
          <Col lg={6} mg={6} sm={12}>
            {" "}
            <Card style={{ width: "35vw", border: "none" }}>
              <Card.Body>
                <Card.Title className='text-start fw-bold fs-4'>
                  Story Telling
                </Card.Title>
                <Card.Text className=' fs-6 fw-light text-start '>
                  Story telling is the heart of any successful product. We’ll
                  help create a product that helps users connect through that
                  story.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} mg={6} sm={12}>
            {" "}
            <Card style={{ width: "35vw", border: "none" }}>
              <Card.Body>
                <Card.Img
                  variant='top'
                  src='./Logo/copy.png'
                  style={{ width: "7vw" }}
                />
                <Card.Title className='text-start fw-bold fs-4'>
                  Copy
                </Card.Title>
                <Card.Text className=' fs-6 fw-light text-start '>
                  Copy is design. Crafting the right words and using just the
                  perfect amount of copy is important to connect with your
                  customers and making their experience enjoyable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col mg={6} sm={12} className='d-flex justify-content-end '>
            {" "}
            <Card style={{ width: "35vw", border: "none" }}>
              <div className='d-flex justify-content-end'>
                <Image
                  src='./Logo/visual-design.png'
                  style={{ width: "7vw", objectFit: "cover" }}
                />
              </div>
              <Card.Body>
                <Card.Title className='text-end fs-4 fw-bold'>
                  Visual Design
                </Card.Title>
                <Card.Text className=' fs-6 fw-light text-end '>
                  Unique, well branded and user-friendly interfaces are created
                  based on research, wireframes and user feedback.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col mg={6} sm={12} className='d-flex justify-content-end '>
            {" "}
            <Card style={{ width: "35vw", border: "none" }}>
              <Card.Body>
                <Card.Title className='text-end fs-4 fw-bold'>
                  Illustration & Iconography
                </Card.Title>
                <Card.Text className=' fs-6 fw-light text-end '>
                  We create unique and personalized web experiences with custom
                  illustrations and iconography designed to evoke emotion and
                  narration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Row className='d-flex justify-content-center bg-light'>
        <Col lg={5} md={7} sm={12} className='py-5  '>
          <h2 className=' text-center mb-4 '>
            BRING OUR STRATEGY AND DIGITAL INNOVATION TO YOU PRODUCT.
          </h2>

          <Row className='mt-3'>
            {" "}
            <Col className='d-flex justify-content-center'>
              <Button variant='primary'>LETS MAKE SOMETHING GREAT!</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer img={Bg} />
    </>
  );
};

export default UiScreen;
