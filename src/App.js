import React from 'react';
import logo from './logo.svg';
import "./App.scss";
import Select from 'react-select'
import Page from './Page';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        "instructions"
      ]
    }
    this.addDefinition = this.addDefinition.bind(this)
  }
  addDefinition(title, pageNumber) {
    console.log("Added...", title)
    let history = this.state.history
    history.length = pageNumber + 1;
    history.push(title)
    this.setState({
      history
    })
  }
  render() {
    return (
      <div className="page-container">
        {this.state.history.map((topic, index) => (
          <Page is={topic} addDefinition={this.addDefinition} pageNumber={index} />
        ))}
      </div>
    );
  }
}

export default App;
