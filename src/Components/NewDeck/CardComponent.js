import React, {Component} from "react"

import NewDeck from "./NewDeck";
export default class CardComponent extends Component{
   render(){
        const deckId = this.props.deckName.id
        const cardId =this.props.card.deckId
        if(Number(cardId) === Number(deckId)){
            return(
            <div key={this.props.card.id}>
            <div>{this.props.card.card_name}{this.props.card.quantity}</div>
            </div>
            )
        } else {
        return null;
        }}}