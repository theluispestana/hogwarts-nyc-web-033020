import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigContainer from "./pigContainer";

class App extends Component {
  state = {
    hogs: hogs,
  };

  handleChange = (event) => {
    event.persist();
    // console.log(event.target.value)
    let condition = false;
    if(event.target.value === 'greased'){
      condition = true
    } else if (event.target.value === 'all'){
      return this.setState({
        hogs: hogs
      })
    }
    const filteredHogs = hogs.filter(hog => hog.greased === condition)
    console.log(filteredHogs)
    this.setState({
      hogs: filteredHogs
    })
  };

  render() {
    return (      
      <div className="App">
        <Nav />

        <select onChange={this.handleChange}>
          <option value='all'>All</option>
          <option value='greased'>Greased</option>
          <option value='ungreased'>Ungreased</option>
        </select>

        <HelloWorld />
        <PigContainer hogs={hogs} />
      </div>

    );
  }
}

export default App;
