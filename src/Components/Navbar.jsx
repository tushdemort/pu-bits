import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Static/Navbar.css'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <div className="navbar navbar-floating">
          <div className="navbar-start">
            <a className="navbar-item">ACM</a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">About</a>
            <a className="navbar-item">Contact</a>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar