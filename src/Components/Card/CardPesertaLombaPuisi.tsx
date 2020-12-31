import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// Card MUI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';

// List MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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

export default function CardPesertaLombaPuisi({ 
  namaPeserta, 
  gambarPeserta, 
  bioSingkat, 
  videoPuisi, 
  juara, 
  score, 
  catatan }: { 
    namaPeserta: string; 
    gambarPeserta: string; 
    bioSingkat: string; 
    videoPuisi: string; 
    juara: number; 
    score: number; 
    catatan: string; }) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
					<Link href={videoPuisi} target="_blank" rel="noopener">
						Video Puisi
					</Link>
	      </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
            <ListItem>
              <Typography variant="subtitle1" paragraph>
                Score: {score}
              </Typography>
            </ListItem>
            <ListItem button>
              <Typography variant="subtitle1" paragraph>
                Catatan: {catatan}
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
