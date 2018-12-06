import React, { Component } from "react"
import UserManager from "../../apiHandler/UserManager"
import Login from "../Login/Login"

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
        UserManager.post(user).then(()=>{
            this.loginUser()
        })
        .then(() => console.log(user))

    }

    loginUser(){
    fetch(`http://localhost:8088/users/?name=${this.state.name}&password=${this.state.loginPassword}`)        .then(x => x.json())
    .then(returns => {
        console.log(returns)

      if (returns.length < 1) {
        alert("Your email or Password is wrong")
      } else if (null === null) {
        sessionStorage.setItem(
          "userId", returns[0].id
        )
        this.setState({
          currentUser: sessionStorage.getItem("userId")
        }, console.log(this.state.currentUser))
        this.props.history.push("/")

      } else {
        localStorage.setItem(
          "userId", returns[0].id
        )
        this.setState({
          currentUser: localStorage.getItem("userId")
        }, console.log(this.state.currentUser))
        this.props.history.push("/")
      }
    })
    }
    // Update state whenever an input field is edited
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

  // Handle register for new user
  registration = (e) => {

    if (this.state.name === "" || this.state.loginPassword === "") {
      alert("No Entry Found")
    } else {
        fetch(`http://localhost:8088/users/?name=${this.state.name}&password=${this.state.loginPassword}`)
        .then(x => x.json())
        .then((returns) => {
            console.log(returns)
          if (returns.length > 0) {
            alert("That email is already. Please use another email")
          } else {
            this.newUser()
          }
        })
  }
}

  //registion functions, cunstructing a new user and posting it to the database

  render() {
    return (
      <React.Fragment>
        <Login handleLogin={this.handleLogin} handleFieldChange={this.handleFieldChange} hideLoginForm={this.hideLoginForm} hideLoginForm={this.state.hideLoginForm} registration={this.registration}/>
      </React.Fragment>
    )
  }
}
