import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// Card MUI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: '50px',
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function CardPesertaLombaMenyayi({ 
  namaPeserta, 
  gambarPeserta, 
  bioSingkat, 
  videoLaguWajib, 
  videoLaguPilihan, 
  juara }: { 
    namaPeserta: string; 
    gambarPeserta: string; 
    bioSingkat: string; 
    videoLaguWajib: string; 
    videoLaguPilihan: string; 
    juara: number; }) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{juara}
					</Avatar>
				}
				action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={namaPeserta}
      />
      <img height="320" style={{width: '100%', objectFit: 'cover', objectPosition: 'center'}} src={gambarPeserta} alt={namaPeserta} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {bioSingkat}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
				<Button size="small" color="primary">
					<Link href={videoLaguWajib} target="_blank" rel="noopener">
						Lagu Wajib
					</Link>
	      </Button>
        <Button size="small" color="primary">
					<Link href={videoLaguPilihan} target="_blank" rel="noopener">
						Lagu Pilihan
					</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
