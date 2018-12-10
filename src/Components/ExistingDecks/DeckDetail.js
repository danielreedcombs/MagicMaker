import React, {Component} from "react"
import "./ExistingDecks.css"
export default class DeckDetail extends Component{
   render(){
        const deckId = this.props.deckId
        const card =this.props.card.deckId
        if(card === deckId){
            return(
            <div key={this.props.card.id} className="align">
            <h5>{this.props.card.card_name}</h5>  <h5 className="padding">quantity:</h5>  <h5>{this.props.card.quantity}</h5>
            </div>
            )
        } else {
        return null;
        }}}