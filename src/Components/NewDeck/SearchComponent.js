import React, { Component } from "react"
import "./NewDeck.css"
// import APIManager from "../../apiHandler/CardDatabaseApi"

export default class SearchComponent extends Component {
state = {}

handleItemClick = () => {
    console.log(this.state)
    let searchBar= document.querySelector(".magicCardName").value
    console.log(searchBar)
    this.setState({card: searchBar})
console.log(this.state)}




cardName(){
    // getCards.then((parsedCards)=> parsedCards.map(()=>{
    //     if (parsedCards === document.querySelector(".magicCardName").value){
    //         -create a div for it
    //         -add a counter
    //         -make me smile
    //     } else {
    //         alert("This card doesnt exist")
    //     }
    // }))
console.log(document.querySelector(".magicCardName").value)
}
    render(){
        return (
            <div className="NewDeckContainer">
            <div>
            <input type="text" className= "magicCardName" placeholder= "search card" />
            <button onClick= {this.handleItemClick}>search for card</button>
            </div>
            <div>
                <h3>Deck</h3>
            </div>
            <div>
            <span>
                Snapcaster Mage
            </span>
            <button className= "add">-</button>
            <span>3</span>
            <button className="subtract">+</button>
            </div>
            </div>
        )
    }
}