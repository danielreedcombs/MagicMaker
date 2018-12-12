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
        sideBoard:[],
        postedDeck: "",
        initialized:false
    }
    authenticate= () => {
  sessionStorage.setItem("userId", 1)
}

componentDidMount() {
    let id= sessionStorage.getItem("userId")
    if (id !== null) {
    this.loadDecks(id)
    }
}

loadDecks=(temp)=>{
    let getDecks = UserManager.getDecks(temp)
    let getCards =UserManager.getAllMyCards()
    let getSideboardCards= UserManager.getSideboard()
        Promise.all([getDecks, getCards, getSideboardCards]).then((fetch)=>{

            this.setState({
                decks: fetch[0],
                cards: fetch[1],
                sideBoard: fetch[2],
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
    const mtg = require('mtgsdk')


mtg.card.where({name: obj.card_name})
.then(x =>{if( x.length !== 0){
    UserManager.postCard(obj).then(() => UserManager.getAllMyCards().then(newCards => this.setState({cards: newCards})).then(alert("added a card to your deck!")))
    } else { alert("card does not exist")}
})
}
postSideboard= (obj) =>{
    const mtg = require('mtgsdk')


mtg.card.where({name: obj.card_name})
.then(x =>{if( x.length !== 0){
    UserManager.postSideboard(obj).then(()=>UserManager.getSideboard().then(newSideboard => this.setState({sideBoard: newSideboard})).then(console.log(this.state.sideboards)))
} else { alert("card does not exist")}
})}

isAuthenticated = () => (sessionStorage.getItem("userId") !== null)

getCurrentUser = () => {
    const currentUser = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    return currentUser
}

deleteCard = (id) => {
    UserManager.deleteCard(id).then(()=> {UserManager.getAllMyCards().then(newCards => {this.setState({cards: newCards})})})
}
deleteSideboard = (id) => {
UserManager.deleteSideboard(id).then(()=>{UserManager.getSideboard().then(newSideboard => this.setState({sideBoard:newSideboard}))})
}
editSubmit = (id,obj) => {
    const mtg = require('mtgsdk')


mtg.card.where({name: obj.card_name})
.then(x =>{if( x.length !== 0){
    UserManager.editCard(id, obj).then(()=> {UserManager.getAllMyCards().then(newCards => {this.setState({cards: newCards})})})
} else { alert("card does not exist")}
})}

editSideboard=(id,obj) =>{
    const mtg = require('mtgsdk')


mtg.card.where({name: obj.card_name})
.then(x =>{if( x.length !== 0){
    UserManager.editSideboard(id,obj).then(()=>{UserManager.getSideboard().then(newSideboard => this.setState({sideBoard: newSideboard}))})
} else { alert("card does not exist")}
})}


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
            <Home loadDecks={this.loadDecks} getAllUsers={this.getAllUsers} getCurrentUser={this.getCurrentUser} {...props} />)
        }} />
            </React.Fragment>
        )
    }

}
