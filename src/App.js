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
}