import React, { Component } from "react"
import "./NewDeck.css"
import CardEditor from "./CardEditor"
// import APIManager from "../../apiHandler/CardDatabaseApi"

export default class SearchComponent extends Component {
state = {
    cards:[]
}

handleItemClick = () => {
    let searchBar= document.querySelector(".magicCardName").value
    this.setState({card:searchBar})
    console.log(this.state)
}


    render(){
        if(this.props.initialized){
        return (
            <div className="container">
            <input type="text" className= "magicCardName" placeholder= "search card" />
            <button className="btn btn-primary" onClick= {this.handleItemClick}>search for card</button>
            <CardEditor card={this.state.card} />
            </div>
        )
        

    } else {
        return(
            <div>
                <h1>loading </h1>
            </div>
        )
    }
    }
}