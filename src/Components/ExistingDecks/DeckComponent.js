import React, {Component} from "react"
import DeckDetail from "./DeckDetail"
export default class DeckComponent extends Component{
state= {
initialized: false,
}
    render(){

        return(
<div key={this.props.deck.id} className="card w-50">
  <div className="card-body">
    <h3 className="card-title">{this.props.deck.name}</h3>
        <div className="card-text">
        < DeckDetail cards={this.props.cards} />
        </div>
   <button className="btn btn-primary" onClick={() => {console.log(this.props.cards)}} >edit</button>
   <button className="btn btn-secondary" onClick={() => {console.log(this.props.cards)}}> delete </button>
  </div>
</div>
        )
    }

}
