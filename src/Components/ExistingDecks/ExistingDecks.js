import React, { Component } from "react"


export default class ExistingDecks extends Component {
state = {
    deck: ""
}

findDeck(){
    
    console.log(document.querySelector(".deckname").value)
}
    render(){
        return (
        <div>
        <input type="text" className= "deckname" placeholder="search for deck" />
        <button onClick={this.findDeck} > Find Deck </button>
        </div>
        )
    }
}
