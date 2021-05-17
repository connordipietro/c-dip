import { Accordion, Card } from 'react-bootstrap';

const AboutAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
        <Card>
      <Accordion.Toggle as={Card.Header} eventKey="1">
        Skills
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
        <p>Front End: React/Redux, Backbone, Handlebars, ES6, HTML5, CSS3</p>
        <hr></hr>
        <p>Back End: Node, Express, Mongo/Mongoose, Auth, Swagger</p>
        <hr></hr>
        <p>Misc: Mocha, Chai, Git</p>
        <hr></hr>
        <p>Student of <u><a href="https://parsity.io/" target="_blank" rel="noreferrer noopener"> Parsity ↗</a></u></p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="2">
        Resume
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2">
        <Card.Body>
        <p>Download</p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="3">
        About this site
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="3">
        <Card.Body>
          <p>Built with React and continuiously deployed via AWS Amplify, Certificate Manager, &amp; Route 53.</p> <hr></hr><p>Check it out on <u>
            <a href="https://github.com/connordipietro/c-dip" target="_blank" rel="noreferrer noopener"> GitHub ↗</a></u></p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="4">
        What's next
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="4">
        <Card.Body className="pb-1">
        <p>AWS &amp; Swift!</p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>

  


  )
}

export default AboutAccordion;
