import React from "react";
import { Row, Col, Container, Button, Image, Card } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import BgImg from "../Image/GH.png";
import Fimg from "../Image/GF.png";
const Development = () => {
  return (
    <>
      <>
        <Header color={"#03C464"} txt={"#FFF"} />
        <Row
          className='d-flex justify-content-center  '
          style={{ backgroundImage: "url(" + BgImg + ")" }}
        >
          <Col
            lg={3}
            md={7}
            sm={12}
            className='py-5 d-flex justify-content-center align-items-center flex-column '
            style={{ color: "white" }}
          >
            <Image
              src='./Logo/stack.png'
              alt='logo'
              className='d-flex justify-content-center'
              style={{ width: "10vw", height: "10vh", objectFit: "contain" }}
              fluid
            />

            <h1 className='col text-center mb-4 '>
              Custom Software Developement
            </h1>

            <p className='text-center fs-5 fw-light'>
              Using design thinking methodologies, we’ll create experiences that
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
        <Container>
          <Row className='d-flex justify-content-center   pt-5'>
            <Col lg={5} md={7} sm={12}>
              <h1 className='text-center fw-bold '>
                Our Approach to Software{""}
              </h1>

              <p className='text-center fs-6 fw-bold '>
                We’r your partner, not your vendor.Our goal is help make you
                successful by continuously delivering great software.
              </p>
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
                    <Card.Title className='fw-bold'>
                      Agile Developement
                    </Card.Title>
                    <Card.Text className=' fs-6 fw-light '>
                      Agile development is a powerful methodology for building
                      software, especially in the face of uncertainty. We run
                      weekly sprints and work closely with you to define
                      requirements and expectations. We’ll help build a backlog
                      and ensure we’re consistently prioritizing our tasks.
                      You’ll have full visibility into the product and process
                      but also maintain the flexibility to make changes as
                      things evolve.
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
                      Pair Programming
                    </Card.Title>
                    <Card.Text className=' fs-6 fw-light '>
                      Two heads are better than one. We strive to pair program
                      20-30% of our time. It allows us to build high-quality
                      software quickly and efficiently. With pairing, developers
                      are able to transfer knowledge, hold each other
                      accountable and maintain a high standard of quality. Pair
                      programming is even more important when we’re working
                      through more difficult technical challenges.
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
                      Test-Driven Developement
                    </Card.Title>
                    <Card.Text className=' fs-6 fw-light '>
                      We write automated tests to validate our application code
                      work as expected. Unit tests allow us to test the
                      individual components while integration tests provide a
                      functionalty test of features and processes of the
                      application. Aside from establishing best practices for a
                      product, test-driven development increases the long-term
                      maintainability of the codebase.
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
                      Continuous Delivery
                    </Card.Title>
                    <Card.Text className=' fs-6 fw-light '>
                      We deploy as often as possible. As soon as new code passes
                      the automated tests, it’s deployed to staging and
                      available for your review. This allows us to get feedback
                      quickly and make the necessary updates. Once it’s
                      approved, we deploy to production and begin a feedback
                      loop with customers. This is the best way to continuously
                      improve a product.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </Container>
        <Row className='bg-light'>
          <Container>
            <Row className='d-flex justify-content-center   pt-5'>
              <Col lg={6} md={7} sm={12}>
                <h1 className='text-center fw-bold '>Web Development</h1>

                <p className='text-center fs-6 fw-bold '>
                  Web development is the foundation of what we do. From
                  dashboards to API’s to customer-facing applications, we have
                  the skill and experience to bring your product to life.
                </p>
              </Col>
            </Row>{" "}
            <Row className='  p-5'>
              {" "}
              <Row className='   pt-5'>
                <Col
                  lg={6}
                  md={6}
                  className='d-flex justify-content-center bg-light'
                >
                  <Card
                    style={{ width: "32vw", border: "none" }}
                    className=' d-flex align-items-center bg-light'
                  >
                    <Card.Body>
                      <Card.Title className='fw-bold'>Node JS</Card.Title>
                      <Card.Text className=' fs-6 fw-light '>
                        Node.js use non-blocking, event-driven I/O to remain
                        lightweight and efficient in the face of data-intensive
                        real-time applications that run across distributed
                        devices
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={6}
                  md={6}
                  className='d-flex justify-content-center bg-light'
                >
                  <Card
                    style={{ width: "32vw", border: "none" }}
                    className=' d-flex align-items-center bg-light'
                  >
                    <Card.Body>
                      <Card.Title className='fw-bold'>Python</Card.Title>
                      <Card.Text className=' fs-6 fw-light '>
                        Python’s ecosystem is growing over the years and it’s
                        more and more capable of the statistical analysis.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className='pt-5'>
                <Col
                  lg={6}
                  md={6}
                  className='d-flex justify-content-center bg-light'
                >
                  <Card
                    style={{ width: "32vw", border: "none" }}
                    className=' d-flex align-items-center bg-light'
                  >
                    <Card.Body>
                      <Card.Title className='fw-bold'>Laravel</Card.Title>
                      <Card.Text className=' fs-6 fw-light '>
                        Laravel makes it easier to work with complexity. Laravel
                        is one of the highly used, open-source modern web
                        application framework that designs customised web
                        applications quickly and easily.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={6}
                  md={6}
                  className='d-flex justify-content-center bg-light '
                >
                  <Card
                    style={{ width: "32vw", border: "none" }}
                    className=' d-flex align-items-center bg-light'
                  >
                    <Card.Body>
                      <Card.Title className='fw-bold'>PHP</Card.Title>
                      <Card.Text className=' fs-6 fw-light '>
                        PHP makes Server-side scripting easy more than another
                        language and is way to go solution for small or medium
                        level Products
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className='pt-5'>
                <Col
                  lg={4}
                  md={6}
                  className='d-flex justify-content-center bg-light'
                >
                  <Card
                    style={{ width: "18vw", border: "none" }}
                    className=' d-flex align-items-center bg-light'
                  >
                    <Card.Body>
                      <Card.Title className='fw-bold'>
                        API Development
                      </Card.Title>
                      <Card.Text className=' fs-6 fw-light '>
                        Building your application with a core API enables you to
                        create a dynamic, device-agnostic central application
                        layer that you can build upon.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={4}
                  md={6}
                  className='d-flex justify-content-center bg-light'
                >
                  <Card
                    style={{ width: "18vw", border: "none" }}
                    className=' d-flex  bg-light'
                  >
                    <Image
                      src='./Logo/single-page.png'
                      alt='logo'
                      fluid
                      style={{
                        width: "4vw",
                        height: "9vh",
                        objectFit: "contain",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className='fw-bold'>
                        Single-Page Applications
                      </Card.Title>
                      <Card.Text className=' fs-6 fw-light '>
                        Using JavaScript frameworks like Ember and Angular, we
                        can build fast, responsive and desktop like experiences
                        in the browser without any server-side dependencies.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={4}
                  md={6}
                  className='d-flex justify-content-center bg-light '
                >
                  <Card
                    style={{ width: "18vw", border: "none" }}
                    className=' d-flex bg-light'
                  >
                    <Image
                      src='./Logo/third-party.png'
                      alt='logo'
                      fluid
                      style={{
                        width: "4vw",
                        height: "9vh",
                        objectFit: "contain",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className='fw-bold'>
                        Third Party Integration
                      </Card.Title>
                      <Card.Text className=' fs-6 fw-light '>
                        Utilising third-party API’s can be an efficient and
                        low-cost means of accessing data or providing
                        functionality for your users without the overhead of
                        building custom software.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Row>
          </Container>
        </Row>
        <Container className='p-5 '>
          <Row className='d-flex justify-content-center   pt-5'>
            <Col lg={6} md={7} sm={12}>
              <h1 className='text-center fw-bold '>Mobile Development</h1>

              <p className='text-center fs-6 fw-bold '>
                We Build mobile experiences for how users interact with your
                product. From mobile apps to tablet apps to mobile websites.
              </p>
            </Col>
          </Row>{" "}
          <Row className='   pt-5'>
            <Col md={6} lg={6} className='d-flex justify-content-center '>
              <Card style={{ width: "20vw", border: "none" }}>
                <Image
                  src='./Logo/android.png'
                  alt='logo'
                  fluid
                  style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
                />

                <Card.Body>
                  <Card.Title>Mobile App</Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    Mobile is about much more than just apps– it’s about
                    delivering exactly what the user wants at the right moment.
                    Whether it’s a consumer app, an internal product or a
                    business solution, a mobile application may be the best tool
                    for the end user. Through user research and strategy, we’ll
                    identify the needs of the users and design a product that
                    solves real world problems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={6} className='d-flex justify-content-center '>
              <Card style={{ width: "20vw", border: "none" }}>
                <Image
                  src='./Logo/ios.png'
                  alt='logo'
                  fluid
                  style={{ width: "4vw", height: "9vh", objectFit: "contain" }}
                />

                <Card.Body>
                  <Card.Title>Mobile App</Card.Title>
                  <Card.Text className=' fs-6 fw-light '>
                    Sometimes an app isn’t the best solution for a mobile user.
                    For light weight or content-only products, a mobile web app
                    might be the best solution. Using modern technologies, we
                    can deliver a mobile website with the power of web
                    application. For prototypes, MVP’s and initial product
                    iterations, this is the best and most cost-effective means
                    of delivering quality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Row className='d-flex justify-content-center bg-light'>
          <Col lg={5} md={7} sm={12} className='py-5  '>
            <h2 className=' text-center mb-4 '>
              READY TO BUILD CUSTOM SOFTWARE?
            </h2>

            <Row className='mt-3'>
              {" "}
              <Col className='d-flex justify-content-center'>
                <Button variant='success'>LETS MAKE SOMETHING GREAT!</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
      <Footer img={Fimg} />
    </>
  );
};

export default Development;
