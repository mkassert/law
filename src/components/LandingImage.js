import React, { useState } from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./LandingImage.module.css";

import { useRouter } from "next/router";

export default function LandingImage() {
  const [index, setIndex] = useState(0);
  const [showApply,setShowApply]=useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault()
    router.push('/contact')
  }

    const handleApply=() => {
        router.push('/register')
    }

  return (
      <>

    
    <Carousel className={styles.carousel__landing} indicators={false} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={7000} className={styles.carousel__item}>
        <div className={`${styles.main__container} `}>
          {/* <img
            className={`d-block h-100  ${styles.image}`}
            src="/images/landing/landing.jpg"
            alt="First slide"
          /> */}
          <div className={`${styles.overlay__image}`}>
            <Container className="p-1 p-sm-5 ">
              <Row >
                <Col lg={2} xs={1}></Col>
                <Col>
                  {" "}
                  <div className="landing__text">
                    <h1>Over 28 Years of Excellence</h1>
                    <p>
                      {" "}
                      Welcome to the best institute for furthering your career
                    </p>
                  </div>
                </Col>
              </Row>
              <Row></Row>
              <Row></Row>
              {/* <Row className="">
                <Col></Col>
                <Col xs={10} lg={4}>
                  <Button onClick={handleApply} className={`m-2 ${styles.apply}`}>       Apply Now <ArrowForwardIcon /></Button>
                  <Button onClick={handleClick} className={` m-2 ${styles.contact}`}>Contact Us</Button>
                </Col>

                <Col></Col>
              </Row> */}
               <Row className="">
                <Col></Col>
                <Col xs={12} lg={5}>
                  <Button onClick={handleApply} className={`m-2 ${styles.apply}`}>       Apply Now </Button>
                  {/* <Button onClick={handleClick} className={` m-2 ${styles.contact}`}>Contact Us</Button> */}
                </Col>
                <Col xs={12} lg={5}>
                 
                </Col>
               

              </Row>
            </Container>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={7000} className={styles.carousel__item}>
        <div className={`${styles.main__container} `}>
          {/* <img
            className={`d-block h-100  ${styles.image}`}
            src="/images/landing/landing.jpg"
            alt="First slide"
          /> */}
          <div className={`${styles.overlay__image}`}>
            <Container className="p-1 p-sm-5 ">
              <Row >
                <Col lg={2} xs={1}></Col>
                <Col>
                  {" "}
                  <div className="landing__text">
                    <h1>Over 28 Years of Excellence</h1>
                    <p>
                      {" "}
                      Welcome to the best institute for furthering your career
                    </p>
                  </div>
                </Col>
              </Row>
              <Row></Row>
              <Row></Row>
              {/* <Row className="">
                <Col></Col>
                <Col xs={10} lg={4}>
                  <Button onClick={handleApply} className={`m-2 ${styles.apply}`}>       Apply Now <ArrowForwardIcon /></Button>
                  <Button onClick={handleClick} className={` m-2 ${styles.contact}`}>Contact Us</Button>
                </Col>

                <Col></Col>
              </Row> */}
               <Row className="">
                <Col></Col>
                <Col xs={12} lg={5}>
                  <Button onClick={handleApply} className={`m-2 ${styles.apply}`}>       Apply Now </Button>
                  {/* <Button onClick={handleClick} className={` m-2 ${styles.contact}`}>Contact Us</Button> */}
                </Col>
                <Col xs={12} lg={5}>
                 
                </Col>
               

              </Row>
            </Container>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={7000} className={styles.carousel__item}>
        <div className={`${styles.main__container} `}>
          {/* <img
            className={`d-block h-100  ${styles.image}`}
            src="/images/landing/landing.jpg"
            alt="First slide"
          /> */}
          <div className={`${styles.overlay__image}`}>
            <Container className="p-1 p-sm-5 ">
              <Row >
                <Col lg={2} xs={1}></Col>
                <Col>
                  {" "}
                  <div className="landing__text">
                    <h1>Over 28 Years of Excellence</h1>
                    <p>
                      {" "}
                      Welcome to the best institute for furthering your career
                    </p>
                  </div>
                </Col>
              </Row>
              <Row></Row>
              <Row></Row>
              {/* <Row className="">
                <Col></Col>
                <Col xs={10} lg={4}>
                  <Button onClick={handleApply} className={`m-2 ${styles.apply}`}>       Apply Now <ArrowForwardIcon /></Button>
                  <Button onClick={handleClick} className={` m-2 ${styles.contact}`}>Contact Us</Button>
                </Col>

                <Col></Col>
              </Row> */}
               <Row className="">
                <Col></Col>
                <Col xs={12} lg={5}>
                  <Button onClick={handleApply} className={`m-2 ${styles.apply}`}>       Apply Now </Button>
                  {/* <Button onClick={handleClick} className={` m-2 ${styles.contact}`}>Contact Us</Button> */}
                </Col>
                <Col xs={12} lg={5}>
                 
                </Col>
               

              </Row>
            </Container>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={7000} className={styles.carousel__item}>
        <div className={`${styles.main__container} `}>
          {/* <img
            className={`d-block h-100  ${styles.image}`}
            src="/images/landing/landing.jpg"
            alt="First slide"
          /> */}
          <div className={`${styles.overlay__image}`}>
            <Container className="p-1 p-sm-5 ">
              <Row >
                <Col lg={2} xs={1}></Col>
                <Col>
                  {" "}
                  <div className="landing__text">
                    <h1>Over 28 Years of Excellence</h1>
                    <p>
                      {" "}
                      Welcome to the best institute for furthering your career
                    </p>
                  </div>
                </Col>
              </Row>
              <Row></Row>
              <Row></Row>
              {/* <Row className="">
                <Col></Col>
                <Col xs={10} lg={4}>
                  <Button onClick={handleApply} className={`m-2 ${styles.apply}`}>       Apply Now <ArrowForwardIcon /></Button>
                  <Button onClick={handleClick} className={` m-2 ${styles.contact}`}>Contact Us</Button>
                </Col>

                <Col></Col>
              </Row> */}
               <Row className="">
                <Col></Col>
                <Col xs={12} lg={5}>
                  <Button onClick={handleApply} className={`m-2 ${styles.apply}`}>       Apply Now </Button>
                  {/* <Button onClick={handleClick} className={` m-2 ${styles.contact}`}>Contact Us</Button> */}
                </Col>
                <Col xs={12} lg={5}>
                 
                </Col>
               

              </Row>
            </Container>
          </div>
        </div>
      </Carousel.Item>
     
    
    </Carousel>
    </>

  );
}


{/* <div className="">
                    <h1>Over 25 years of Excellence</h1>
                    <p>
                      {" "}
                      welcome to the best institute for furthering your career
                    </p>
                  </div> */}