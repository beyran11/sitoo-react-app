import React, {Component} from 'react';
import SimpleTable from "./SimpleTable";
import FormDialog from "./FormDialog";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
        <div className="todo-app container">
          <PrimarySearchAppBar />
          <SimpleTable />
          <FormDialog />
          <Button onClick={this.props.deletePosts} variant="contained" color="secondary"> Delete Selected </Button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePosts: () => { dispatch({type: 'DELETE_POSTS'}) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
