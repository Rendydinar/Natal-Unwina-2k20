import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    height: 300,
  },
});

export default function CardPanitia({ 
  namaPanitia, 
  gambarPanitia, 
  jabatan }: { 
  namaPanitia: string; 
  gambarPanitia: string; 
  jabatan: string; }) {

  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={gambarPanitia}
          title={namaPanitia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {namaPanitia}
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            {jabatan}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
