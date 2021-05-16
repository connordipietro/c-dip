import { Jumbotron, Container } from 'react-bootstrap';
import AboutAccordion from './AboutAccordian'

const About = () => {
  return (
    <Container className="my-3 px-3 pb-5">
      <Jumbotron fluid>
        <p className="lead">Hello, world!</p>
        <p>Based in Washington D.C. and open to relocation, I am a Fire Fighter turned Software Engineering Student with a passion for technology and solving complex problems.</p>
        <p>Working with unresponsive and outdated digital tools in the firehouse inspired me to find a better way. My goal is to work with a team and to create meaningful products that better people's lives.</p>
        <p>React/Redux, Backbone, Handlebars, Node, Express, Mongo, Mocha, Swagger, Git.</p>
        <p>What’s next? AWS &amp; Swift.</p>
        <AboutAccordion></AboutAccordion>
      </Jumbotron>
  </Container>
  );
};

export default About;