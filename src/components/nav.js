import { Tabs, Tab } from 'react-bootstrap';
import About from './about';
import Projects from './projects';
import Contributions from './contributions'

const Nav = () => {
  return (
    <Tabs fill defaultActiveKey="home" id="tabs" className="">
      <Tab eventKey="home" title="About" id="tab-about">
        <About />
      </Tab>
      <Tab eventKey="projects" title="Projects" className="" id="tab-projects">
        <Projects />
      </Tab>
      <Tab eventKey="contributions" title="Contributions" id="tab-contributions">
        <Contributions />
      </Tab>
    </Tabs>
  );
};

export default Nav;

