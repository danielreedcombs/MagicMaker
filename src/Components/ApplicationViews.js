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
    if (id !== null) {
    this.loadDecks(id)
    }
    // let id= sessionStorage.getItem("userId")
    // let getDecks = UserManager.getDecks(id)
    // let getCards =UserManager.getAllMyCards()
    // let getAPICards=UserManager.getAPICards()
    // let getSideboardCards= UserManager.getSideboard()
    //     Promise.all([getDecks, getCards, getAPICards, getSideboardCards]).then((fetch)=>{

    //         this.setState({
    //             decks: fetch[0],
    //             cards: fetch[1],
    //             APICards:fetch[2],
    //             sideBoard: fetch[3],
    //             initialized: true
    //     })
    //     });
        }

loadDecks=(temp)=>{
    // let id= sessionStorage.getItem("userId")
    console.log("load decks")
    console.log("temp", temp)
    let getDecks = UserManager.getDecks(temp)
    let getCards =UserManager.getAllMyCards()
    let getAPICards=UserManager.getAPICards()
    let getSideboardCards= UserManager.getSideboard()
        Promise.all([getDecks, getCards, getAPICards, getSideboardCards]).then((fetch)=>{

            this.setState({
                decks: fetch[0],
                cards: fetch[1],
                APICards:fetch[2],
                sideBoard: fetch[3],
                initialized: true
        })
        });

}
deleteDeck = (id, userId) => {
    UserManager.deletedeck(id)
    .then(()=>{UserManager.getDecks(userId)
    .then(data =>{this.setState({decks: data})})}).then(()=> UserManager.deleteCards(id)).then(UserManager.getAllMyCards().then(newCards => {this.setState({cards: newCards})}).then(this.setState ({postedDeck: ""})).then(console.log(this.state.cards)))
}
// deleteDeckAndCards = deckID => {
//     // consider setting initialized state to false until the data comes back
//     // and also history.push to maindeck page

//     DecksManager.deleteDeck(deckID)
//       .then(allDecks => {
//         this.setState({
//           allDecks: allDecks,
//           initialized: false
//         });
//       })
//       .then(() => {
//         // run forEach over allCards - if the card is in the deck we're deleting, delete that card too
//         this.state.allCards.forEach(card => {
//           if (card.deckID === deckID) {
//             // console.log(card)
//             this.deleteCard(card.id);
//           }
//         });
//       })
//       .then(() => {
//         // and now get all the cards again
//         return CardManager.getAll().then(allCards => {
//           this.setState({
//             allCards: allCards,
//             initialized: true
//           });
//         });
//       });
//     //   ^ think I need to return a promise here for .then to work in deck detail (for history push)
//   };
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
//    splicedup= obj.card_name
// mtg.card.where({name: splicedup})
// .then(x =>{if( x !== undefined ||x !== null){
    UserManager.postCard(obj).then(() => UserManager.getAllMyCards().then(newCards => this.setState({cards: newCards})).then(alert("added a card to your deck!")))
    // } else { alert("card does not exist")}
// })
}
postSideboard= (obj) =>{
    UserManager.postSideboard(obj).then(()=>UserManager.getSideboard().then(newSideboard => this.setState({sideBoard: newSideboard})).then(console.log(this.state.sideboards)))
}

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
    UserManager.editCard(id, obj).then(()=> {UserManager.getAllMyCards().then(newCards => {this.setState({cards: newCards})})})
}
editSideboard=(id,obj) =>{
    UserManager.editSideboard(id,obj).then(()=>{UserManager.getSideboard().then(newSideboard => this.setState({sideBoard: newSideboard}))})
}


render(){
    console.log(this.state.APICards)

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
