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
        APICards:[],
        sideBoard:[],
        postedDeck: "",
        initialized:false
    }
    authenticate= () => {
  sessionStorage.setItem("userId", 1)
}

componentDidMount() {
    let id= sessionStorage.getItem("userId")
    let getDecks = UserManager.getDecks(id)
    let getCards =UserManager.getAllMyCards()
    let getAPICards=UserManager.getAPICards()
    let getSideboardCards= UserManager.getSideboard()
        Promise.all([getDecks, getCards, getAPICards, getSideboardCards]).then((fetch)=>{

            this.setState({
                decks: fetch[0],
                cards: fetch[1],
                APICards:fetch[2],
                sideboards: fetch[3],
                initialized: true
        })
        });
        }


deleteDeck = (id, userId) => {
    UserManager.deletedeck(id)
    .then(()=>{UserManager.getDecks(userId)
    .then(data =>{this.setState({decks: data})})}).then(()=> UserManager.deleteCards(id)).then(UserManager.getAllMyCards().then(newCards => {this.setState({cards: newCards})}).then(this.setState ({postedDeck: ""})).then(console.log(this.state.cards)))
}

createDeck=(value) =>{
    let deckName= value
    let user = sessionStorage.getItem("userId")
    let obj={
        name: deckName,
        user_id: user
    }
    UserManager.postDeck(obj)
    .then(deck => this.setState({postedDeck: deck}))
    .then(() => UserManager.getDecks(user).then(allDecks => {
        this.setState({decks: allDecks}
            )}))
    }

postCards= (obj) => {
UserManager.postCard(obj).then(() => UserManager.getAllMyCards().then(newCards => this.setState({cards: newCards})).then(alert("added a card to your deck!")))
}
postSideboard= (obj) =>{
    UserManager.postSideboard(obj).then(()=>UserManager.getSideboard().then(newSideboard => this.setState({sideboards: newSideboard})).then(console.log(this.state.sideboards)))
}

isAuthenticated = () => (sessionStorage.getItem("userId") !== null || localStorage.getItem("userId") !== null)

getCurrentUser = () => {
    const currentUser = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    return currentUser
}

deleteCard = (id) => {
    UserManager.deleteCard(id).then(()=> {UserManager.getAllMyCards().then(newCards => {this.setState({cards: newCards})})})
}
deleteSideboard = (id) => {
UserManager.deleteSideboard(id).then(()=>{UserManager.getSideboard().then(newSideboard => this.setState({sideboards:newSideboard}))})
}
editSubmit = (id,obj) => {
    UserManager.editCard(id, obj).then(()=> {UserManager.getAllMyCards().then(newCards => {this.setState({cards: newCards})})})
}
editSideboard=(id,obj) =>{
    UserManager.editSideboard(id,obj).then(()=>{UserManager.getSideboard().then(newSideboard => this.setState({sideboards: newSideboard}))})
}


render(){

        return(
            <React.Fragment>
                <NavBar />
                <br></br>
                <br></br>
                <Route path="/newDeck" render={(props) => {
                    if(this.isAuthenticated()) {
                return <NewDeck {...props} editSubmit={this.editSubmit} user={this.getCurrentUser()} deleteCard={this.deleteCard}
                 APICards={this.state.APICards} postedDeck={this.state.postedDeck} createDeck={this.createDeck}
                 postCards={this.postCards} cards={this.state.cards}
                 editSideboard={this.editSideboard} postSideboard={this.postSideboard} deleteSideboard={this.deleteSideboard}
                 getSideboard={this.getSideboard} sideboards={this.state.sideBoard}/>
                    }else {return <Redirect to= "/home" />}
                }} />
                <Route path="/existingDecks" render={ (props) => {
                    if(this.isAuthenticated()){
                    return <ExistingDecks {...props} editSubmit={this.editSubmit} user={this.getCurrentUser}
                    cards={this.state.cards} decks={this.state.decks}
                    deleteDeck={this.deleteDeck} deleteCard={this.deleteCard}
                    editSideboard={this.editSideboard} postSideboard={this.postSideboard} deleteSideboard={this.deleteSideboard}
                 getSideboard={this.getSideboard} sideboards={this.state.sideBoard} />}
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
