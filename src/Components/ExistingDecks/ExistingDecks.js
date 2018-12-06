import React, { Component } from "react"
import CardData from "../../apiHandler/CardData"
import DeckComponent from "./DeckComponent"

export default class ExistingDecks extends Component {
    state = {
        decks: [],
        initialized:false
    }
    componentDidMount() {
        console.log(CardData)
        let id= sessionStorage.getItem("userId")
        let getDecks = CardData.getAll(id).then((allDecks)=>{
            this.setState({decks: allDecks})
            Promise.all([getDecks]).then(()=>{
                console.log(this.state)
                this.setState({ initialized: true })
                console.log(this.state)
            });
            });
    }




    render() {
        if(this.state.initialized){
            return (
                <div>
                    {this.state.decks.map(deck => (
                    <DeckComponent decks= {this.state.decks} deck={deck}/>
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
