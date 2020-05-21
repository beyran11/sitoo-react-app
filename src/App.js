import React, {Component} from 'react';
import SimpleTable from "./SimpleTable";
import FormDialog from "./FormDialog";
import PrimarySearchAppBar from "./PrimarySearchAppBar"
import Checkboxes from "./Checkboxes";
import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    todos: [
      {id: 1, firstname: 'Hamzeh',lastname: 'Beiranvand',email: 'beyran11@gmail.com',created: 2019, modified: 2020},
      {id: 2, firstname: 'Karim',lastname: 'Beiranvand',email: 'beiranvand.karim@gmail.com',created: 2019, modified: 2020},
      {id: 3, firstname: 'Mohammad',lastname: 'Hasanvand',email: 'khatere.2019@gmail.com',created: 2019, modified: 2020}
    ]
  }

  deleteTodo = (id) => {
    console.log(id);
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
