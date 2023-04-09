import { Container, Row ,Col} from 'react-bootstrap';
import Lottie from "lottie-react";
import Message from "../Message.json"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {
  
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ov0or9i', 'template_y38bsqs', form.current, 'f9mMLi6IaDSmWo7L8')
          .then((result) => {
              console.log(result.text);
              alert("your message sent successfully.")
              e.target.reset()
          }, (error) => {
              console.log(error.text);
              alert("Something went wrong, please try again later.")
          });
      };
      
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            
          <div className='styles'>
               <Lottie animationData={Message} loop={true}  ></Lottie>
               </div>
              
          </Col>
          <Col size={12} md={6}>
              
                <div className="" >
                <h2>Get In Touch</h2>
                <form   ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Full Name" name = "user_name" />
                    </Col>
                 
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"   placeholder="Email Address" name="user_email" />
                    </Col>
                  
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" name = "message"></textarea>
                      <button type="submit"><span>Send Email</span></button>
                    </Col>
                   
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
