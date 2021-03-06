import React, { Component } from "react"
import UserManager from "../../apiHandler/UserManager"
import Login from "../Login/Login"
import "./Home.css"

export default class Home extends Component {
  state = {
    name: "",
    loginPassword: "",
    hideLoginForm: false,
    currentUser: ""
  }

  newUser = () => {
    const user = {
      name: this.state.name,
      password: this.state.loginPassword,
    }
    UserManager.post(user).then(() => {
      this.loginUser()
    })

  }

  loginUser() {
    fetch(`http://localhost:8088/users/?name=${this.state.name}&password=${this.state.loginPassword}`)
      .then(x => x.json())
      .then(returns => {
        if (returns.length < 1) {
          alert("Your email or Password is wrong")
        }
        else if (returns.length === 1) {
        sessionStorage.setItem(
          "userId", returns[0].id,
          "userName", returns[0].name
        )
        this.props.loadDecks(returns[0].id)
        this.setState({
          currentUser: sessionStorage.getItem("userId")
        })
        this.props.history.push("/existingDecks")
      }
    })
}
handleFieldChange = (evt) => {
  const stateToChange = {}
  stateToChange[evt.target.id] = evt.target.value
  this.setState(stateToChange)
}

handleLogin = (e) => {
  if (this.state.name === "" || this.state.loginPassword === "") {
    alert("Please fill out form")
  }
  else {
    this.loginUser()
  }
}
hideLoginForm = () => {
  const currentState = this.state.hideLoginForm;
  this.setState({ hideLoginForm: !currentState });
};
registration = (e) => {

  if (this.state.name === "" || this.state.loginPassword === "") {
    alert("No Entry Found")
  } else {
    fetch(`http://localhost:8088/users/?name=${this.state.name}&password=${this.state.loginPassword}`)
      .then(x => x.json())
      .then((returns) => {
        if (returns.length > 0) {
          alert("That email is already. Please use another email")
        } else {
          this.newUser()
        }
      })
  }
}
render() {
  return (
    <React.Fragment>
      <Login handleLogin={this.handleLogin} handleFieldChange={this.handleFieldChange} hideLoginForm={this.state.hideLoginForm} registration={this.registration} />
    </React.Fragment>
  )
}
}
