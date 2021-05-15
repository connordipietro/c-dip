import { Jumbotron, Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-3 px-3">
      <Jumbotron fluid>
        <h3>Hello, world!</h3>
        <p>Based in Washington D.C. and open to relocation, I’m a Fire Fighter turned Software Student with a passion for technology and solving complex problems.</p>
        <p>Working with clunky and outdated technology in the firehouse inspired me to find a better way. My goal is to contribute towards a team that creates solutions that improves peoples' lives.</p>
        <p>React/Redux, Backbone, Handlebars, Node, Express, Mongo, Mocha, Swagger, Git.</p>
        <p>What’s next? AWS &amp; Swift.</p>
          <button className="btn btn-outline-secondary">Hire Me</button>
      </Jumbotron>
  </Container>
  );
};

export default About;