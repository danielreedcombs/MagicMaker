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
            <SearchComponent createDeck= {this.props.createDeck} postedDeck={this.props.postedDeck} minus= {this.minus} add={this.add} number={this.props.number} count={this.props.count} increase={this.props.incrementCount} decrease={this.props.DecrementCount} />
        </React.Fragment>
        )
    }
}