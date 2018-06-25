import React, { Component } from 'react';
import './App.css';
import User from './User';
import Card from './Card';


class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    let urls = [];
    for (let i = 1; i < 10; i++) {
      urls.push(`https://swapi.co/api/people/?format=json&page=${i}`);
    };

    Promise.all(urls.map(url => {
      fetch(url)
      .then(resp => resp.json())
      .then(datas => {
        datas.results.map(obj => {
          let newState = this.state.users.slice();
          newState.push(obj);
          this.setState({ users: newState })
        })
      })
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quizz game</h1>
        </header>

        <div className="cards">
          <Card />
        </div>
        <ul className="users">
          {Object.keys(this.state.users).map(key => (
            <User
              key={key}
              index={key}
              details={this.state.users[key]}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
