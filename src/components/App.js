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

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <PigContainer hogs={hogs} />
      </div>
    );
  }
}

export default App;
