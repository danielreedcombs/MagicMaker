

import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input className="formInput" className="formInput" onChange={this.props.handleFieldChange}
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

























// import React, { Component } from "react"

// export default class Login extends Component {

  //   render() {
    //     return (
      //       <React.Fragment>
      //         <div className={this.props.hideLoginForm ? "hide" : "bryans__class"}>
      //           <div className="login__form">
      //             <h2>Please sign in</h2>

      //             <input className="formInput" onChange={this.props.handleFieldChange} type="email"
      //               id="name"
      //               placeholder="Email address"
      //               required="" autoFocus="" />
      //             <label className="formLabel" htmlFor="inputEmail">
      //               Email address
      //             </label>

      //             <label className="formLabel" htmlFor="inputPassword">
      //               Password
      //             </label>
      //             <input className="formInput" onChange={this.props.handleFieldChange} type="password"
      //               id="loginPassword"
      //               placeholder="Password"
      //               required="" />
//               <br/>
//             <button className="Sign in" type="submit" onClick={() => {this.props.handleLogin()}}>
//               Sign in
//                 </button>
//             <button className="registerButton" type="submit" onClick={() => this.props.registration()}> Register </button>
//           </div>
//         </div>
//       </React.Fragment>
//     )
//   }
// }
