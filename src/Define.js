import React from 'react';


class Define extends React.Component {
  render() {
    return <span className="define" onClick={() => {
      this.props.addDefinition(this.props.is, this.props.pageNumber)
    }}>{this.props.children}</span>
  }
}
export default Define;
