

import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button,} from 'reactstrap';
import "./login.css"
class Login extends Component {
  render() {
    return (
      <Container className=" login loginsize">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input className="formInput" onChange={this.props.handleFieldChange}
                type="email"
                name="email"
                id="name"
                required = ""
                autoFocus=""
                placeholder="userName"
                />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input onChange={this.props.handleFieldChange}
              type="password"
              id="loginPassword"
              placeholder="Password"
              required=""
                />
            </FormGroup>
          </Col>
          <Button className="Sign in" type="submit" onClick={() => {this.props.handleLogin()}}>Submit</Button>
          <Button className="registerButton" type="submit" onClick={() => this.props.registration()}> Register</Button>
        </Form>
      </Container>
    );
  }
}

export default Login