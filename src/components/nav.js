import { Tabs, Tab } from 'react-bootstrap';
import About from './about';
import Projects from './projects';
import Contributions from './contributions'

const Nav = () => {
  return (
    <Tabs fill defaultActiveKey="home" id="tab">
      <Tab eventKey="home" title="About">
        <About />
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <Projects />
      </Tab>
      <Tab eventKey="contributions" title="Contributions">
        <Contributions />
      </Tab>
    </Tabs>
  );
};

export default Nav;

