import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    //GET
    // fetch(`${process.env.REACT_APP_API_URL}/api/checkouts/1321`)
    // .then(
    //   //(res) => { console.log(res); return res.json}
    //   (res) => {
    //     return res.json()
    //   }
    // )
    // .then((data) => console.log(data))
    // .catch((error) => console.log(error))

    //POST
    // (async () => {
    //   const rawResponse = await fetch(`${process.env.REACT_APP_API_URL}/ap/checkouts/1321`, {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   const content = await rawResponse.status;

    //   console.log(content);
    // })();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
