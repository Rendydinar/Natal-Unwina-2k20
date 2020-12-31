import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CustomStyle from './AppBar.module.css'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={CustomStyle.background}>
        <Typography variant="h3" color="primary" className={CustomStyle.title}>
          Dokumentasi Natal Unkriswina Sumba 2k20            
        </Typography>
        <Typography variant="subtitle1" className={CustomStyle.title}>
          Dan Mereka Akan Menamakan Dia Imauel - Mat 1:23           
        </Typography>
      </div>
    </div>
  );
}
