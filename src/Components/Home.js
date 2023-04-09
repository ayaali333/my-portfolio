import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Typical from 'react-typical';
import Lottie from "lottie-react";
import developer from "../developer.json"


export default function Home() {
  return (
    <div>
        <section className='banner'  id="home"> 
        <Container>
            <Row className="aligh-items-center">
                <Col  xs={12} md={6} xl={7}>
                    <span className='tagline'>Hello There This is Aya Ali </span>
                    <h1>I am a {' '}
                        <Typical 
                        className = 'loop'
                        loop = {Infinity}
                        wrapper ='b'
                        steps={[
                            'FRONT-END WEB DEVELOPER',
                              1000,
                           
                        ]}
                        /> 
                        <span className='txt-rotate'></span></h1>
                        <button onClick={() => console.log("Ayo")}> Let's connect<ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
               <div className='style'>
               <Lottie animationData={developer} loop={true}></Lottie>
               </div>
                </Col>
            </Row>
        </Container>

        </section>
    </div>
  )
}
