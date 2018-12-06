// import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import NewDeck from "./NewDeck/NewDeck.js"
import ExistingDecks from "./ExistingDecks/ExistingDecks"
import Home from "../Components/HomePage/Home"
import NavBar from "./NavBar/NavBar"
export default class ApplicationView extends Component{
    authenticate= () => {
  sessionStorage.setItem("userId", 1)
}


isAuthenticated = () => (sessionStorage.getItem("userId") !== null || localStorage.getItem("userId") !== null)

getCurrentUser = () => {
    const currentUser = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    return currentUser
}
render(){

        return(
            <React.Fragment>
                <NavBar />
                <br></br>
                <br></br>
                <Route path="/newDeck" render={(props) => {
                    if(this.isAuthenticated()) {
                return <NewDeck {...props} user={this.getCurrentUser()} />
                    }else {return <Redirect to= "/home" />}
                }} />
                <Route path="/existingDecks" render={ (props) => {
                    if(this.isAuthenticated()){
                    return <ExistingDecks {...props} user={this.getCurrentUser()} />}
                    else {return <Redirect to= "/home" />}
                }} />
                <Route path="/home" render={props => {
          return (
            <Home getAllUsers={this.getAllUsers} getCurrentUser={this.getCurrentUser} {...props} />)
        }} />
            </React.Fragment>
        )
    }

}
