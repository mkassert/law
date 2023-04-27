import React from "react";
import { Container, Row, Col ,Image} from "react-bootstrap";
import styles from "./About.module.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function VideoTour() {
  return (
    <>
      <Container fluid className={styles.video}>
        <Row className="py-3 ">
          <Col>
            <h2 className="fw-bold">Watch Campus Life Video Tour</h2>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h3>IPEM Group of Institutions | Enroll Now for Law Studies</h3>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
                <Image className={styles.video__btn} src='https://www.freepnglogos.com/uploads/play-button-png/index-media-cover-art-play-button-overlay-5.png' style={{height:"100px",}}></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VideoTour;
