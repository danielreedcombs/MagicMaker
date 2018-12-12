import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DeckDetail from "./DeckDetail"
import SideboardComponent from "./SideboardComponent"
export default class DeckComponent extends React.Component{
state= {}

constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggleDropDown= this.toggleDropDown.bind(this)
    this.toggle = this.toggle.bind(this);
    this.state = {
        dropdownOpen: false
      }
  }
  toggleDropDown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
    render(){

        let deckId= this.props.deck.id
        return(
            <div key={this.props.deck.id} className="card w-50">
                <div className="card-body">
                    <h2 className="card-title">{this.props.deck.name}</h2>

                        <h3>Deck</h3>

                        <div className="card-text">
                        {this.props.cards.map(card =>{
                            return  <DeckDetail editSubmit= {this.props.editSubmit}deleteCard={this.props.deleteCard} key={this.props.cards.id} cards={this.props.cards} card={card} deckId={deckId} decks={this.props.decks} />
                        })}
                            </div>
                        <h3> Sideboard</h3>
                        <div className="card-text">
                        {this.props.sideboards.map(sideboard =>
                            <SideboardComponent editSideboard={this.props.editSideboard} postSideboard={this.props.postSideboard}
                            deleteSideboard={this.props.deleteSideboard}
                            getSideboard={this.props.getSideboard}
                           deleteDeck={this.props.deleteDeck} sideboards={this.props.sideboards}
                           sideboard={sideboard}
                           deckId={deckId} decks={this.props.decks}
                           />)}
                        </div>
                            <div>
      </div>
                    <Button color="primary" className="btn btn-primary" onClick={() => {this.props.deleteDeck(this.props.deck.id, sessionStorage.getItem("userId"))}}> delete </Button>
                </div>
            </div>
        )
    }
}
