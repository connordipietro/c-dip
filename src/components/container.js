import { Jumbotron, Container, Tabs, Tab } from 'react-bootstrap'
import Projects from './projects'
import About from './about'
import Footer from './footer'
import Contact from './contact'
import '../style.css'
import 'holderjs'

const App = () => {
  const renderNavBar = () => {
    return (
      <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example" className="myClass bg-light">
        <Tab eventKey="home" title="About">
          <About />
        </Tab>

          <Tab eventKey="profile" title="Projects">
            <Projects />
          </Tab>

          <Tab eventKey="contributions" title="Contributions">
            <Projects />
          </Tab>

          <Tab eventKey="contact" title="Contact">
            <Contact />
          </Tab>
      </Tabs>
    )
  };

  return (
    <div>
      <Jumbotron fluid className="bg-light">
        <Container className="p-3">
          <h1 className="display-6">Connor DiPietro</h1>
          <p className="lead mb-0">Software Developer</p>
        </Container>
      </Jumbotron>
      <div>{renderNavBar()}</div>
      <Footer />
    </div>
  );
};

export default App;