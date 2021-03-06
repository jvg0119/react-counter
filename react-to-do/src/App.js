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
      //toggleComplete: '', // remove later not sure why it's here
      newTodoDescription: ''
    };
  }

  toggleComplete(index) {
    // console.log('toggleComplete executed >>> ', this.state.todos[index]);
    //const todo = this.state.todos[index].isCompleted;

    // bloc solution:
    const todos = this.state.todos.slice();
    // console.log('todos >>>', todos)
    const todo = todos[index];
    // console.log('todo >>>', todo)
    todo.isCompleted = todo.isCompleted ? false : true
    // console.log('newState = ', todo.isCompleted)
    this.setState({todos: todos})  // why does this work?
    // console.log('todos ???> ', todos)

    // const todos = this.state.todos.slice();
    // const todo = todos[index];
    // todo.isCompleted = todo.isCompleted ? false : true
    // this.setState({todo: todo.isCompleted}) // works
    // this.setState({todo: todos[index].isCompleted}) // works
    // this.setState({todos[index]: todos[index].isCompleted}) // why doesn't this work?


    // works my solution
    // console.log('...... >>>>', this.state.todos[index].isCompleted)
    // const todo = this.state.todos[index].isCompleted
    // this.state.todos[index].isCompleted = this.state.todos[index].isCompleted ? false : true
    // console.log('this.state.todos[index].isCompleted >>> ', this.state.todos[index].isCompleted)
    // this.setState({todo: this.state.todos[index].isCompleted}
    // this.handleSubmit = this.handleSubmit.bind(this); //
  }

  // handleSubmit(e) {
  handleSubmit = (e) => {
    // console.log('handleSubmit was submitted');
    e.preventDefault(); //
    // console.log('adding new todo >>>', this.state.newTodoDescription)

    const newTodo = {description: this.state.newTodoDescription, isCompleted: false }
    // this.setState({todos: [...this.state.todos, newTodo]})
    // this.setState({todos: [...this.state.todos]})
    // this.setState({todos: [this.state.todos[0], this.state.todos[1], this.state.todos[2]]})
    // this.setState({todos: [newTodo]})

    if (!this.state.newTodoDescription) { return }
    this.setState({todos: [...this.state.todos, newTodo], newTodoDescription: ''})

    // below is an alternative way
    // console.log('bbbb >>> ', newTodo.description)
    // if (newTodo.description) {
    //  this.setState({todos: [...this.state.todos, newTodo], newTodoDescription: ''})
    // }
    // this.setState({newTodoDescription: ''})
    // this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' }); // same as adding the above line
  }

  handlechange(e) {
    console.log('handlechange is triggered !')
    this.setState({ newTodoDescription: e.target.value });
  }

  render() {
    //let a = this.state.todos.map((todo, index) => { return todo.description +' - ' + todo.isCompleted + ' - ' + index });
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) }/>
          )}
        </ul>


        <form onSubmit={ (e) => this.handleSubmit(e) }>
          {/* <input type="text" value={this.state.newTodoDescription} onChange={this.handlechange}/> */}
          <input type="text" value={this.state.newTodoDescription} onChange={(e) => this.handlechange(e)}/>
          {/* <input type="text" value={this.state.newTodoDescription} /> */}
          <input type="submit" />
          {/* <div> new item to be added: { this.state.newTodoDescription }</div> */}
        </form>

      </div>
    );
  }

}

export default App;
