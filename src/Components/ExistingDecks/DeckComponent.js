import React, {Component} from "react"
import DeckDetail from "./DeckDetail"
import UserManager from "../../apiHandler/UserManager"
export default class DeckComponent extends Component{
state= {
}
    render(){

        return(
            <div key={this.props.deck.id} className="card w-50">
                <div className="card-body">
                    <h3 className="card-title">{this.props.deck.name}</h3>
                        <div className="card-text">
                        {this.props.cards.map(card =>
                            <DeckDetail cards={this.props.cards} card={card} deck={this.props.deck} />)}
                            </div>
                        <button className="btn btn-primary" onClick={() => {console.log(this.props.cards)}} >edit</button>
                    <button className="btn btn-secondary" onClick={() => {this.props.deleteDeck(this.props.deck.id, sessionStorage.getItem("userId"))}}> delete </button>
                </div>
            </div>
        )
    }

}
