import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inline: {
      display: 'inline',
		},
  }),
);
export default function DorizeDetail({ 
  namaPemenang, 
  hadiah }: { 
  namaPemenang: string; 
  hadiah: string; }) {

  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={namaPemenang}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="caption"
                className={classes.inline}
                color="primary"
              >
                {hadiah}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </Grid>
  )
}