import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare } from "@fortawesome/free-brands-svg-icons"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faBootstrap } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faWordpress } from "@fortawesome/free-brands-svg-icons"
import { faFigma } from "@fortawesome/free-brands-svg-icons"


export default function Skills() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I can use this tools</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <FontAwesomeIcon icon={faJsSquare}  flip className='fa-5x fw-lighter' style={{color: '#FFD43B',}}/>
                                <h5> javaScript</h5>
                            </div>
                            <div className="item">
                            <FontAwesomeIcon icon={faHtml5}  flip className='fa-5x fw-lighter' style={{color: '#ED5B1D',}}/>

                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                            <FontAwesomeIcon icon={faReact}  flip className='fa-5x fw-lighter' style={{color: '#146EBE',}}/>

                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                            <FontAwesomeIcon icon={faBootstrap}  flip className='fa-5x' style={{color: '#9a23d1',}} />

                                <h5>Bootstrap</h5>
                                
                            </div>
                            <div className="item">
                            <FontAwesomeIcon icon={faCss3}  flip className='fa-5x fw-lighter' style={{color: '#146EBE',}}/>

                                <h5>Css</h5>
                                
                            </div>
                            <div className="item">
                            <FontAwesomeIcon icon={faWordpress}  flip className='fa-5x fw-lighter' style={{color: '#146EBE',}}/>

                                <h5>Wordpress</h5>
                                
                            </div>
                            <div className="item">
                            <FontAwesomeIcon icon={faFigma}  flip className='fa-5x fw-lighter' style={{color: '#BE4692',}}/>

                                <h5>Figma</h5>
                                
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left"  alt="Image" src = {colorSharp} />
    </section>
      )
}
