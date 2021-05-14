import { Jumbotron, Container, Tabs, Tab } from 'react-bootstrap'
import Projects from './projects'
import '../style.css'

const App = () => {

  const renderNavBar = () => {
    return (
<Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example" className="myClass">
  <Tab eventKey="home" title="About">
    <div className="container">
    <h1>Test</h1>
    </div>
  </Tab>
  <Tab eventKey="profile" title="Projects">
  <Projects />
  </Tab>
  <Tab eventKey="contributions" title="Contributions">
  <div className="container">
    <h1>Test</h1>
    </div>
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