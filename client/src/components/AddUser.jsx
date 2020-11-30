import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from './Header';

const regForm = {
  width: "60vw",
  fontSize: "small"
}
export default class AddUser extends React.Component {
  render() {

    return (
      <div style={regForm} className="container">
        <Header text ="Registration Form"/>
        <Container>
          <form>
            <div className="form-group row">
              <label htmlFor="fName" className="col-sm-2 col-form-label">First Name</label>
              <div className="col-sm-10">
                <input id="fName" type="text" className="form-control" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="lName" className="col-sm-2 col-form-label">Last Name</label>
              <div className="col-sm-10">
                <input id="lName" type="text" className="form-control" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input id="email" type="email" className="form-control" placeholder="example@email.com" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input id="password" type="password" className="form-control" placeholder="********" />
              </div>
            </div>

            <Button variant="primary btn-block col-md-4" type="submit">Submit</Button>
          </form>
        </Container>
      </div>
    )
  }
}
