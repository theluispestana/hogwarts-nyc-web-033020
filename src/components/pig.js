import React from "react";

class Pig extends React.Component {
  state = {
    clicked: false,
  };

  createFilename = () => {
    const hogName = this.props.hog.name;
    return hogName.toLowerCase().split(" ").join("_");
  };

  handleClick = () => {
    this.setState((previousState) => {
      return { clicked: !previousState.clicked };
    });
  };

  render() {
    const { greased, specialty, name, weight } = {
      ...this.props.hog,
    };
    const medal = this.props.hog["highest medal achieved"];
    let pigImage = require(`../hog-imgs/${this.createFilename()}.jpg`);

    return (
      <div className="ui card eight wide column">
        <h1>{this.props.hog.name}</h1>
        <img src={pigImage} />
        <div className="ui accordion">
          <div
            onClick={this.handleClick}
            className={this.state.clicked ? "active title" : "title"}
          >
            <i className="dropdown icon"></i>
            info
          </div>
          <div className={this.state.clicked ? "active content" : "content"}>
            <p className={this.state.clicked ? "" : "transition hidden"}>
              Specialty: {specialty}
            </p>
            <p className={this.state.clicked ? "" : "transition hidden"}>
              Weight: {weight}
            </p>
            <p className={this.state.clicked ? "" : "transition hidden"}>
              Highest Medal Achieved: {medal}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pig;
