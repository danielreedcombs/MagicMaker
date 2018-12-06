import React, {Component} from "react"

export default class DeckComponent extends Component{

    render(){
        return(
            <div>
            <h1>{this.props.deck.name}</h1>
            <p>{sessionStorage.userName}</p>
            </div>
        )
    }

}