import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
}));

class BasicTextFields extends Component{

    state = {
        firstname: '',
        lastname: '',
        email: '',
        created: '2016',
        modified: '2020'
    }

    handleChangeFname = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    handleChangeLname = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            id: Math.random()
        })
        this.props.addTodoPost(this.state)
    }

    render() {

        return (
            <form className={useStyles.root} noValidate autoComplete="off">
                <p>
                    <TextField id="standard-basic" label="First Name"  variant="outlined" onChange={this.handleChangeFname} value={this.state.firstname} />
                </p>
                <p>
                    <TextField id="filled-basic" label="Last Name" variant="outlined" onChange={this.handleChangeLname} value={this.state.lastname} />
                </p>
                <p>
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={this.handleChangeEmail} value={this.state.email} />
                </p>
                <p>
                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                        Add User
                    </Button>
                </p>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodoPost: (todo) => { dispatch({type: 'ADD_POST',todo:todo}) }
})

export default connect(mapStateToProps,mapDispatchToProps)(BasicTextFields);