import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./NewDeck"

export default class CardEditor extends React.Component{
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

        return(
            <div>
                <div className= "sideBySide">
                    <h3>{this.props.deckName}</h3>
        <Button color="danger" onClick={this.toggle}>Add Cards</Button>
                </div>
                <div>
                </div>
                <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> {this.props.deckName}</ModalHeader>
          <ModalBody>
                    <button onClick={()=>{console.log("minus")}}>-</button><p>{this.props.count}</p><button onClick={()=>{console.log("get bigger!")}}>+</button>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save Deck</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
        )

}}