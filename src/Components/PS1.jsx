import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Static/Home.css'
import sitting from '../assets/a.png'
import Cards from './Cards'
import logo from '../assets/BITS.png'
export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <div className='top'>
          <div className="container">
            <div className="item text">
              <p className='heading'>
              Welcome<br/>
              </p>
              <p className='tagline'>PS2/PS1/SI/PLACEMENTS</p>
            </div>
            <div className="item">
            <img className='home-image' src={sitting}/>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className="container below">
            <div className="item">
              <Cards link='http://localhost:5173/ps2' img={logo} text="PS2" />
            </div>
            <div className="item">
              <Cards  link='http://localhost:5173/ps1' img={logo} text="PS1" />
            </div>
            <div className="item">
              <Cards  link='http://localhost:5173/si' img={logo} text="SI" />
            </div>
            <div className="item">
              <Cards  link='http://localhost:5173/placements' img={logo} text="PLACEMENTS" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home