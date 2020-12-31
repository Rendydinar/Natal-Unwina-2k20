import React from 'react';
import Header from '../Components/Header';
import CustomStyle from './Panitia.module.css';
import Typography from '@material-ui/core/Typography';
import CardPanitia from '../Components/Card/CardPanitia'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

import DataPanitia from '../DataSource/Panitia.json';

const useStyles = makeStyles((theme: Theme) => ({
	widthFull: {
		maxWidth: '100%'
	},
	paddingST: {
		padding: '8px'
	}
}));

const Panitia: React.FC = () => {
	const classes = useStyles();

	return(
	<div>
		<Header />
			<div className={CustomStyle.background}>
				<Typography variant="h3" color="primary" className={CustomStyle.title}>
					Panitia Natal UNKRISWINA Sumba 2020            
				</Typography>
				<Typography variant="subtitle1" className={CustomStyle.title}>
					Lebih Dari 20 Mahasiswa Aktif Yang Turut <span>Menyelenggarakan</span> & <span>Menyukseskan</span>  Kegiatan Natal Kali Ini         
				</Typography>
				<Typography variant="subtitle1" className={CustomStyle.title}>
					Siapa Mereka Kaka-Kaka Yang Kece Tersebut ?        
				</Typography>
			</div>
			<div>
				<div className={clsx(CustomStyle.curvediv, CustomStyle.upper)}>
					<svg viewBox="0 0 1350 319">
						<path fill="#E40A2D" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
				</div>  
				<div className={CustomStyle.curvediv}>
					<h1>Panitia Natal</h1>
					<svg viewBox="0 0 1350 319">
						<path fill="#fff" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
				</div>  
			</div>
			<Container> 
				<Grid container justify="center" spacing={0}>
					{DataPanitia.data.map((data, key) => {
						return (
							<Grid item xs={12} xl={6} sm={12} md={12} key={key} className={classes.paddingST} >
								<Paper>
									<CardPanitia namaPanitia={data.namaPanitia} gambarPanitia={data.gambarPanitia} jabatan={data.jabatan} />
								</Paper>
							</Grid>
						);
					})}
				</Grid>	
			</Container>
		</div>
	)
}
export default Panitia;

// https://github.com/transitive-bullshit/react-background-slideshow