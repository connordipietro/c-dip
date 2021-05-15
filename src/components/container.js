import { Jumbotron, Container, Tabs, Tab, Card, Button, Media, Navbar } from 'react-bootstrap'
import Projects from './projects'
import '../style.css'
import 'holderjs'


const App = () => {

  const renderNavBar = () => {
    return (
<Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example" className="myClass bg-light" >

  <Tab eventKey="home" title="About">
      <Container className="pt-5">
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
            <Button variant="primary">Hire Me</Button>
          </p>
        </Jumbotron>
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

  const renderFooter = () => {
    return (
 

<nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="container-fluid justify-content-center">
        <p class="navbar-brand">Social Links</p>
      </div>
    </nav>


 
      
    )
  }

  
  return (
    <div>
     <Jumbotron fluid className="bg-light">
  <Container className="pt-3 pb-3">
    <h1 className="display-6">Connor DiPietro</h1>
    <p className="lead mb-0">Software Developer</p>
  </Container>
</Jumbotron>
      <div>{renderNavBar()}</div>
      <div>{renderFooter()}</div>
    </div>
  );
};

export default App;