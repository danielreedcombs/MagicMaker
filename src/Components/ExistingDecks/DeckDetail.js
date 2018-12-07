import React, {Component} from "react"
export default class DeckDetail extends Component{
   render(){
        const deckId = this.props.deckId
        const card =this.props.card.deckId
        console.log(card)
        console.log(deckId)
        if(card === deckId){
            return(
            <div key={this.props.card.id}>{this.props.card.card_name}{this.props.card.quantity}</div>
            )
        } else {
        return null;
        }}}