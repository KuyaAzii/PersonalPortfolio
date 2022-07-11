import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/own-pic.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>About</h2>
                <h4 >Ace Polero, 22, from Basud, Camarines Norte, just graduated from Mabini Colleges Daet with a BS in Computer Science. While there, I learned a lot about technical troubleshooting in computer hardware and software, and a lot about developing programs and systems. I applied my skills in the industry as a freelance developer and IT technician, and I now have two years of expertise in my profession. Now I'm looking for opportunities to advance in my industry and broaden my knowledge.</h4>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
