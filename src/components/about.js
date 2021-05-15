import { Jumbotron, Container, Button } from 'react-bootstrap'

const About = () => {
  return (
    <Container className="m-3 p-3">
      <Jumbotron>
        <h1>Hello, world!</h1>
        <br></br>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          <button className="btn btn-outline-secondary">Hire Me</button>
        </p>
      </Jumbotron>
  </Container>
  );
};

export default About;