

import React from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import plainswalkerlogo from "./watermark_ojutai.png"
import mtg from "./mtglogo.png"
import sultai from "./sultai.png"
import atarka from "./Atarka.png"
import mardu from "./klgn.png"

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

clearSessionStorage(){
    sessionStorage.clear()
}
render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
    <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <img src={mardu} className="mardu" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                 <Link className="nav-link" to="/existingDecks"><img src={sultai} className="image" />Your decks </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link className="nav-link" to="/newDeck"><img src={plainswalkerlogo} className="image" /> new deck</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link className="nav-link" to="/home" onClick={() => this.clearSessionStorage()}><img src={atarka} className="image" />logout</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
  {/* </div> */}
</nav>

        )
    }
}

export default NavBar