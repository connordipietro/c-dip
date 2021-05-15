import Toggle from './DarkModeToggle'

const Footer = () => {
  return (
    <div className="navbar fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h6>Social Links Will Go Here</h6>
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