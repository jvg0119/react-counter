import React, { Component } from 'react';

import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }

  // testFunction() {
  //   let testFunctionA = "This is testFunctionA";
  //   console.log('this is testFunction');
  //
  // }

  toggleComplete(index) {
    // remove later
    // let MyVar = "JosephG#"
    // const MyConst = "MY CONSTANT"
    // console.log('MyVar >>> ',  MyVar) // do not use this
    // console.log('MyVar >>> ',  this.MyVar) // returns undefinned
    // console.log('MyConst >>> ', this.MyConst)  // returns undefinned
    // console.log('this @** >>> ', this)
    // console.log('this.props @** >>> ', this.props)
    // console.log('this.App @** >>> ', this.App)
    // console.log('this.state @** >>> ', this.state)
    // console.log('this.state.todos @** >>> ', this.state.todos)
    // console.log('this.state.todos[index] @** >>> ', this.state.todos[index])
    // console.log('this.state.todos[index].description @** >>> ', this.state.todos[index].description)
    // console.log('this.state.todos[index].isCompleted @** >>> ', this.state.todos[index].isCompleted)
    // console.log('this.object @** >>> ', this.object)
    // console.log('this.isCompleted @** >>> ', this.isCompleted)
    // console.log('this.state.isCompleted @** >>> ', this.state.isCompleted)
    // console.log('this.toggleCompete @** >>> ', this.toggleComplete) // don't use this.toggleCompete(): endless loop!
    //
    // console.log('=-=-=-=-=-=-=-=-=')
    // console.log('testFunction ###>>> ', this.testFunction)
    // console.log('this.testFunction.testFunctionA ###>>> ', this.testFunction.testFunctionA) // undefinned
    // console.log('this.testFunctionA ###>>> ', this.testFunctionA) // undefinned
    // // console.log('testFunctionA ###>>> ', testFunctionA) // error ; cannot access var in another function
    //

    // console.log('toggleComplete executed ' + index );
    // console.log('this >>> '+ this.state.todos[index].isCompleted)
    // console.log('this >>> '+ this.state.todos.length)
    // console.log('this >>> '+ this.state.todos)


    const todos = this.state.todos.slice();
    console.log(todos)
    console.log(todos[index].isCompleted)
    const todo = todos[index]
    console.log(todo.isCompleted)

    // todo.isCompleted === true ? console.log('todo is true') : console.log('todo is false')
    // todo.isCompleted = todo.isCompleted === true ? false : true   same as below
   todo.isCompleted = todo.isCompleted ?  false :  true
   // console.log('>>>', todo.isCompleted)
   this.setState({isCompleted: todo.isCompleted})
  //  this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
     e.preventDefault()
     console.log('handleSubmit called e = ' + e)
   }


  render() {
    //let a = this.state.todos.map((todo, index) => { return todo.description +' - ' + todo.isCompleted + ' - ' + index });
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => {return this.toggleComplete(index)} } />
          )}

          {/*<form>
            new input item: <input type="text"/> &nbsp;
            <button>submit</button>
          </form>*/}

          <form onSubmit={ (e) => {this.handleSubmit(e)} }>
            new item: <input type="text"/>
            &nbsp; <input type="submit"/>
          </form>

        </ul>
      </div>
    );
  }

}

export default App;
