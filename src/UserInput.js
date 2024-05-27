import React, {Component} from "react";

class UserInput extends Component {
    state = {
        name: ""
    };
    updateName = e => this.setState({name: e.target.value});
    handleSubmit = e => {
        e.preventDefault();
        this.setState({name: ""});
    }
}