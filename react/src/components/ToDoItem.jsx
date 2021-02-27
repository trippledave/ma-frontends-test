import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  IconButton: { color: theme.palette.primary.main },
}));

export default function ToDoItem(props) {
  const { item, deleteItem } = props;
  const classes = useStyles();

  return (
    <Grid item xs component={Card} >

      <CardContent>
        <Typography variant="body1">
          {item.text}
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton
          className={classes.IconButton}
          onClick={() => deleteItem(item.id)}>
          <DeleteIcon />
        </IconButton >
      </CardActions>
    </Grid>
  );
};
