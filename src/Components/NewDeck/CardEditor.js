import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./styles.css"
import CardComponent from "./CardComponent"
import SideboardSection from "./SideboardSection"
export default class CardEditor extends React.Component{
state={
    name: "",
    number: ""
}

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
    postCardToDatabase= () =>{
        let deckId= this.props.deckName.id
        let cardName =document.querySelector(".newCard").value
        let cardNumber = this.state.number
      let obj={
          card_name: cardName,
          deckId: deckId,
          quantity: cardNumber
      }
      this.props.postCards(obj)

    }

    postSideboard= () =>{
      let deckId= this.props.deckName.id
        let cardName =document.querySelector(".newCard").value
        let cardNumber = this.state.number
      let obj={
          card_name: cardName,
          deckId: deckId,
          quantity: cardNumber
      }

    this.props.postSideboard(obj)}

    render(){

        return(
        <div>
            <div>
                <div key={this.props.deckName.Id} className= "sideBySide">
                    {/* <h4 className="setAppart"> {this.props.deckName.name} </h4> */}
        <div>
        <Button color="danger" onClick={this.toggle}>Add Cards</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader toggle={this.toggle}> {this.props.deckName.name}</ModalHeader>
          <ModalBody className="sideBySide">
          <input type="text" placeholder="Search" className="newCard" />
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
        <DropdownToggle caret>
         quantity
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem value= "1" onClick={() =>{this.setState({number: 1})}} >1</DropdownItem>
          <DropdownItem value="2" onClick={() =>{this.setState({number: 2})}}>2</DropdownItem>
          <DropdownItem value="3"onClick={() =>{this.setState({number: 3})}}>3</DropdownItem>
          <DropdownItem value="4"onClick={() =>{this.setState({number: 4})}}>4</DropdownItem>
          <DropdownItem value= "1" onClick={() =>{this.setState({number: 5})}} >5</DropdownItem>
          <DropdownItem value="2" onClick={() =>{this.setState({number: 6})}}>6</DropdownItem>
          <DropdownItem value="3"onClick={() =>{this.setState({number: 7})}}>7</DropdownItem>
          <DropdownItem value="4"onClick={() =>{this.setState({number: 8})}}>8</DropdownItem>
          <DropdownItem value= "1" onClick={() =>{this.setState({number: 9})}} >9</DropdownItem>
          <DropdownItem value="2" onClick={() =>{this.setState({number: 10})}}>10</DropdownItem>
          <DropdownItem value="3"onClick={() =>{this.setState({number: 11})}}>11</DropdownItem>
          <DropdownItem value="4"onClick={() =>{this.setState({number: 12})}}>12</DropdownItem>
          <DropdownItem value= "1" onClick={() =>{this.setState({number: 13})}} >13</DropdownItem>
          <DropdownItem value="2" onClick={() =>{this.setState({number: 14})}}>14</DropdownItem>
          <DropdownItem value="3"onClick={() =>{this.setState({number: 15})}}>15</DropdownItem>
          <DropdownItem value="4"onClick={() =>{this.setState({number: 16})}}>16</DropdownItem>
          <DropdownItem value= "1" onClick={() =>{this.setState({number: 17})}} >17</DropdownItem>
          <DropdownItem value="2" onClick={() =>{this.setState({number: 18})}}>18</DropdownItem>
          <DropdownItem value="3"onClick={() =>{this.setState({number: 19})}}>19</DropdownItem>
          <DropdownItem value="4"onClick={() =>{this.setState({number: 20})}}>20</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <h3>{this.state.number}</h3>
      <Button color="btn btn-Primary"onClick={()=>{ if(this.props.deckName.name !== undefined){ this.postCardToDatabase()} else {alert("create a deck first")}}} >add card</Button>
      <Button color="info" onClick={()=>{ if(this.props.deckName.name !== undefined){ this.postSideboard()} else {alert("create a deck first")}}} >Sideboard Card</Button>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle} >Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
    <div className="center">
    <h2>{this.props.deckName.name}</h2>
    <h3>Main Deck</h3>
        {this.props.cards.map(card =>
            <CardComponent editSubmit={this.props.editSubmit}deleteCard={this.props.deleteCard} cards={this.props.cards} deckName={this.props.deckName} APICards={this.props.APICards} card= {card} />
            )
          }
    </div>
    <div className="center">
    <h3>Sideboard</h3>
    <div>
      {this.props.sideboards.map(sideboard =>
        <SideboardSection sideboard={sideboard} editSideboard={this.props.editSideboard}
        postSideboard={this.props.postSideboard}
        deleteSideboard={this.props.deleteSideboard}
        getSideboard={this.props.getSideboard}
        deckName={this.props.deckName}
        sideboards={this.props.sideboards} />)}
    </div>
  </div>
    </div>
  </div>
        )
}}