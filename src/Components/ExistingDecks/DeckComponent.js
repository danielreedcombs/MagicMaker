import React from "react"
import {Button} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./ExistingDecks.css"
import deletebutton from "./delete button.png"
import DeckDetail from "./DeckDetail"
import SideboardComponent from "./SideboardComponent"
import view from "./viewicon.png"

export default class DeckComponent extends React.Component{

    constructor() {
	super();
	this.state = {
	shown: true,
	};
}

toggle() {
	this.setState({
	shown: !this.state.shown
    });
}

	render() {
        var shown = {
            display: this.state.shown ? "block" : "none"
		};

		var hidden = {
            display: this.state.shown ? "none" : "block"
		}

        let deckId= this.props.deck.id
        return(
    <Container>
        <Col xs="6">
                    <div className="basicdeck">
                    <div key={this.props.deck.id} className="align" >
                            <h2>{this.props.deck.name}</h2>
                            <Button color="primary" className="btn btn-primary buttons" onClick={() => {this.props.deleteDeck(this.props.deck.id, sessionStorage.getItem("userId"))}}> <img src={deletebutton} className="button" /> </Button>
                            <Button color="info" className="buttons" onClick={this.toggle.bind(this)}><img src={view} className="button" /></Button>
                    </div>
                    </div>
        </Col>
        <Col xs="6">
            <div style= {hidden} className="basicdeck">
                <p>Deck</p>
                    <div>
                        <div>
                        {this.props.cards.map(card =>{
                            return  <DeckDetail key={card.id} editSubmit= {this.props.editSubmit}deleteCard={this.props.deleteCard} cards={this.props.cards} card={card} deckId={deckId} decks={this.props.decks} />
                            })}
                        </div>
                        <br></br>
                        <p> Sideboard</p>
                        <div>
                            {this.props.sideboards.map(sideboard =>
                            <SideboardComponent key={sideboard.id} editSideboard={this.props.editSideboard} postSideboard={this.props.postSideboard}
                            deleteSideboard={this.props.deleteSideboard}
                            getSideboard={this.props.getSideboard}
                            deleteDeck={this.props.deleteDeck} sideboards={this.props.sideboards}
                            sideboard={sideboard}
                            deckId={deckId} decks={this.props.decks}
                            />)}
                        </div>
                    </div>
                <div>
            </div>
        </div>
        </Col>
    </Container>
        )
    }
}
