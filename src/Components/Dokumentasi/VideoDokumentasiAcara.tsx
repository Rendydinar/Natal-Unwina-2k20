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
			<Grid container justify="center" color="primary" spacing={0}>
				<CardContent>
					<iframe title="Video Ibadah Perayaan Natal Unkriswina Sumba 2k20" src="https://drive.google.com/file/d/1t0t7Zl91ipFpRZFJI8ltG5xJ38LkClPz/preview" width="300" height="300"></iframe>
				</CardContent>
				<Typography variant="body2" align="center">
					Selamat Menyaksikan Ibadah Perayaan Hari Natal Universitas Kristen Wira Wacana Sumba 2020
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
						<ListItemText primary="00:00-19:59  - Pembuka" />
						<ListItemText primary="20:00-47:00  - Firman" />
						<ListItemText primary="47:01-54:15  - Persembahan Lagu" />
						<ListItemText primary="57:00-01:07:00  - Penyalaan Lilin Natal" />
						<ListItemText primary="01:13:00-:01:17:00  - Laporan Ketua Panitia Natal" />
						<ListItemText primary="01:18:15-:01:28:10  - Kata Sambutan Rektor Universitas Kristen Wira Wacana Sumba" />
						<ListItemText primary="01:31:00-:01:35:00  - Persembahan Lagu" />
						<ListItemText primary="01:35:05-:01:37:21  - Doa Syafaat" />
						<ListItemText primary="01:40:00-:01:54:40  - Dorprize" />
						<ListItemText primary="01:55:30-:02:05:00  - Foto Bersama" />
						<ListItemText primary="02:05:30-:01:16:50  - Persembahan Lagu" />
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
												color="primary"
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
													color="primary"
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
													color="primary"
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
													color="primary"
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
													color="primary"
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
													color="primary"
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
													color="primary"
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
													color="primary"
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
													color="primary"
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
