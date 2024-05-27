import React, {Component} from "react";
import NameTagList from "./NameTag.js";
import UserInput from "./UserInput.js";

class App extends Component {
    state = {
        names: ["Luka", "Slavica", "Bojana", "Marko"]
    };
  removeName = (clickedIndex) => {
  
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  }
  render() {
    return (
        <div className = "App">
            <h1>Name Tag Generator</h1>
            <UserInput />
            <NameTagList names={this.state.names} removeName={this.removeName}/>
        </div>
    )
  }
}

export default App;