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

  handleFilter = (event) => {
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
    }, () => console.log(this.state.hogs))
  };

  handleSort = (event) => {
    event.persist()
    console.log(event.target.value)
    if(event.target.value === 'name'){
      const sortedHogs = this.state.hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
      console.log(sortedHogs)
      this.setState({
        hogs: sortedHogs
      })
    } else if (event.target.value === 'weight'){      
      const sortedHogs = this.state.hogs.sort((a, b) => a.weight - b.weight )
      this.setState({
        hogs: sortedHogs
      })
    }
  };

  render() {
    return (      
      <div className="App">
        <Nav />

        <select onChange={this.handleFilter}>
          <option value='all'>All</option>
          <option value='greased'>Greased</option>
          <option value='ungreased'>Ungreased</option>
        </select>
        <br></br>
        <select onChange={this.handleSort}>  
          <option value='sort by'>Sort By:</option>      
          <option value='name'>Name</option>
          <option value='weight'>Weight</option>
        </select>

        <HelloWorld />
        <PigContainer hogs={this.state.hogs} />
      </div>

    );
  }
}

export default App;
