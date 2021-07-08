import { Accordion, Card } from 'react-bootstrap';
import resume from '../Documents/resume.pdf'

const AboutAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
        <Card className="acord-btm">
      <Accordion.Toggle as={Card.Header} eventKey="1" className="acord-btm">
        Skills
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Card.Body  className="pb-1 acord-btm">
        <p>Front End: React/Redux, Backbone, Bootstrap, Handlebars, ES6, HTML5, CSS3</p>
        <hr></hr>
        <p>Back End: Node, Express, Mongo/Mongoose, Auth, Swagger</p>
        <hr></hr>
        <p>Misc: Mocha, Chai, Git</p>
        <hr></hr>
        <p>Student of <u><a href="https://parsity.io/" target="_blank" rel="noreferrer noopener"> Parsity ↗</a></u></p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card className="square acord-top">
      <Accordion.Toggle as={Card.Header} eventKey="2" className="square acord-top">
        Resume
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2">
        <Card.Body className="pb-1 acord-btm">
        <u><a href ={resume} target ="_blank" rel="noreferrer noopener" download>Download PDF ↗</a></u>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card className="square">
      <Accordion.Toggle as={Card.Header} eventKey="3" className="square">
        About this site
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="3">
        <Card.Body className="pb-1 square">
          <p>Built with React, stylized with Bootstrap, and continuiously deployed via AWS Amplify, Certificate Manager, &amp; Route 53.</p> <hr></hr><p>Check it out on <u>
            <a href="https://github.com/connordipietro/c-dip" target="_blank" rel="noreferrer noopener"> GitHub ↗</a></u></p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card className="acord-top">
      <Accordion.Toggle as={Card.Header} eventKey="4" className="acord-top">
        What's next
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="4" className="acord-top">
        <Card.Body className="pb-1 acord-top">
        <p>DS&amp;A, Swift, AWS</p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>

  


  )
}

export default AboutAccordion;
