import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import styles from "./About.module.css";

function Count() {
  const [count, setCount] = useState(1);
  const [industries, setIndustries] = useState(0);
  const [faculties, setFaculties] = useState(0);
  const [excellence, setExcellence] = useState(0);

  useEffect(() => {
    if (count < 24000) {
      setTimeout(() => {
        setCount(count + 100);
      }, 0.000005);
    }
  }, [count]);
  useEffect(() => {
    if (industries < 720) {
      setTimeout(() => {
        setIndustries((count) => count + 4);
      }, 4);
    }
  }, [industries]);
  useEffect(() => {
    if (faculties < 110) {
      setTimeout(() => {
        setFaculties((count) => count + 1);
      }, 1);
    }
  }, [faculties]);
  useEffect(() => {
    if (excellence < 25) {
      setTimeout(() => {
        setExcellence((count) => count + 1);
      }, 1);
    }
  }, [excellence]);

  const props1 = useSpring({ number: count - 1, from: { number: 20 } });
  const props2 = useSpring({ number: industries, from: { number: 1 } });
  const props3 = useSpring({ number: faculties, from: { number: 1 } });
  const props4 = useSpring({ number: excellence, from: { number: 1 } });

  return (
    <>
      <Container fluid className={styles.animation}>
        <Container>
          <Row >
            <Col lg={3} xs={12} className="d-flex align-items-center">
              <span
                style={{ borderBottom: "2px solid #fdc800" ,fontSize: "72px"}}
              >
                <animated.span>
                  {props1.number.interpolate((num) => Math.floor(num))}
                </animated.span>
                +
              </span>
              <span>Alumni</span>
            </Col>
            <Col lg={3} xs={12} className="d-flex align-items-center">
              {" "}
              <span style={{ borderBottom: "2px solid #fdc800",fontSize: "72px" }}>
                <animated.span>
                  {props2.number.interpolate((num) => Math.floor(num))}
                </animated.span>
                +
              </span>
              <span>Industries Linkages</span>
            </Col>
            <Col lg={3} xs={12} className="d-flex align-items-center">
              {" "}
              <span style={{ borderBottom: "2px solid #fdc800" ,fontSize: "72px"}}>
                <animated.span>
                  {props3.number.interpolate((num) => Math.floor(num))}
                </animated.span>
                +
              </span>
              <span>Faculties</span>
            </Col>
            <Col lg={3} xs={12} className="d-flex align-items-center">
              {" "}
              <span style={{ borderBottom: "2px solid #fdc800", fontSize: "72px"}}>
                <animated.span>
                  {props4.number.interpolate((num) => Math.floor(num))}
                </animated.span>
                +
              </span>
              <span>Years of Excellence</span>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Count;
