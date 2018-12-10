import React, { Component } from "react"
import "./NewDeck.css"
import CardEditor from "./CardEditor"

export default class SearchComponent extends Component {
state = {}

render(){

        return (
            <div>
            <div className="row">
            <input type="text" className= "deckName" placeholder= "Deck Name" />
            <button className="btn btn-primary" onClick= {()=> {this.props.createDeck(document.querySelector(".deckName").value)}}>Create a Deck</button>
            </div>
                <CardEditor deckName={this.props.postedDeck} />
            </div>
                )}}




