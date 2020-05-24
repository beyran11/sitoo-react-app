import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {connect} from 'react-redux';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

class SimpleTable extends Component {

    render() {

        const todolist = this.props.todos.length ? (
            this.props.todos.map( todo => {
                // add an index for checked boxes
                todo.checked = false;

                return (
                    <TableRow  key={todo.id}>
                        <TableCell component="th" scope="row">
                            <Checkbox onChange={() =>{
                                todo.checked = true ;
                            }}
                                      color="primary"
                                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </TableCell>
                        <TableCell align="left">{todo.firstname} {todo.lastname}</TableCell>
                        <TableCell className="col3" align="left">{todo.email}</TableCell>
                        <TableCell align="left">{todo.created}</TableCell>
                        <TableCell align="left">{todo.modified}</TableCell>
                        <TableCell align="right">
                            <Tooltip onClick={() => {this.props.deletePost(todo.id)}} title="Delete">
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                )
            })
        ) : (
            <p className="center"> There is no User! </p>
        )

        return (
            <TableContainer component={Paper}>
                <Table className={useStyles.table} aria-label="simple table">
                    <TableHead className="mytable" >
                        <TableRow>
                            <TableCell>
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Date Created</TableCell>
                            <TableCell align="left">Date Modified</TableCell>
                            <TableCell align="right">Delete User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todolist}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST',id:id}) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleTable);