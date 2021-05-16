import Toggle from './DarkModeToggle'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si'
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="navbar fixed-bottom">
      <div className="container">
        <div className="row">
        <div className="col">
            <a href="mailto:connor.dipietro.com">
              <IconContext.Provider value={{ size: "1.75em" }}>
                <AiOutlineMail></AiOutlineMail>
              </IconContext.Provider>
            </a>
          </div>
          <div className="col">
            <a href="tel:240-405-2822">
              <IconContext.Provider value={{ size: "1.75em" }}>
                <AiOutlinePhone></AiOutlinePhone>
              </IconContext.Provider>
            </a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/in/connor-dipietro-77512b20b/">
              <IconContext.Provider value={{ size: "1.75em" }}>
                <AiOutlineLinkedin></AiOutlineLinkedin>
              </IconContext.Provider>
            </a>
          </div>
          <div className="col">
            <a href="https://github.com/connordipietro">
              <IconContext.Provider value={{ size: "1.75em" }}>
                <AiOutlineGithub></AiOutlineGithub>
              </IconContext.Provider>
            </a>
          </div>
          <div className="col">
            <a href="https://www.codewars.com/users/connordipietro">
              <IconContext.Provider value={{ size: "1.6em" }}>
                <SiCodewars></SiCodewars>
              </IconContext.Provider>
            </a>
          </div>
        </div>
        <div className="col-md text-end">
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Footer