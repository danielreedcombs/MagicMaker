import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import DeckDetail from "./DeckDetail"

export default class DeckComponent extends React.Component{
state= {}

constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
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
                    <h3 className="card-title">{this.props.deck.name}</h3>
                        <div className="card-text">
                        {this.props.cards.map(card =>{
                            return  <DeckDetail cards={this.props.cards} card={card} deckId={deckId} decks={this.props.decks} />
                        })}
                            </div>
                            <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.deck.name}</ModalHeader>
          <ModalBody>
              <input type="text" value= {this.props.cards.card_name} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
                    <Button color= "primary" className="btn btn-primary" onClick={this.toggle}>edit</Button>
                    <button  className="btn btn-secondary" onClick={() => {this.props.deleteDeck(this.props.deck.id, sessionStorage.getItem("userId"))}}> delete </button>
                </div>
            </div>
        )
    }
}
