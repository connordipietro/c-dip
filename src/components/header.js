import { Jumbotron, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Jumbotron fluid className="bg-light">
    <Container className="pt-3 pb-3">
      <h1 className="display-6">Connor DiPietro</h1>
      <p className="lead mb-0">Software Developer</p>
    </Container>
  </Jumbotron>
  );
};

export default Header;
