import React from "react";
import { Row, Col, Container, Card, Button, Image } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BgImg from "../Image/BH.png";

const About = () => {
  return (
    <>
      <Header color={"#8300e9"} txt={"#FFF"} />{" "}
      <Row
        className='d-flex justify-content-center  '
        style={{ backgroundImage: "url(" + BgImg + ")" }}
      >
        <Col
          lg={5}
          md={7}
          sm={12}
          className='py-5  '
          style={{ color: "white" }}
        >
          <h1 className='col text-center mb-4 '>
            We’re a team of Strategists, Designers and Developers
          </h1>

          <p className='text-center fs-5 fw-light'>
            We have insatiable thirst for helping clients build beautiful and
            modern products for real people.
          </p>
          <Row className='mt-3'>
            {" "}
            <Col className='d-flex justify-content-center'>
              <Button variant='light'>Start Project</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Container className='pt-5'>
        <Row className='d-flex justify-content-center   pt-5'>
          <Col lg={5} md={7} sm={12}>
            <h6 className='text-center fs-6  '>
              Our Approach to Our mission is to help companies solve problems
              with design and technology.
            </h6>
          </Col>
        </Row>{" "}
        <Row className='  p-5'>
          {" "}
          <Row className='   pt-5'>
            <Col lg={6} md={6} className='d-flex justify-content-center '>
              <Card
                style={{ width: "32vw", border: "none" }}
                className=' d-flex align-items-center'
              >
                <Card.Body>
                  <Card.Title className='fw-bold'>Do Great Work</Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    Build products that are beautiful, funcitonal and enjoyable.
                    Take pride in what you and your team have created.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} className='d-flex justify-content-center '>
              <Card
                style={{ width: "32vw", border: "none" }}
                className=' d-flex align-items-center'
              >
                <Card.Body>
                  <Card.Title className='fw-bold'>Take Ownership</Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    Don’t be afraid to stand up for what you believe in. Be
                    responsible for the choices you make and the results that
                    follow. Individual ownership supports collective
                    responsibility.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='   pt-5'>
            <Col lg={6} md={6} className='d-flex justify-content-center '>
              <Card
                style={{ width: "32vw", border: "none" }}
                className=' d-flex align-items-center'
              >
                <Card.Body>
                  <Card.Title className='fw-bold'>Pursue Excellence</Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    We strive to reach our highest potential through education,
                    experience and continuous improvement.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} className='d-flex justify-content-center '>
              <Card
                style={{ width: "32vw", border: "none" }}
                className=' d-flex align-items-center'
              >
                <Card.Body>
                  <Card.Title className='fw-bold'>
                    Honesty & Transparency
                  </Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    Don’t be afraid to be yourself and be honest. Success is
                    rooted in transparency between each other and with our
                    clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='   pt-5'>
            <Col lg={6} md={6} className='d-flex justify-content-center '>
              <Card
                style={{ width: "32vw", border: "none" }}
                className=' d-flex align-items-center'
              >
                <Card.Body>
                  <Card.Title className='fw-bold'>
                    Make Other Successful
                  </Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    The greatest success comes through collaboration. Helping
                    others succeed improves ourselves and the team as a whole.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} className='d-flex justify-content-center '>
              <Card
                style={{ width: "32vw", border: "none" }}
                className=' d-flex align-items-center'
              >
                <Card.Body>
                  <Card.Title className='fw-bold'>
                    Empower Our Clients
                  </Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    Clients are our partners. It’s our responsibility to provide
                    them with our knowledge and experience to enable them to be
                    more successful.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='   pt-5'>
            <Col lg={6} md={6} className='d-flex justify-content-center '>
              <Card
                style={{ width: "32vw", border: "none" }}
                className=' d-flex align-items-center'
              >
                <Card.Body>
                  <Card.Title className='fw-bold'>Deliver Results</Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    Solutions are not enough. Strive to create measurable,
                    impactful and goal-oriented solutions for our clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container>
        {" "}
        <Row className='d-flex justify-content-center  '>
          <Col lg={4} md={7} sm={12} className='py-5  '>
            <h1 className='col text-center mb-4 '>OUR CHOOSY DUCKS</h1>

            <p className='text-center fs-5 fw-normal'>
              Web development is the foundation of what we do. From dashboards
              to API’s to customer-facing applications, we have the skill and
              experience to bring your product to life.
            </p>
          </Col>
          {/* <Container className=' ps-5 d-flex justify-content-center flex-column '> */}
          <Row className='d-flex justify-content-center'>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Abdullah Khan
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Android Developer
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/twitter.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/github.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center'
                    style={{
                      width: "25vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Muqadas Rizwan
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Graphic Designer
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>Adam Noor</Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Android Developer
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />

                        <Image
                          src='./Logo/github.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center '
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Salman Saeed
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Program Manager
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center'>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>Asif Taj</Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Flutter Developer
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />

                        <Image
                          src='./Logo/github.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center'
                    style={{
                      width: "25vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>Danyal Saif</Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Senior UI/UX Designer
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/behance.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Atta ur Rehman
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Android Developer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center '
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Sana Firdous
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      UI Designer
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/behance.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center'>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>Kashif Taj</Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      CEO
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />

                        <Image
                          src='./Logo/github.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center'
                    style={{
                      width: "25vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>Zahid Ali</Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Consultant
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />{" "}
                        <Image
                          src='./Logo/github.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Ahmadyar Imran
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Senior iOS Develope
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'></Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center '
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Dr.Suhail Yousaf
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Consultant
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/twitter.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center'>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>Salman Khan</Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Full Stack Developer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center'
                    style={{
                      width: "25vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Hurmat Hidayat
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Android Developer
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/github.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Allauddin Yousafxai
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      CTO
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />

                        <Image
                          src='./Logo/github.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center '
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Kashif Ahmad
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      CFO
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/github.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center'>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>Aliza Syed</Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Marketing & Communications
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center'
                    style={{
                      width: "25vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Atif Ur Rahman
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Senior UI/UX Designer
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/behance.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/dribbble.png'
                          alt='logo'
                          className='d-flex justify-content-center '
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center img'
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>
                      Haris Ahmad Khan
                    </Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Program Manager
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col md={3}>
              {" "}
              <Col md={8} className='d-flex justify-content-center '>
                <Card
                  style={{ width: "50vw", border: "none" }}
                  className=' d-flex align-items-center'
                >
                  <Image
                    src='./Logo/mba.jpeg'
                    alt='logo'
                    className='d-flex justify-content-center '
                    style={{
                      width: "20vw",
                      height: "25vh",
                      objectFit: "cover",
                    }}
                    fluid
                  />

                  <Card.Body>
                    <Card.Title className='text-center'>Abdullah</Card.Title>
                    <Card.Text className='text-center fs-6 fw-light '>
                      Full Stack Developer
                    </Card.Text>
                    <Row className='mt-3'>
                      {" "}
                      <Col className='d-flex justify-content-center'>
                        <Image
                          src='./Logo/github.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                        <Image
                          src='./Logo/linkedin.png'
                          alt='logo'
                          className='d-flex justify-content-center img'
                          style={{
                            width: "6vw",
                            height: "4vh",
                            objectFit: "contain",
                          }}
                          fluid
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>

          {/* </Container> */}
        </Row>
      </Container>
      <Row className='d-flex justify-content-center bg-light'>
        <Col lg={5} md={7} sm={12} className='py-5  '>
          <h2 className=' text-center mb-4 '>WE’D LOVE TO WORK WITH YOU</h2>
          <p className='text-center'>
            We’ve worked with a variety of clients to solve unique problems and
            design software for humans.
          </p>

          <Row className='mt-3'>
            {" "}
            <Col className='d-flex justify-content-center'>
              <Button style={{ background: "#8300e9" }}>
                LETS MAKE SOMETHING GREAT!
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer img={BgImg} />
    </>
  );
};

export default About;
