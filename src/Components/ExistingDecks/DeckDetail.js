import React, {Component} from "react"
export default class DeckDetail extends Component{
   render(){
       const deck = this.props.deck.id
       const cards =this.props.cards
       return(
           <div key={this.props.card.id}>
             <div>
                {cards.map(card => {
                    console.log(card.deckId)
                    console.log(deck)
                    if (card.deckId === deck) {
                        return  <div>{this.props.card.card_name}{this.props.card.quantity}</div>;
                        } else {
                        return null;
                        }
                 })}
            </div>
        </div>
       )
    }}

    // return(
 //     <div>
 //        {this.props.cards.map(card => {
 //            if (card.deck_id === deck.id) {
 //                <div>{this.props.card.card_name}{th  s.props.card.quantity}</div>;
 //             } else {
 //                 return null;
 //             }
 //         })}
 // </div>
//  <div>{this.props.card.card_name}{this.props.card.quantity}</div>
// )

//     return(
//         <div>
//           <div>
//              {cards.map(card => {
//                  console.log(card.deck_id)
//                  if (card.deck_id === deck.id) {
//                      return  <div>{this.props.card.card_name}{this.props.card.quantity}</div>;
//                      } else {
//                      return null;
//                      }
//               })}
//          </div>
//      </div>
// )