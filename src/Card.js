import React, { Component } from 'react';
import './card.css'

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      followed: false
    }
    this.toggleFollowed = this.toggleFollowed.bind(this);
  }

  toggleFollowed() {
    this.setState({
      followed: !this.state.followed
    })
  }

  render() {
    return (
      <div className="card-container">
        <img className="card-avatar" src={this.props.avatar} />
        <div className="card-title">{this.props.name}</div>
        <div className="card-followers">{this.props.followers} Followers</div>
        <button onClick={this.toggleFollowed} className={`card-button ${this.state.followed ? ' card-button-active' : ''}`}>{this.state.followed ? 'Followed' : 'Follow'}</button>
      </div>
    );
  }

}

export default Card;
