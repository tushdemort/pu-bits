import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Static/Cards.css'
import { Link } from "react-router-dom";

export class Cards extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                <div class="card card-image-cover">
                    <div class="card-body">
                    <img src={this.props.img} alt="" />
                        <a href={this.props.link} class="btn btn-primary">{this.props.text}</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Cards