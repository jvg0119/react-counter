// import react and React's Component
import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
        /*<li> A todo will go here </li>*/
        <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
          <span>{ this.props.description }</span>&nbsp;
          <button onClick={ this.props.delete }>Delete</button>
        </li>

    );
  }
}

export default ToDo;
