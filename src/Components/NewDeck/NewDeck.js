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
            <SearchComponent />
        </React.Fragment>
        )
    }
}