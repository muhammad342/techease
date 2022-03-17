import React from "react";
import { Row, Col, Card, Button, Image } from "react-bootstrap";
import "./Home.css";
import Bg from "../Image/RedBgF.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const StrategyScreen = () => {
  return (
    <>
      <Header color={"#B11E1E"} txt={"#FFF"} />
      <Row className='d-flex justify-content-center  bg'>
        <Col
          lg={4}
          md={7}
          sm={12}
          className='py-5  '
          style={{ color: "white" }}
        >
          <h1 className='col text-center mb-4 '>
            Strategy & Digital Innovation{""}
          </h1>

          <p className='text-center fs-5 fw-light'>
            We create innovative solutions through comprehensive research,
            talking to real customers, and testing prototypes.{" "}
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
            <h2 className='text-center mb-3'>The Research Sprint{""}</h2>

            <p className='text-center fs-6 fw-light '>
              With a research sprint, we work with you to identify your business
              opportunity, conduct user interviews, collect feedback and help
              you make the most informed business decisions.{" "}
            </p>
          </Col>
        </Row>
        <Row className='   pt-5'>
          <Col md={4} className='d-flex justify-content-center '>
            <Card style={{ width: "18rem", border: "none" }}>
              <Image
                src='./Logo/discover.png'
                alt='logo'
                fluid
                style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>Discover</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  We Start with a discovery workshop to discuss the business
                  opportunity, identify potential customers and build a working
                  understanding of the problem that we’re solving.
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
                <Card.Title>Recruit</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  In order to validate the success of our solution, we’ll need
                  to recruit real customers. Through surveys or onsite visits,
                  we’ll identify the right people to interview.
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
                <Card.Title>Interview</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  We’ll conduct several one-on-one interviews with real
                  customers. We’ll ask important question to identify their
                  needs and pains, and then present our prototype to gather
                  feedback.
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
                  A conversation with customers is just the start. Working with
                  your team, we’ll build a prototype of our solution and use
                  this during our interview to further validate our product.
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
                <Card.Title>Learn</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  With real customer feedback and a prototype, we’ll be able to
                  answer the most important questions about your business model.
                  We’ll either build or iterate.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='d-flex justify-content-center '>
            <Card style={{ width: "18rem", border: "none" }}>
              <Image
                src='./Logo/build-red-1.png'
                alt='logo'
                fluid
                style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
              />

              <Card.Body>
                <Card.Title>Built</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  If the research sprint confirms our assumptions, we’ll begin
                  the process of developing the full product through an
                  iterative development cycle, from UX to design to development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row className='  p-5'>
        {" "}
        <Row className='   pt-5'>
          <Col lg={6} md={6} className='d-flex justify-content-center '>
            <Card
              style={{ width: "25rem", border: "none" }}
              className=' d-flex align-items-center'
            >
              <Card.Body>
                <Card.Title>Business Immersion</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  We do our best work when we have a deep understanding of your
                  business. We accomplish this through business immersion
                  sessions, on-site visits and interviews with your team and
                  custoomers. When we understand your business, competitors,
                  customers and values, then we can provide the most value.
                  We’re no longer just a vendor, but a part of your team.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} className='d-flex justify-content-center '>
            <Card
              style={{ width: "25rem", border: "none" }}
              className=' d-flex align-items-center'
            >
              <Card.Body>
                <Card.Title>User Research</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  Software should be designed for the people using it. Rather
                  than driving our decisions by assumptions, we research and
                  interview real users in order to build products that matter.
                  Whether the users are part of your organization or customers
                  you haven’t acquired yet, we’ll work with you to identify and
                  interview them.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='   pt-5'>
          <Col lg={6} md={6} className='d-flex justify-content-center '>
            <Card
              style={{ width: "25rem", border: "none" }}
              className=' d-flex align-items-center'
            >
              <Card.Body>
                <Card.Title>Business Goal</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  We understand that clients expect a return on their
                  investment. Working with your team, we will build a strategy
                  based on your business goals. We’ll set expectations regarding
                  timelines, budget and process
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} className='d-flex justify-content-center '>
            <Card
              style={{ width: "25rem", border: "none" }}
              className=' d-flex align-items-center'
            >
              <Card.Body>
                <Card.Title>Measure & Learn</Card.Title>
                <Card.Text className=' fs-6 fw-light '>
                  Too many businesses rely on minimal or insubstantial data.
                  From the very outset, we identify key metrics and the
                  mechanisms that we’ll user to capture and measure the data.
                  This data gives us true insights into our progress and
                  assumptions, which in turn leads us towards making better,
                  more informed decisions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row className='d-flex justify-content-center bg-light'>
        <Col lg={5} md={7} sm={12} className='py-5  '>
          <h2 className=' text-center mb-4 '>
            BRING OUR STRATEGY AND DIGITAL INNOVATION TO YOU PRODUCT.
          </h2>

          <Row className='mt-3'>
            {" "}
            <Col className='d-flex justify-content-center'>
              <Button variant='danger'>LETS MAKE SOMETHING GREAT!</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer img={Bg} />
    </>
  );
};
export default StrategyScreen;
