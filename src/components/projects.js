const Projects = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 mx-3 pt-4">
      <div className="col">
        <div className="card h-100">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="card-footer">
          <small className="font-weight-light">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="card-footer">
          <small className="font-weight-light">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 ">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">MERN CD Template</h5>
            <p className="card-text">
              A boilerplate MERN (MongoDb, Express, React, Node.js) fullstack template I created with detailed instructions for integrating continuous deployment from a single repository and project directory. Easily launch from development into production in a streamlined and easy to understand way.
            </p>
            <hr></hr>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>Check it out on <u><a href="https://github.com/connordipietro/mern-deployment-tamplate" target="_blank" rel="noreferrer noopener"> GitHub ↗</a></u>
              </div>
              <div><u><a href="https://evening-plains-16640.herokuapp.com/" target="_blank" rel="noreferrer noopener"> Live example ↗</a></u></div>
            </div>
          </div>
          <div className="card-footer">
            <small className="font-weight-light">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;