import { Jumbotron, Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa'
import { IconContext } from "react-icons";
import { useState } from 'react';

const Header = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  if (showSuccess) {
    return (
      <Alert show={showSuccess} variant="dark">
        <Row>
         <Col>
          <Alert.Heading>Email Copied to Clipboard</Alert.Heading>
          <p>I copied my email address to your clipboard :)
          <br></br>
          connor.dipietro@gmail.com
          </p>
        </Col>
        <Col auto className="text-end">
          <Button onClick={() => setShowSuccess(false)} variant="outline-secondary"> X </Button>
        </Col>
      </Row>
    </Alert>
    )
  };

    if (showFailure) {
      return (
        <Alert show={showFailure} variant="dark">
          <Row>
            <Col>
              <Alert.Heading>Email Copied to Clipboard</Alert.Heading>
              <p>I copied my email address to your clipboard :)
              <br></br>
              connor.dipietro@gmail.com
              </p>
            </Col>
            <Col auto className="text-end">
              <Button onClick={() => setShowSuccess(false)} variant="outline-secondary"> X </Button>
            </Col>
          </Row>
        </Alert>
      )
    };
 
  const handleEmailClick = () => {
    navigator.clipboard.writeText("connor.dipietro@gmail.com")
    .then(() => setShowSuccess(true), () => setShowFailure(true));
  };

  return (
    <Jumbotron fluid className="">
      <Container className="pt-3 pb-3">
        <Row>
          <Col>
            <h1 className="display-6">Connor DiPietro</h1>
          </Col>
          <Col auto className="text-end">
            <IconContext.Provider value={{ size: "3em" }}>
              <div className="justift-content-center">
                <FaEnvelope onClick={() => handleEmailClick()}></FaEnvelope>
              </div>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
  </Jumbotron>
  );
};

export default Header;
