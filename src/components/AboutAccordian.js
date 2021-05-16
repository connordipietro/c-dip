import { Accordion, Card } from 'react-bootstrap';

const AboutAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="1">
        About this site
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Card.Body className="pb-1">
          <p>Built with React and continuiously deployed on AWS Amplify. Check it out on <u><a href="https://github.com/connordipietro/c-dip" target="_blank" rel="noreferrer noopener"> GitHub ↗</a></u></p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  )
}

export default AboutAccordion;
