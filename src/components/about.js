import { Jumbotron, Container } from 'react-bootstrap';
import AboutAccordion from './AboutAccordian'
import Me from '../media/me.jpg'
const About = () => {
  return (
    <Container className="my-3 px-3 pb-5">
      <Jumbotron fluid>
        <p className="lead">Hello, world!</p>
        <p>Based in Washington D.C. and open to relocation, I am a Fire Fighter turned Software Engineering Student with a passion for technology and solving complex problems.</p>
        <p>Working with unresponsive and outdated digital tools in the firehouse inspired me to find a better way. My goal is to work with a team and to create meaningful products that better people's lives.</p>
        <div className="row row-cols-1 row-cols-md-2 g-4 pb-5 mx-3 pt-4">
          <div className="col">
            <AboutAccordion></AboutAccordion>
          </div>
          <div className="col text-center">
            <img width={250} height={250} className="mr-3" src={Me} alt="Generic placeholder"/>
          </div>
        </div>
      </Jumbotron>
  </Container>
  );
};

export default About;