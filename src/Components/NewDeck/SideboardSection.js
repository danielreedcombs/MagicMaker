import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DeckDetail extends React.Component{
    state={
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

          editSideboard= () =>{
              let id =this.props.sideboard.id
              let cardName= document.querySelector(".editCard").value
              let obj={
                  card_name: cardName,
                  quantity: this.state.number
              }
              console.log(obj)
              this.props.editSideboard(id,obj)
          }

   render(){
        const deckId = this.props.deckId
        const card =this.props.sideboard.deckId

        if(card === deckId){
            return(
            <div key={this.props.sideboard.id} className="align">
            <h5>{this.props.sideboard.card_name}</h5>  <h5 className="padding">quantity:</h5>  <h5>{this.props.sideboard.quantity}</h5>
            <Button color="info" onClick={this.toggle}>edit</Button>
            <Button color="danger" onClick={()=>{this.props.deleteSideboard(this.props.sideboard.id)}} > delete </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader toggle={this.toggle}> {this.props.sideboard.card_name}</ModalHeader>
          <ModalBody className="sideBySide">
          <form onSubmit={() => this.editFinal(this.props.sideboard.id)}>
          <input type="text" placeholder="type card here" className="editCard" />
          </form>
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
      <Button color="btn btn-Primary"onClick={()=>{ if(document.querySelector(".editCard").value !== "" || this.state.number !== ""){ this.editSideboard().then(console.log(this.props.sideboards))} else {alert("write a card name")}}} >edit card</Button>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle} >Cancel</Button>
          </ModalFooter>
        </Modal>
            </div>
            )
        } else {
        return null;
        }}}