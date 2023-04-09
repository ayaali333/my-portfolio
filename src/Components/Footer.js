import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
       
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="#a"><img src={navIcon1} alt="Icon" /></a>
            <a href="#a"><img src={navIcon2} alt="Icon" /></a>
            <a href="#a"><img src={navIcon3} alt="Icon" /></a>
          </div>
          <p className='copyright'>Copyright 2023@ Aya Ali</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
