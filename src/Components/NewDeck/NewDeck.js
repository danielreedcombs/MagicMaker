import React, { Component } from "react"
import SearchComponent from "./SearchComponent"
import UserManager from "../../apiHandler/UserManager";

export default class NewDeck extends Component {
state = {}

postDeck= (object) => {
    UserManager.postDeck(object)
}
    render(){
        return (
        <React.Fragment>
            <SearchComponent  cards={this.props.cards} postCards={this.props.postCards} APICards={this.props.APICards} createDeck= {this.props.createDeck} postedDeck={this.props.postedDeck} />
        </React.Fragment>
        )
    }
}