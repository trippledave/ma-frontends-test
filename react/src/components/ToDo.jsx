import React, { useState } from "react";
import Logo from "../assets/logo.png";
import ToDoItem from "./ToDoItem";
import Add from '@material-ui/icons/Add';
import { IconButton, Paper, Grid, TextField, Typography, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HelloWorld from "../HelloWorld";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  h1: { color: theme.palette.primary.main },
}));

// const useStyles2 = makeStyles((theme) => ({
//   underline: {
//     "&:before": {
//       borderBottom: "2px solid " + theme.palette.secondary.main
//     },
//     "&:hover:not($disabled):not($focused):not($error):before": {
//       borderBottom: "2px solid " + theme.palette.primary.main
//     },
//     "&:after": {
//       borderBottom: "3px solid purple"
//     }
//   },
//   disabled: {},
//   focused: {},
//   error: {}
// }));


export default function ToDo(props) {
  const { setTheme, module } = props;
  const classes = useStyles();
  // const classes2 = useStyles2();

  setTheme(module.theme);

  const [list, setList] = useState([
    { id: 1, text: "clean the house" },
    { id: 2, text: "buy milk" },
  ]);
  const [toDo, setToDo] = useState("");
  const [showError, setShowError] = useState(false);

  const generateId = () => {
    if (list && list.length) {
      return Math.max(...list.map((t) => t.id)) + 1;
    } else {
      return 1;
    }
  };

  const displayError = (errorOccured = true) => {
    setShowError(errorOccured);
  };
  const createNewToDoItem = () => {
    //validate todo
    if (!toDo) {
      displayError();
      return;
    } else {
      displayError(false);
    }
    const newId = generateId();
    const newToDo = { id: newId, text: toDo };
    setList([...list, newToDo]);
    setToDo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createNewToDoItem();
    }
  };

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <img src={Logo} alt="React logo" />

          <Typography variant="h1" className={classes.h1}>
            React To Do
            </Typography>
        </Grid>

        <Grid item xs={12}>
          {/* <Input */}
          <TextField
            // classes={classes2}
            error={showError}
            label="I need to..."
            value={toDo}
            onChange={handleInput}
            onKeyPress={handleKeyPress}
            helperText={showError ? "Please enter a todo!" : ""}
          />
          <IconButton aria-label="add" onClick={createNewToDoItem}>
            <Add />
          </IconButton>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center">
            {list.map((toDo) => (
              <ToDoItem key={toDo.id} item={toDo} deleteItem={deleteItem} />
            ))}
          </Grid>
        </Grid>
      </Grid>
      <HelloWorld></HelloWorld>
    </Paper>
  );
};