
import React, { Component } from "react"
import DeckComponent from "./DeckComponent"
import { Container, Row, Col } from 'reactstrap';
import "./ExistingDecks.css"

export default class ExistingDecks extends Component {
    render() {
            return (
                <div className="align">
                <Col xs="6" sm="4">
                </Col>
                <Col xs="6" sm="11">
                    {this.props.decks.map(deck => (
                        <DeckComponent key={deck.id} editSubmit={this.props.editSubmit} deleteCard={this.props.deleteCard}
                        decks= {this.props.decks} deck={deck} cards={this.props.cards}
                        editSideboard={this.props.editSideboard} postSideboard={this.props.postSideboard}
                        deleteSideboard={this.props.deleteSideboard}
                        getSideboard={this.props.getSideboard}
                        deleteDeck={this.props.deleteDeck} sideboards={this.props.sideboards}/>
                        ))}
                        </Col>
                        <Col sm="4"></Col>
                </div>

            )
        }

    }
