import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Static/Company.css";
import ama from "../assets/amaz.png";
export class Company extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <div className="company-container">
          <div className="left"></div>
          <div className="right">
            <div className="avatar">
              <img src={ama} alt="avatar" />
            </div>
            <div className="name">Amazon</div>
            <div className="industry">
              <span class="badge badge-primary">IT</span>
              <span class="badge badge-Secondary">Cloud</span>
              <span class="badge badge-success">AI/ML</span>
            </div>
            <div className="row-right">
              <div className="salary">
                <h3>Salary</h3>
                <br/>
                <span>13-17L</span>
                <h4>99+ reported salaries</h4>
              </div>
              <div className="location">
                <h3>Locations</h3>
                <br/>
                <span><span className="dot"></span>Hyderabad</span>
                <br/>
                <span><span className="dot"></span>Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Company;
