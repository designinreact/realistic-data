import React, { Component } from 'react';
import './card.css'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50").then(function(response) {
      response.json().then(function(json) {
        console.log(json)
        this.setState({
          name: json.results[0].name.first
        })
      }.bind(this))
    }.bind(this));
  }

  render() {
    return (
      <div className="card-container">
        <img className="card-avatar" src="" />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Card;
