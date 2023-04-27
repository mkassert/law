import React from "react";
import { Navbar, Nav, Container, Row, Col, Button,NavDropdown,Image } from "react-bootstrap";

function MyNavbar() {
  return (
    <>
      <Container fluid className="bg-primary">
        <Container>
          <Row className="d-flex text-light align-items-center">
            <Col className="">
              +0120-4174500 | info@ipemgzb.ac.in 
            </Col>
            <Col className="text-end">
              <Button className="bg-warning text-dark">Contact US</Button>
            </Col>
          </Row>
        </Container>

      </Container>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <Image fluid='true' style={{maxHeight:'70px',maxWidth:'250px'}} src='/landing/logo.png' ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  );
}

export default MyNavbar;
