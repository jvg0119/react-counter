// import react and React's Component
import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
        /*<li> A todo will go here </li>*/
        <li>
          <input type="checkbox" checked={ this.props.isCompleted } />
          <span>{ this.props.description }</span>
        </li>

    );
  }
}

export default ToDo;
