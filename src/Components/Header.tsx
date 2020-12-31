import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor:'E40A2D'
    },
  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{'height': '70px', 'backgroundColor':'#E40A2D'}}>
        <Typography align="center" variant="h6" style={{'marginTop': '20px'}}>
          NATAL UNKRISWINA SUMBA 2k20            
        </Typography>
      </AppBar>
    </div>
  );
}
