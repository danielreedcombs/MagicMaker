import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import "./NewDeck"

export default class CardEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
          };

      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

      toggleDropDown =()=> {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    render(){

        return(
            <div>
                <div key={this.props.deckName.Id} className= "sideBySide">

                {/* doesnt like being involved as not appart of react strap */}

                    <h4 className="setAppart"> {this.props.deckName.name} </h4>

        <Button color="danger" onClick={this.toggle}>Add Cards</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader toggle={this.toggle}> {this.props.deckName.name}</ModalHeader>
          <ModalBody className="sideBySide">
          <input type="text" placeholder="type card here"/>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
        <DropdownToggle caret>
         quantity
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem value= "1" onClick={() =>{console.log("1")}} >1</DropdownItem>
          <DropdownItem value="2" onClick={() =>{console.log("2")}}>2</DropdownItem>
          <DropdownItem value="3"onClick={() =>{console.log("3")}}>3</DropdownItem>
          <DropdownItem value="4"onClick={() =>{console.log("4")}}>4</DropdownItem>
          <DropdownItem value= "1" onClick={() =>{console.log("1")}} >5</DropdownItem>
          <DropdownItem value="2" onClick={() =>{console.log("2")}}>6</DropdownItem>
          <DropdownItem value="3"onClick={() =>{console.log("3")}}>7</DropdownItem>
          <DropdownItem value="4"onClick={() =>{console.log("4")}}>8</DropdownItem>
          <DropdownItem value= "1" onClick={() =>{console.log("1")}} >9</DropdownItem>
          <DropdownItem value="2" onClick={() =>{console.log("2")}}>10</DropdownItem>
          <DropdownItem value="3"onClick={() =>{console.log("3")}}>11</DropdownItem>
          <DropdownItem value="4"onClick={() =>{console.log("4")}}>12</DropdownItem>
          <DropdownItem value= "1" onClick={() =>{console.log("1")}} >13</DropdownItem>
          <DropdownItem value="2" onClick={() =>{console.log("2")}}>14</DropdownItem>
          <DropdownItem value="3"onClick={() =>{console.log("3")}}>15</DropdownItem>
          <DropdownItem value="4"onClick={() =>{console.log("4")}}>16</DropdownItem>
          <DropdownItem value= "1" onClick={() =>{console.log("1")}} >17</DropdownItem>
          <DropdownItem value="2" onClick={() =>{console.log("2")}}>18</DropdownItem>
          <DropdownItem value="3"onClick={() =>{console.log("3")}}>19</DropdownItem>
          <DropdownItem value="4"onClick={() =>{console.log("4")}}>20</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button color="btn btn-Primary"onClick={()=>{console.log("newCard")}}>add card</Button>
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