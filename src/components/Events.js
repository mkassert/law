import React from "react";
import styles from "./Events.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
function Events() {
  return (
    <>
      <Container fluid className={styles.events}>
        <Container>
          <Row>
            <Col lg={6} xs={12}>
              <Container>
                <Row>
                  <Col>
                    <h2 className="text-center">All Events</h2>
                  </Col>
                </Row>
                <Row className="">
                  <Col>
                    <Container>
                      <Row className="bg-secondary">
                        <Col xs={4} className="d-flex align-items-center">
                          <Container className="h-100  mt-4  pt-2">
                            <Row
                              style={{ height: "50%" }}
                              className={`bg-warning ${styles.yellow}`} 
                            >
                            <div className={styles.dot1}></div>
                            <div className={styles.dot2}></div>

                              <Col className="d-flex align-items-end justify-content-center">
                                <h5>30 JUNE</h5>
                              </Col>
                            </Row>
                            <Row
                              style={{ height: "30%" }}
                              className="w-40 bg-primary "
                            >
                              <Col className="d-flex align-items-end justify-content-center">
                                <p>2023</p>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                        <Col xs={8}>
                          <Container>
                            <Row>
                              <Col>
                                <h5>
                                  <a
                                    style={{
                                      textDecoration: "none",
                                      color: "darkblue",
                                    }}
                                    href="https://law.ipemgzb.ac.in/event/workshop-on-intellectual-property-rights-2/"
                                  >
                                    Workshop on “Intellectual Property Right”
                                  </a>
                                </h5>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p>
                                  Workshop on “Intellectual Property Rights” A
                                  workshop on “Intellectual Property Rights” was
                                  organized by IPEM Law Academy on January 30,
                                  2021. The speaker for the session was an
                                  erudite expert, Ms. Pooja Kumar, Registered
                                  Patent…
                                </p>
                              </Col>
                            </Row>
                           
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
                <Row className="pt-sm-5 py-2">
                  <Col className="d-flex align-items-center justify-content-center">
                    <Button className="rounded-0 p-3">SHOW ALL</Button>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={6} xs={12}>
              <Container>
                <Row>
                  <Col>
                    <h3 className="text-center">ALL NOTICES</h3>
                  </Col>
                </Row>
                <Row className={`bg-secondary ${styles.notice__row}`}>
                  <Col>
                    <ul className={`${styles.marquee}`}>
                      <li>
                        <a>
                          International E-Conference on “Intellectual Property
                          Rights: The Contemporary Issues” to be held on 17th
                          December 2021
                        </a>
                      </li>
                      <li>
                        <a>
                          International E-Conference on “Intellectual Property
                          Rights: The Contemporary Issues” to be held on 17th
                          December 2021
                        </a>
                      </li>
                      <li>
                        <a>
                          International E-Conference on “Intellectual Property
                          Rights: The Contemporary Issues” to be held on 17th
                          December 2021
                        </a>
                      </li>
                      <li>
                        <a>
                          International E-Conference on “Intellectual Property
                          Rights: The Contemporary Issues” to be held on 17th
                          December 2021
                        </a>
                      </li>
                       <li>
                        <a>
                          International E-Conference on “Intellectual Property
                          Rights: The Contemporary Issues” to be held on 17th
                          December 2021
                        </a>
                      </li> <li>
                        <a>
                          International E-Conference on “Intellectual Property
                          Rights: The Contemporary Issues” to be held on 17th
                          December 2021
                        </a>
                      </li>

                     
                    </ul>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Events;
