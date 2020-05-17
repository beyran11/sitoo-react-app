import React, {Component} from 'react';
import SimpleTable from "./SimpleTable";



class App extends Component {
  state = {
    todos: [
      {id: 1, firstname: 'Hamzeh',lastname: 'Beiranvand',email: 'beyran11@gmail.com'},
      {id: 2, firstname: 'Karim',lastname: 'Beiranvand',email: 'beiranvand.karim@gmail.com'}
    ]
  }

  deleteTodo = (id) => {
    //console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })
  }


  render() {
    return (
        <div className="todo-app container">
          <h1 className="center blue-text">Sitoo App Todo's</h1>
          <SimpleTable todos={this.state.todos} deleteTodo={this.deleteTodo} />


        </div>
    );
  }
}

export default App;
