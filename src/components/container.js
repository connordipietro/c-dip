import { Jumbotron, Container, Tabs, Tab, Card, Button, Media } from 'react-bootstrap'
import Projects from './projects'
import '../style.css'
import 'holderjs'


const App = () => {

  const renderNavBar = () => {
    return (
<Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example" className="myClass">

  <Tab eventKey="home" title="About" className="mt-5">


<Container>
  <h1>Hi</h1>
</Container>



  



  </Tab>
  <Tab eventKey="profile" title="Projects">
  <Projects />
  </Tab>
  <Tab eventKey="contributions" title="Contributions">
  <Projects />
  </Tab>
  <Tab eventKey="contact" title="Contact">
  <div className="container">
    <h1>Test</h1>
    </div>
  </Tab>
</Tabs>
    )
  }

  
  return (
    <div>
     <Jumbotron fluid>
  <Container>
    <h1 className="display-6">Connor DiPietro</h1>
    <p className="lead">
     Software Developer.
    </p>
  </Container>
</Jumbotron>
      <div>{renderNavBar()}</div>
    </div>
  );
};

export default App;