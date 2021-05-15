import { Tabs, Tab } from 'react-bootstrap';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const Nav = () => {
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
  );
};

export default Nav;

