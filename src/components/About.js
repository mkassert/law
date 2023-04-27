import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import styles from './About.module.css'

function About() {
  return (
    <>
       <Container fluid className={styles.about__fluid}>
       <Container className={styles.about__content}>
       <Row className={styles.about__row}>
        <Col className='d-flex align-items-center ' >
            <Container>
                <Row>
                    <Col >
                        <h2>About Law Academy</h2>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <p>IPEM Law Academy is a constituent department of IPEM Institutions. The institute focuses on becoming the centre of excellence for higher studies. IPEM Law Academy is one of the best Law Colleges in Ghaziabad, India.</p>
                        <p>It offers three courses LLB (3 yrs), BALLB (5 yrs) and BCom LLB (5yrs) approved by the Bar Council of India.</p>

                    </Col>
                </Row>
                <Row>
                    <Col >
                            <Button className='bg-warning border-0 text-dark rounded-0'>READ MORE</Button>
                    </Col>
                </Row>
            </Container>
        </Col>
       </Row>

       </Container>

       </Container> 
    </>
    )
}

export default About