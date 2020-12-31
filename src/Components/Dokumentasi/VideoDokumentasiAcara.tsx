import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// Card MUI
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// List MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import Pingky from '../../static/img/no-profile.png';
import Renata from '../../static/img/Penayalayanan/renata.jpg';
import Uhrik from '../../static/img/Penayalayanan/uhrik.jpg';
import Tya from '../../static/img/Penayalayanan/tya.jpeg';
import Erlia from '../../static/img/Penayalayanan/ambu.jpg';
import Ambu from '../../static/img/Penayalayanan/ambu.jpg';
import Agan from '../../static/img/Penayalayanan/agan.jpg';
import Januar from '../../static/img/Penayalayanan/januar.jpg';
import Drum from '../../static/img/Penayalayanan/drum.jpeg';
import Bass from '../../static/img/Penayalayanan/kobul.jpeg';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
		  paddingTop: '56.25%', // 16:9
		  width: 320
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
    }
  }),
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
		<Card>
				<CardHeader
					title="Ibadah Natal UKRISIWNA Sumba 2020"
					subheader="Jumat 18 Desember 2020"
				/>
			<Grid style={{marginTop: '-90px'}} container justify="center" color="primary" spacing={0}>
				<CardContent>
					<video width="330" height="330" controls >
						<source src="https://r4---sn-npoe7nes.c.drive.google.com/videoplayback?expire=1609404245&ei=FVftX4jPFZnjrvIP4I-q6AQ&ip=180.249.167.38&cp=QVRFQUVfU1JSRlhPOl9XdkN5ZUU1NzJjS0o4dVk4OUJjVF9PREhtZlFRaUdkb0pPTVQ2emR6Um8&id=37539eb6e19e87f4&itag=18&source=webdrive&requiressl=yes&mh=b9&mm=32&mn=sn-npoe7nes&ms=su&mv=m&mvi=4&pl=22&ttl=transient&susc=dr&driveid=1Je2vWOLdyljvEv7h2MWjE0Oc64TGipOi&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=8387.072&lmt=1608296297553514&mt=1609389379&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgXSvAka8WA4jRZeSfBwuM1beJtYphWLsumaZa--u3kPACIHVCh31RERX74HScUbf2N6K9eScZTrEFe_kDG0Dsk7wv&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgNywtyZpJ6ZQGEWVGIvY5CJmLxYaWURFSZSWyInDngUgCIQCB9eGrEBsNGgFNnc_5jVA7-bzrI-BFfVjjqMtU8Xh3Ig==&cpn=Ebchnrq4CODmT2mT&c=WEB_EMBEDDED_PLAYER&cver=20201218" type="video/mp4"/>
					</video>
				</CardContent>
				<Typography variant="body2" align="center" >
					Selemat Menyaksikan Ibadah Perayaan Hari Natal Universitas Kristen Wira Wacana Sumba 2020
				</Typography>
				<CardActions disableSpacing>
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
				</Grid>

				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
					<Typography variant="subtitle1" color="primary">Time Stamp:</Typography>
					<List style={{'marginLeft': '25px'}}>
						<ListItemText primary="00:10-14:00  - Pembuka" />
						<ListItemText primary="00:10-14:00  - Pembuka" />
						<ListItemText primary="00:10-14:00  - Pembuka" />
						<ListItemText primary="00:10-14:00  - Pembuka" />
						<ListItemText primary="00:10-14:00  - Pembuka" />
						<ListItemText primary="00:10-14:00  - Pembuka" />
						<ListItemText primary="00:10-14:00  - Pembuka" />
						<ListItemText primary="00:10-14:00  - Pembuka" />
					</List>
					<Divider />
					<Typography variant="subtitle1" color="primary">Penatayanan:</Typography>
						<List >
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar alt="WL" src={Renata} />
								</ListItemAvatar>
								<ListItemText
									primary="Renata"
									secondary={
										<React.Fragment>
											<Typography
												component="span"
												variant="body2"											
												color="primary"
											>
												Worship Leader
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
							<Divider variant="inset" component="li" />
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar alt="MC" src={Uhrik} />
								</ListItemAvatar>
								<ListItemText
									primary="Uhrik"
									secondary={
										<React.Fragment>
											<Typography
												component="span"
												variant="body2"											
												color="textPrimary"
											>
												MC
											</Typography>
										</React.Fragment>
									}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="MC" src={Tya} />
									</ListItemAvatar>
									<ListItemText
										primary="Tya"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"											
													color="textPrimary"
												>
													MC
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="SG" src={Erlia} />
									</ListItemAvatar>
									<ListItemText
										primary="Erlia"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"											
													color="textPrimary"
												>
													Singer
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="SG" src={Ambu} />
									</ListItemAvatar>
									<ListItemText
										primary="Ambu"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"											
													color="textPrimary"
												>
													Singer
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="PM" src={Agan} />
									</ListItemAvatar>
									<ListItemText
										primary="Agan"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"											
													color="textPrimary"
												>
													Gitaris
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="PM" src={Januar} />
									</ListItemAvatar>
									<ListItemText
										primary="Januar"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"											
													color="textPrimary"
												>
													Pemain Keyboard
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="PM" src={Drum} />
									</ListItemAvatar>
									<ListItemText
										primary="Drummer"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"											
													color="textPrimary"
												>
													Pemain Drum
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="PM" src={Bass} />
									</ListItemAvatar>
									<ListItemText
										primary="Bass"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"											
													color="textPrimary"
												>
													Pemain Bass
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="HT" src={Pingky} />
									</ListItemAvatar>
									<ListItemText
										primary="Pak Pingky"
										secondary={
											<React.Fragment>
												<Typography
													component="span"
													variant="body2"											
													color="textPrimary"
												>
													Host
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
							</List>
						</CardContent>
					</Collapse>
			</Card>
  );
}
