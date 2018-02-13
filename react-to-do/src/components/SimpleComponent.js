import React, { Component } from 'react';

class SimpleComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myText: "This is my original Text !!!"
    }
  }

//  changeHandler(e) {
  changeHandler = (e) => {
    console.log('changeHandler !!!')
    this.setState({myText: e.target.value});
  }

  render() {
    return (
      <div>
        {this.state.myText}
        <br/>
        {/* <input type="text" onChange={this.changeHandler} value={this.state.myText}></input> */}
        <input type="text" onChange={this.changeHandler} value={this.state.myText} style={{width: 300, height: 20}}></input>
      </div>
    )
  }
}

export default SimpleComponent;

//
