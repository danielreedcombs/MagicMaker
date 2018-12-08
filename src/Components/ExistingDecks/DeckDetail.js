import React, {Component} from "react"
export default class DeckDetail extends Component{
   render(){
        const deckId = this.props.deckId
        const card =this.props.card.deckId
        if(card === deckId){
            return(
            <div key={this.props.card.id}>
            <div>{this.props.card.card_name}{this.props.card.quantity}</div>
            </div>
            )
        } else {
        return null;
        }}}