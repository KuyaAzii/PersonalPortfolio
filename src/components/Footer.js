import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from '../assets/img/nav1.svg';
import navIcon2 from '../assets/img/nav2.svg';
import navIcon3 from '../assets/img/nav3.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
     
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1>PORTFOLIO</h1>
          <h3>Contact Information</h3>
          <p>Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="blank"> acedcraige@gmail.com</a></p>
          <p>Phone Number:<a href="#" target="blank"> +63-915-2019-669</a></p>
          <p>Address:<a href="https://www.google.com/maps/dir/14.0792999,122.9550342/14.0691841,122.9644008/@14.0691731,122.9643776,84m/data=!3m1!1e3!4m5!4m4!1m1!4e1!1m0!3e0!5m1!1e4" target="blank"> Basud, Camarines Norte, Bicol, Philippines, 4608</a></p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
              <a href="https://www.linkedin.com/in/ace-polero-54377021a" target="blank"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/AziiiAceeeeeeeeee" target="blank"><img src={navIcon2} alt="" /></a>
              <a href="https://github.com/KuyaAzii" target="blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved @ACE POLERO</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
