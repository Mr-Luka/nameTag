import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: []
  };
  removeName = (clickedIndex) => {
    
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  addName = name => {
    const newNames = [...this.state.names, name];
    this.setState({names: newNames})
  }
  componentDidUpdate() {
    const savedNameString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNamed", savedNameString);

  }
  componentDidMount(){
    const savedNamesString = localStorage.getItem("savedNames");
    if(savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      this.setState({names: savedNames});
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName}/>
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
