import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

class BasicTextFields extends Component{
    //const classes = useStyles();
    state = {
        firstname: '',
        lastname: '',
        email: ''

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

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            firstname: '',
            lastname: '',
            email: ''
        })

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
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Add User
                    </Button>
                </p>




            </form>
        );
    }


}

export default BasicTextFields;