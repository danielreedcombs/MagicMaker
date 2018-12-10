import React, {Component} from "react"

import NewDeck from "./NewDeck";
export default class CardComponent extends Component{
   render(){
        const deckId = this.props.deckName.id
        const cardId =this.props.card.deckId
        if(Number(cardId) === Number(deckId)){
            return(
            <div key={this.props.card.id}>
            <h4>{this.props.card.card_name}</h4><h4> quantity:{this.props.card.quantity}</h4>
            </div>
            )
        } else {
        return null;
        }}}