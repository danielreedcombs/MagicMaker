import React, { Component } from "react"
import "./NewDeck.css"
import CardEditor from "./CardEditor"
import UserManager from "../../apiHandler/UserManager";
// import APIManager from "../../apiHandler/CardDatabaseApi"

export default class SearchComponent extends Component {
state = {
    newDeck:"",
    number: 0,
    postedDeck: ""
}

// minus(){
//  const minus= this.state.number -1
//  console.log(minus)
// this.setState({number: minus})
// }

// add(){
//     const add= this.state.number +1
//     console.log(add)
//     this.setState({number: add})
// }

createDeck(){
    let deckName= document.querySelector(".deckName").value
    this.setState({newDeck: deckName})
    let user = sessionStorage.getItem("userId")
    let obj={
        name: deckName,
        user_id: user

    }
    UserManager.postDeck(obj)
    .then(deck => {this.setState({postedDeck: deck})
    console.log(this.state.postedDeck)
    })
    }
render(){

        return (
            <div>
            <div className="row">
            <input type="text" className= "deckName" placeholder= "Deck Name" />
            <button className="btn btn-primary" onClick= {() => this.createDeck()}>Create a Deck</button>
            </div>
                <CardEditor deckName={this.state.postedDeck.name} minus= {this.minus} add={this.add} number={this.state.number} />
            </div>
                )}}




