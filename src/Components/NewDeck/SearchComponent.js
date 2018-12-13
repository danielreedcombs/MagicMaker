import React, { Component } from "react"
import "./styles.css"
import CardEditor from "./CardEditor"

export default class SearchComponent extends Component {
state = {}

render(){

        return (
            <div className="basicnewdeck">
            <div className="row">
            <input type="text" className= "deckName" placeholder= "Deck Name" />
            <button className="btn btn-primary" onClick= {()=> {this.props.createDeck(document.querySelector(".deckName").value)}}>Create a Deck</button>
            </div>
                <CardEditor editSubmit={this.props.editSubmit} deleteCard={this.props.deleteCard}
                 cards= {this.props.cards} deckName={this.props.postedDeck} APICards={this.props.APICards}
                  createDeck= {this.props.createDeck} postCards={this.props.postCards}
                  editSideboard={this.props.editSideboard} postSideboard={this.props.postSideboard}
                  deleteSideboard={this.props.deleteSideboard}
                   getSideboard={this.props.getSideboard} sideboards={this.props.sideboards}
                    />
            </div>
                )}}




