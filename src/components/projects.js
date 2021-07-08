const Projects = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 mx-3 pt-4">
      <div className="col">
        <div className="card">
          <div className="card-header"><h5>Mentor Matchr</h5></div>
          <div className="card-body">
            <p className="card-text">
            Mentor Matchr is a continuously deployed full-stack MERN app hosted on Heroku and MongoDB Cloud Atlas. This tool was created in 10 days and is designed to encourage software mentorship and to provide an ecosystem for software learning. Some of the new-to-me technologies implemented in this project were Socket.IO, Stripe, and Material-UI.
            <br></br>
            <br></br>
            Features include complex data filtering for match finding, individual mentor-mentee live chats with logs, a collaborative sandboxed JavaScript pair-programming text editor, an admin dashboard with user generated custom TTL site-wide nav banners, and more. 
            </p>
            <hr></hr>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>Check it out on <u><a href="https://github.com/connordipietro/mentor-matchr" target="_blank" rel="noreferrer noopener"> GitHub ↗</a></u>
              </div>
              <div><u><a href="http://mentor-matchr.herokuapp.com" target="_blank" rel="noreferrer noopener"> Deployed here ↗</a></u></div>
            </div>
            <hr></hr>
            <div><u><a href="https://bit.ly/mentor-matchr" target="_blank" rel="noreferrer noopener"> Video Demo ↗</a></u></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-header"><h5>Closr</h5></div>
          <div className="card-body">
            <p className="card-text">
              As Frontend Lead, I worked collaboratively with 6 classmates for 2 weeks to create a client relationship management app. 
              <br></br>
              <br></br>
              Users can add companies, generate deals, manage and track deal status and view metrics on a dashboard.
              Developed with agile methodologies using React/Redux, HTML/CSS/JS, Node, Express, MongoDB, and Mongoose.
            </p>
            <hr></hr>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>Check it out on <u><a href="https://github.com/connordipietro/closr" target="_blank" rel="noreferrer noopener"> GitHub ↗</a></u>
              </div>
              <div><u><a href="https://closr-app.herokuapp.com/" target="_blank" rel="noreferrer noopener"> Deployed here ↗</a></u></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-header"><h5>MERN CD Template</h5></div>
          <div className="card-body">
            <p className="card-text">
              A boilerplate MERN (MongoDb, Express, React, Node.js) fullstack template I created for integrating continuous deployment from a single repository and project directory. Easily launch from development into production in a streamlined and easy to understand way.
            </p>
            <hr></hr>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div>Check it out on <u><a href="https://github.com/connordipietro/mern-deployment-tamplate" target="_blank" rel="noreferrer noopener"> GitHub ↗</a></u>
              </div>
              <div><u><a href="https://evening-plains-16640.herokuapp.com/" target="_blank" rel="noreferrer noopener"> Deployed here ↗</a></u></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;