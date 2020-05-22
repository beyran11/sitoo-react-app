import React, {Component} from 'react';
import SimpleTable from "./SimpleTable";
import FormDialog from "./FormDialog";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    todos: []
  }

  deleteTodo = (id) => {
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

          <Button onClick={() => {
            console.log(this.state.todos)
            const todos = this.state.todos.filter(todo => {
              return todo.checked !== true
            });
            this.setState({
              todos
            })

          }} variant="contained" color="secondary"> Delete Selected </Button>

        </div>
    );
  }
}

export default App;
