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
    .then(data =>{this.setState({decks: data})})}).then(()=> UserManager.deleteCards(id))

}

createDeck =(value) =>{
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
            )})).then(()=>
            console.log(this.state.postedDeck))
    }

postCards=(name, quantity,deckId) =>{
    let cardName = name
    let cardQuantity= quantity
    let cardDeckId= deckId
    let obj= {
        card_name: cardName,
        quantity: cardQuantity,
        deckId: cardDeckId

    }
    UserManager.postCard(obj).then(() => UserManager.getAllMyCards().then(newCards => this.setState({cards: newCards})))
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
                return <NewDeck {...props} user={this.getCurrentUser()} postedDeck={this.state.postedDeck} createDeck={this.createDeck} postCards={this.postCards} />
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
