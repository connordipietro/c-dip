import { Container, Row, Col, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className="container-fluid p-4">
      <div className="row m-2">
      <button className="btn btn-outline-secondary">Email</button>
      </div>
      <div className="row m-2">
      <button className="btn btn-outline-secondary">Call</button>
      </div>
    </div>

  )
}

export default Contact


/* 
 <div className="container-fluid p-4">
      <div className="row">
        <div className="col-7">
            <Button>Hey</Button>
        </div>
        <div className="custom-select col m-1">
          <Button>Hey</Button>
        </div>
  <Button>Hey</Button>
        <div className="custom-select col m-1">
        </div>
      </div>
    </div>
*/