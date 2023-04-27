import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from './About.module.css';

function FacultyCarousel() {
  return (
    <>
      <Container fluid className={styles.faculty}>
        <Container className='mx-auto py-sm-5 py-3'>
          <Row className="py-sm-5 py-3">
            <Col>
              <h2 className="text-center"> Our Skilled Instructors</h2>
            </Col>
          </Row>
          <Row >
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "18rem",border:'0px' }} >
                <Card.Img variant="top" src="/landing/0008_Levels-1.jpg"  style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }} className="border-0 radius-0"/>
                <Card.Body>
                  <Card.Title style={{fontSize:'23px'}}>Ms. SHILPI TYAGI</Card.Title>
                  <Card.Text>
                    ASSTT. PROFESSOR
                  </Card.Text>
                  <Card.Subtitle style={{width:'50px',height:'4px',backgroundColor:'#fdc800'}}></Card.Subtitle>
               
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "18rem",border:'0px' }} >
                <Card.Img variant="top" src="/landing/0008_Levels-1.jpg"  style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }} className="border-0 radius-0"/>
                <Card.Body>
                  <Card.Title style={{fontSize:'23px'}}>Ms. SHILPI TYAGI</Card.Title>
                  <Card.Text>
                    ASSTT. PROFESSOR
                  </Card.Text>
                  <Card.Subtitle style={{width:'50px',height:'4px',backgroundColor:'#fdc800'}}></Card.Subtitle>
               
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "18rem",border:'0px' }} >
                <Card.Img variant="top" src="/landing/0008_Levels-1.jpg"  style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }} className="border-0 radius-0"/>
                <Card.Body>
                  <Card.Title style={{fontSize:'23px'}}>Ms. SHILPI TYAGI</Card.Title>
                  <Card.Text>
                    ASSTT. PROFESSOR
                  </Card.Text>
                  <Card.Subtitle style={{width:'50px',height:'4px',backgroundColor:'#fdc800'}}></Card.Subtitle>
               
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "18rem",border:'0px' }} >
                <Card.Img variant="top" src="/landing/0008_Levels-1.jpg"  style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }} className="border-0 radius-0"/>
                <Card.Body>
                  <Card.Title style={{fontSize:'23px'}}>Ms. SHILPI TYAGI</Card.Title>
                  <Card.Text>
                    ASSTT. PROFESSOR
                  </Card.Text>
                  <Card.Subtitle style={{width:'50px',height:'4px',backgroundColor:'#fdc800'}}></Card.Subtitle>
               
                </Card.Body>
              </Card>
            </Col>
           
           
            
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default FacultyCarousel;
