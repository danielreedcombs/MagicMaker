import React, {Component} from "react"
import DeckDetail from "./DeckDetail"

export default class DeckComponent extends Component{
state= {}
    render(){

        let deckId= this.props.deck.id
        return(
            <div key={this.props.deck.id} className="card w-50">
                <div className="card-body">
                    <h3 className="card-title">{this.props.deck.name}</h3>
                        <div className="card-text">
                        {this.props.cards.map(card =>{
                            return  <DeckDetail cards={this.props.cards} card={card} deckId={deckId} decks={this.props.decks} />
                        })}
                            </div>
                        <button className="btn btn-primary" onClick={() => {console.log(this.props.cards)}} >edit</button>
                    <button className="btn btn-secondary" onClick={() => {this.props.deleteDeck(this.props.deck.id, sessionStorage.getItem("userId"))}}> delete </button>
                </div>
            </div>
        )
    }
}
