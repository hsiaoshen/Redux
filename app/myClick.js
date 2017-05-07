import React from 'react';
import ReactDOM from 'react-dom';

class Myclick extends React.Component {
  render(){
    return  (
      <div>
        <h1>{this.props.text}</h1>
        <h1 onClick={this.props.onClick} >单击</h1>
      </div>
    );
  }
}

export default Myclick;
