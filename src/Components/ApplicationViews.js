// import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import NewDeck from "./NewDeck/NewDeck.js"
import ExistingDecks from "./ExistingDecks/ExistingDecks"
import Home from "../Components/HomePage/Home"
import NavBar from "./NavBar/NavBar"
import UserManager from "../apiHandler/UserManager"
export default class ApplicationView extends Component{
    state = {
        decks: [],
        cards:[],
        initialized:false
    }
    authenticate= () => {
  sessionStorage.setItem("userId", 1)
}

componentDidMount() {
    let id= sessionStorage.getItem("userId")
    let getDecks = UserManager.getDecks(id)
    let getCards =UserManager.getAllMyCards()
        Promise.all([getDecks, getCards]).then((fetch)=>{

            this.setState({
                decks: fetch[0],
                cards: fetch[1],
                initialized: true })

        });
        }


deleteDeck = (id, userId) => {
    UserManager.deletedeck(id)
    .then(()=>{UserManager.getDecks(userId)
    .then(data =>{this.setState({decks: data})})})

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
                    return <ExistingDecks {...props} user={this.getCurrentUser} cards={this.state.cards} decks={this.state.decks} deleteDeck={this.deleteDeck}/>}
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
