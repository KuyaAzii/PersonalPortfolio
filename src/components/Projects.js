import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pyAna from "../assets/img/pyAna.png";
import pyflask from "../assets/img/pyflask.png";
import pyInter from "../assets/img/pyInter.png";
import pyStat from "../assets/img/pyStat.png";
import pyvisua from "../assets/img/pyvisua.png";
import passjava from "../assets/img/passjava.png";
import DPG from "../assets/img/DPG.png";
import Exibit from "../assets/img/Exibit.png";
import JavaFoundation from "../assets/img/JavaFoundation.png";
import BestJava from "../assets/img/BestJava.png";
import BestThesis from "../assets/img/BestThesis.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Credentials = [
    {
      title: "MC-CCS Most Innovative Senior Project 2022",
      description: "Improving MC-CCS Health Declaration Transaction Management Using Face Recognition Technology",
      imgUrl: BestThesis,
    },
    {
      title: "MC-CCS ICT Expo 2022",
      description: "1st Place in ICT Solution Exhibitor MC-CCS Face 'Recognition System'",
      imgUrl: Exibit,
    },
    {
      title: "DICT-ICT007 Data Privacy - Good Governance",
      description: "Completion of training workshop of DICT (MACH)",
      imgUrl: DPG,
    },
    {
      title: "Programming for Intermediate Users Using Python",
      description: "Completion of training workshop of DICT (MACH)",
      imgUrl: pyInter,
    },
    {
      title: "Build Python Web Apps with Flask",
      description: "Completion of training workshop of DICT (MACH)",
      imgUrl: pyflask,
    },
    {
      title: "Analyze Data with Python",
      description: "Completion of training workshop of DICT (MACH)",
      imgUrl: pyAna,
    },
    {
      title: "Learn Basic Statistics with Python",
      description: "Completion of training workshop of DICT (MACH)",
      imgUrl: pyStat,
    },
    {
      title: "Visualize Data with Python",
      description: "Completion of training workshop of DICT (MACH)",
      imgUrl: pyvisua,
    },
    {
      title: "Oracle Academy",
      description: "Successfully Passing the Oracle Academy ",
      imgUrl: JavaFoundation,
    },
    {
      title: "Oracle Academy",
      description: "Satisfactory Completion of All Coursework and Training",
      imgUrl: passjava,
    },
    {
      title: "Java Programming",
      description: "Best In Java Programming in College of Computer Studies of Mabini Colleges Year 2019-2020",
      imgUrl: BestJava,
    },

  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Credentials</h2>
                <p>A qualification, achievement, personal quality, or aspect of a person's background, typically when used to indicate that they are suitable for something</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-=5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Certificate</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <br></br>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Credentials.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p> No Files Found or Not Available.</p>
  
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Bachelor of Science in Computer Science <br></br> <a href="https://mabinicolleges.edu.ph" target="blank"> Mabini Colleges INC.</a> Daet, Camarines Norte</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
