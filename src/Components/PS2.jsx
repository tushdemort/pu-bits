import PropTypes from "prop-types";
import React, { Component } from "react";
import axios from "axios";
import "./Static/PS2.css";

export class PS2 extends Component {
  static propTypes = {};

  state = {
    companies: [],
  };

  componentDidMount() {
    fetch('http://localhost:5000/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({ companies: data }))
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  render() {
    const { companies } = this.state; // Destructure companies from state
	return (
      <>
        <div className="ps2-container">
          <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-semibold">PS2 Data</h1>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">Companies</label>

                <select class="select">
                  {companies.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">Password</label>
                <div className="form-control">
                  <input
                    placeholder="Type here"
                    type="password"
                    className="input max-w-full"
                  />
                </div>
              </div>
              <div className="form-field">
                <div className="form-control justify-between">
                  <div className="flex gap-2">
                    <input type="checkbox" className="checkbox" />
                    <a href="#">Remember me</a>
                  </div>
                  <label className="form-label">
                    <a className="link link-underline-hover link-primary text-sm">
                      Forgot your password?
                    </a>
                  </label>
                </div>
              </div>
              <div className="form-field pt-5">
                <div className="form-control justify-between">
                  <button type="button" className="btn btn-primary w-full">
                    Sign in
                  </button>
                </div>
              </div>

              <div className="form-field">
                <div className="form-control justify-center">
                  <a className="link link-underline-hover link-primary text-sm">
                    Don't have an account yet? Sign up.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PS2;
