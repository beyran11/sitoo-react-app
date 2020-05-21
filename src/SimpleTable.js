import React from 'react';
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
import {colors} from "@material-ui/core";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});



const SimpleTable = ({todos, deleteTodo}) => {

     const todolist = todos.length ? (
        todos.map( todo => {
            // add an index for checked boxes
            todo.checked = false;

            return (
                <TableRow  key={todo.id}>
                    <TableCell component="th" scope="row">
                        <Checkbox onChange={() =>{
                            console.log(todo.id) ;
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
                        <Tooltip onClick={() => {deleteTodo(todo.id)}} title="Delete">
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
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
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
    );
}

export default SimpleTable;