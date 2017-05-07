import React from 'react';
import ReactDOM from 'react-dom';

class Myclick extends React.Component {
  render(){
    return  (
      <div className="index">
        <h1>{this.props.text}</h1>
        <button onClick={this.props.handleClick} >单击</button>
        <h2>{this.props.number}</h2>
      </div>
    );
  }
}


export default Myclick;
