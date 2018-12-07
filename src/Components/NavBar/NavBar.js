import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
          <nav className="navbar navbar-dark bg-dark">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                  <Link className="nav-link" to="/newDeck">New Deck</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/existingDecks">Existing Decklists</Link>
              </li>
            </ul>
          </nav>
        )
    }
}

export default NavBar