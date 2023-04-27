import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import styles from './About.module.css';

function Students() {
  return (
    <>
      <Container fluid className={styles.students}>
        <Container>
          <Row>
            <Col lg={8} xs={12} className="p-0"></Col>
            <Col lg={4} xs={12} className="p-0"></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Students;
