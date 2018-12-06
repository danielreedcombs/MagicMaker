import React, { Component } from "react"

export default class Login extends Component {

  render() {
    return (
      <React.Fragment>
        <div className={this.props.hideLoginForm ? "hide" : "bryans__class"}>
          <div className="login__form">
            <h2>Please sign in</h2>

            <label className="formLabel" htmlFor="inputEmail">
              Email address
            </label>
            <input className="formInput" onChange={this.props.handleFieldChange} type="email"
              id="name"
              placeholder="Email address"
              required="" autoFocus="" />

            <label className="formLabel" htmlFor="inputPassword">
              Password
            </label>
            <input className="formInput" onChange={this.props.handleFieldChange} type="password"
              id="loginPassword"
              placeholder="Password"
              required="" />
              <br/>
            <button className="Sign in" type="submit" onClick={() => {this.props.handleLogin()}}>
              Sign in
                </button>
            <button className="registerButton" type="submit" onClick={() => this.props.registration()}> Register </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
