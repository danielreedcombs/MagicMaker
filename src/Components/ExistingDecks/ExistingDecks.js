import React, { Component } from "react"
import DeckComponent from "./DeckComponent"


export default class ExistingDecks extends Component {
    render() {
        console.log(this.props.decks)
            return (
                <div>
                    {this.props.decks.map(deck => (
                    <DeckComponent key={this.props.decks.id} decks= {this.props.decks} deck={deck} cards={this.props.cards} deleteDeck={this.props.deleteDeck}/>
                    ))}
                </div>

            )
        }

    }
