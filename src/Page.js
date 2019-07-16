import React from 'react';
import logo from './logo.svg';
import Select from 'react-select'
import Definitions from './Definitions';

class Page extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const definition = Definitions[this.props.is]
    console.log(definition.text)
    const transformation = (child) => {
      console.log("Transforming...")
      return React.cloneElement(child, { addDefinition: this.props.addDefinition, pageNumber: this.props.pageNumber })
    }
    const text = React.Children.map(definition.text.props.children, transformation);
    console.log(text)
    return (
      <div className="page">
        <h3>{this.props.is}</h3>
        <h1>
          {text}
        </h1>
      </div>
    );
  }
}

export default Page;
