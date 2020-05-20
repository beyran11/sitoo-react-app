import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



const SimpleTable = ({todos, deleteTodo}) => {
    const todolist = todos.length ? (
        todos.map( todo => {
            return (
                <TableRow onClick={() => {deleteTodo(todo.id)}} key={todo.id}>
                    <TableCell component="th" scope="row">
                        {todo.id}
                    </TableCell>
                    <TableCell align="right">{todo.firstname}</TableCell>
                    <TableCell className="col3" align="right">{todo.lastname}</TableCell>
                    <TableCell align="right">{todo.email}</TableCell>
                </TableRow>
            )
        })
    ) : (
        <p className="center"> There is no User! </p>
    )
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className="mytable" >
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todolist}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SimpleTable;