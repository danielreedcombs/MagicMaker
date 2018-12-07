import React, { Component } from "react"
import DeckComponent from "./DeckComponent"
import UserManager from "../../apiHandler/UserManager"


export default class ExistingDecks extends Component {
    // state = {
    //     decks: [],
    //     cards:[],
    //     initialized:false
    // }
    // componentDidMount() {
    //     let id= sessionStorage.getItem("userId")
    //     let getDecks = UserManager.getDecks(id).then((allDecks)=>{
    //         this.setState({decks: allDecks})
    //     let getCards =UserManager.getAllMyCards().then(allCards =>{
    //         this.setState({cards: allCards})
    //     })
    //         Promise.all([getDecks, getCards]).then(()=>{
    //             this.setState({ initialized: true })
    //         });
    //         });
    // }

    // deleteDeck = (id, userId) => {
    //     UserManager.deletedeck(id)
    //     .then(()=>{UserManager.getDecks(userId)
    //     .then(data =>{this.setState({decks: data})})})

    // }



    render() {
        // if(this.props.initialized){
            return (
                <div>
                    {this.props.decks.map(deck => (
                    <DeckComponent decks= {this.props.decks} deck={deck} cards={this.props.cards} deleteDeck={this.props.deleteDeck}/>
                    ))}
                </div>
            // )

        // } else {
        //     return(
        //         <div>
        //             <h1>loading </h1>
        //         </div>
            )
        }

    }
// }