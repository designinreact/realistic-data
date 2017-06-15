import React, { Component } from 'react';
import Card from './Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=30").then(function(response) {
      response.json().then(function(json) {
        this.setState({
          users: json.results
        })
      }.bind(this))
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        {this.state.users.map(function(user, i) {
          return (
            <Card
              key={i}
              avatar={user.picture.large}
              name={user.name.first}
              followers={Math.round(Math.random() * 300)}
            />
          )
        })}

      </div>
    );
  }
}

export default App;
