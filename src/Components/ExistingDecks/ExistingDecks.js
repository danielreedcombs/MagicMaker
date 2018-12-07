import React, { Component } from "react"
import DeckComponent from "./DeckComponent"
import UserManager from "../../apiHandler/UserManager"


export default class ExistingDecks extends Component {
    state = {
        decks: [],
        cards:[],
        initialized:false
    }
    componentDidMount() {
        let id= sessionStorage.getItem("userId")
        let getDecks = UserManager.getDecks(id).then((allDecks)=>{
            this.setState({decks: allDecks})
        let getCards =UserManager.getAllMyCards().then(allCards =>{
            this.setState({cards: allCards})
        })
            Promise.all([getDecks, getCards]).then(()=>{
                this.setState({ initialized: true })
            });
            });
    }

    deleteDeck = (id, userId) => {
        UserManager.deletedeck(id)
        .then(()=>{UserManager.getDecks(userId)
        .then(data =>{this.setState({decks: data})})})

    }



    render() {
        if(this.state.initialized){
            return (
                <div>
                    {this.state.decks.map(deck => (
                    <DeckComponent decks= {this.state.decks} deck={deck} cards={this.state.cards} deleteDeck={this.deleteDeck}/>
                    ))}
                </div>
            )

        } else {
            return(
                <div>
                    <h1>loading </h1>
                </div>
            )
        }

    }
}
