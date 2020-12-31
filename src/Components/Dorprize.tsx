import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import DorizeDetail from './DorizeDetail';
import DataPemenangDorprize from '../DataSource/PemenangDorprize.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
		},
  }),
);

export default function AlignItemsList() {
  const classes = useStyles();

  return (
		<Grid container justify="center" style={{'marginTop': '35px'}}>
			<Typography variant="h6" color="primary">Pemenang Dorprize</Typography>
      <Grid container justify="center">
        <List className={classes.root}>
          {
            DataPemenangDorprize.data.map((pemenang, key) => {
              return (
                <DorizeDetail key={key} namaPemenang={pemenang.namaPemenang} hadiah={pemenang.hadiah} />
              )
            })
          }
          <Divider variant="inset" component="li" />
        </List>
  		</Grid>
    </Grid>
  );
}
