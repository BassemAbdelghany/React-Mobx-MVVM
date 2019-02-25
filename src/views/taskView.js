import React, { Component } from 'react';
import {  observer } from 'mobx-react';
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: "100%",
        backgroundColor: theme.palette.background.paper,
        button: {
            margin: theme.spacing.unit,
        },
        input: {
            display: 'none',
        },
        icon: {
            margin: theme.spacing.unit,
            fontSize: 24,
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 200,
        }
        
    },
    Done:{
        color:'#FFFFFF!important'
    },
    Pendding:{
        color:'yellow'
    }
});



export const TaskView = withStyles(styles)(observer(class TaskView extends Component{

    render(){
        const model = this.props.model;
        const { classes } = this.props;

        const buttonStyle = {
            margin: 12,
          };

        return(
            <div>
                
                <p>
                    <Button variant="contained" style={buttonStyle} className={classes.button} onClick={() => model.add()}>New Task</Button>
                    <Button variant="contained" style={buttonStyle} color="primary" className={classes.button} onClick={() => model.load()}>Reload Tasks</Button>
                    <Button variant="contained" style={buttonStyle} color="secondary" className={classes.button} onClick={() => model.save()}>Save Tasks</Button>
                </p>
                <List dense className={classes.root}>
                    {model.tasks.map((task, i) => <SingleTaskView key={task.id} model={model} task={task}/>)}
                 </List>
            </div>
        );

    }
}));


export const SingleTaskView = withStyles(styles)(observer(class SingleTaskView extends Component{

    render(){
        
        const model = this.props.model;
        const task = this.props.task;
        const { classes } = this.props;
        const styles = {
            status: task.status ? 'Done':'Pendding' 
        }

        return(
            
            <ListItem key={this.props.key} button >
                <Checkbox onChange={e => task.status = e.target.checked} checked={task.status}/>
                <ListItemText primary={task.text} />
                <TextField
                id={task.id}
                placeholder="Enter task description"
                margin="normal"
                classes={classes.textField}
                value={task.text}
                onChange={e => task.text = e.target.value}
                />
                <ListItemText classes={{root: styles.status}} primary={task.status?'Done' : 'Pending'}/>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Remove" onClick={() => model.remove(task)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            
            
        );
    }
}));
