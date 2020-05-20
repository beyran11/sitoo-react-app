import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BasicTextFields from "./BasicTextFields";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function FormDialog ({addTodo}) {
    const [open, setOpen] = React.useState(false)
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="form-dialog">
            <Fab className="add-icon" color="primary" aria-label="add">
                <AddIcon onClick={handleClickOpen} />
            </Fab>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Manage Users</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add Users Here ...
                    </DialogContentText>
                    <BasicTextFields addTodo={addTodo} />

                </DialogContent>

            </Dialog>
        </div>
    );
}

export default FormDialog;