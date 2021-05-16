import { Jumbotron, Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { useState } from 'react';

import { AiOutlineMail } from 'react-icons/ai';

const Header = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  if (showSuccess) {
    return (
      <Alert show={showSuccess} variant="dark">
        <Row>
          <Col>
            <Alert.Heading><h6>Copied! 📎 </h6></Alert.Heading>
            <p> connor.dipietro@gmail.com</p>
          </Col>
          <Col className="text-end">
            <Button onClick={() => setShowSuccess(false)} variant="outline-secondary"> X </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>To open a new email with your default email client, click <u><a href="mailto:connor.dipietro.com">here</a></u></p>
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
            <Alert.Heading><h6>Email me!</h6></Alert.Heading>
            <p> 📬 connor.dipietro@gmail.com</p>
          </Col>
          <Col className="text-end">
            <button className="btn btn-sm btn-secondary" onClick={() => setShowFailure(false)} variant="outline-secondary"> X </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>To open a new email with your default email client, click <u><a href="mailto:connor.dipietro.com">here</a></u></p>
          </Col>
      </Row>
    </Alert>
    )
  }
 
  const handleEmailClick = () => {
    navigator.clipboard.writeText("connor.dipietro@gmail.com")
    .then(() => setShowSuccess(true), () => setShowFailure(true)
    )
  };

  return (
    <Jumbotron fluid>
      <Container className="pt-3 pb-3">
        <Row>
          <Col>
          <h1 className="display-6">Connor DiPietro</h1>
          </Col>
          <Col className="text-end">
            <IconContext.Provider value={{ size: "3em" }}>
              <div className="justift-content-center">
                <AiOutlineMail onClick={() => handleEmailClick()}></AiOutlineMail>
              </div>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
  </Jumbotron>
  );
};

export default Header;


