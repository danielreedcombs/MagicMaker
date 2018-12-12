

import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
clearSessionStorage(){
    sessionStorage.clear()
}
render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Magic Maker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link className="nav-link" to="/newDeck">New Deck</Link>
      </li>
      <li class="nav-item">
       <Link className="nav-link" to="/existingDecks">Existing Decklists</Link>
      </li>
      <li class="nav-item active">
        <Link className="nav-link" to="/home" onClick={() => this.clearSessionStorage()}> Logout</Link>
        </li>
    </ul>
  </div>
</nav>

        )
    }
}

export default NavBar