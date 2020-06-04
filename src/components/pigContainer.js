import React from "react";
import Pig from "./pig";

class PigContainer extends React.Component {
  generatePig = () => {
    return this.props.hogs.map((hog, index) => <Pig key={index} hog={hog} />);
  };

  render() {
    return <div className="ui grid container">{this.generatePig()}</div>;
  }
}

export default PigContainer;
