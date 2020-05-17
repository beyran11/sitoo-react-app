import React, {Component} from 'react';
import SimpleTable from "./SimpleTable";
import FormDialog from "./FormDialog";
import PrimarySearchAppBar from "./PrimarySearchAppBar"

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
          <PrimarySearchAppBar />
          <SimpleTable todos={this.state.todos} deleteTodo={this.deleteTodo} />

          <FormDialog addTodo={this.addTodo} />

        </div>
    );
  }
}

export default App;
