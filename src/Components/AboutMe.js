import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import Lottie from "lottie-react";
import Butterfly from "../Butterfly.json"

export default function AboutMe() {
  return (
    <section className="AboutMe" id="About me">
    <Container>
      <Row className="align-items-center">

      <Col>
            
            <div className="" >
            <h2>About me </h2>
            
              <Row>
                <Col  className="px-1">
                    <h3>Hello World! I'm Aya Ali</h3>
                    <h5>I'm a Front-End Web Developer based out of Iraq. From Electronics Engineer to lines o code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user- friendly websites and applications.I'm excited to make the leap and continue refining my skills with the right company.</h5>
                </Col>
               
              </Row>
            
          </div>
      </Col>
        <Col>
          
        <div className='styles1'>
             <Lottie animationData={Butterfly} loop={true}  ></Lottie>
             </div>
            
        </Col>
    
      </Row>
    </Container>
  </section>
  )
}
