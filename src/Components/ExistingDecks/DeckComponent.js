import React from "react"
import {Button} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./ExistingDecks.css"
import deletebutton from "./delete button.png"
import DeckDetail from "./DeckDetail"
import SideboardComponent from "./SideboardComponent"
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
    <div>
        <Col xs="6" sm="4"></Col>
        <Col xs="6" sm="7">
            <div key={this.props.deck.id} className="card w-50 basicdeck">
                    <h2 className="card-title">{this.props.deck.name}</h2> <Button color="info" onClick={this.toggle.bind(this)}> View Deck</Button>
                <div style= {hidden} className="card-body">

                    <h3>Deck</h3>
                        <div>
                                <div className="card-text">
                                    {this.props.cards.map(card =>{
                                        return  <DeckDetail key={card.id} editSubmit= {this.props.editSubmit}deleteCard={this.props.deleteCard} cards={this.props.cards} card={card} deckId={deckId} decks={this.props.decks} />
                                    })}
                            </div>
                            <h3> Sideboard</h3>
                            <div className="card-text">
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
                    <Button color="primary" className="btn btn-primary" onClick={() => {this.props.deleteDeck(this.props.deck.id, sessionStorage.getItem("userId"))}}> <img src={deletebutton} className="button" /> </Button>
                </div>
            </div>
</Col>
<Col sm="4"></Col>
</div>
        )
    }
}
