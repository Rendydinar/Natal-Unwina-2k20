import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CustomStyle from './Lomba.module.css';
import Header from '../Components/Header';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import DataPesertaLomba from '../DataSource/PesertaLomba.json';
import CardPesertaLombaMenyayi from '../Components/Card/CardPesertaLombaMenyanyi';
import CardPesertaLombaPuisi from '../Components/Card/CardPesertaLombaPuisi';
import BannerLombaMenyanyi from '../static/img/menyayi-solo.jpeg';
import BannerLombaPuisi from '../static/img/puisi.jpeg';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  quotes: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#E40A2D'
  },
}));

export default function FullWidthTabs() {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };  

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div>
			<Header />
      <div className={CustomStyle.background}>
				<Typography variant="h3" color="primary" className={CustomStyle.title}>
					Kegiatan Pra-Natal UNKRISWINA Sumba 2020            
				</Typography>
				<Typography variant="body2" className={CustomStyle.title}>
					Ada 2 Kegiatan Pra-Natal 
        </Typography>
        <Typography variant="body2" color="primary" >Lomba Menyanyi Solo</Typography>           
        <Typography variant="body2" color="secondary" > & </Typography>           
        <Typography variant="body2" color="primary">Lomba Video Puisi</Typography>           
      </div>

      <div>
        <div className={clsx(CustomStyle.curvediv, CustomStyle.upper)}>
          <svg viewBox="0 0 1350 319">
              <path fill="#E40A2D" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          </div>  
          <div className={CustomStyle.curvediv}>
          <h1>Lomba Natal</h1>
          <svg viewBox="0 0 1350 319">
              <path fill="#fff" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>  
      </div>

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Menyanyi Solo" {...a11yProps(0)} />
          <Tab label="Video Puisi" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
            <img src={BannerLombaMenyanyi} className={CustomStyle.imgResponsive} alt="banner lomba" />
            <Typography variant="body2" paragraph>
              Lomba Menyanyi Solo, Informasi Lomba Seperti Yang Ada Di Brosur.
            </Typography>					
            <Typography variant="body2" paragraph>
              Lomba Ini Diikuti Oleh 25 Peserta, Namun Hanya Beberapa Perserta Saja Yang Berhasil Menggumpulkan Karya Lombannya.
            </Typography>					
            <Typography variant="body2" paragraph>
              Apapun Hasil Penilaian Dari Dewan Juri Merupakan Final, Tidak Dapat Diganggu Gugat.
            </Typography>					
            <Typography variant="body2" paragraph>
              Kami Panitia Natal UNKRISWINA SUMBA 2020 Mengucapkan Selamat Kepada Anda, Semoga Kamu Berhasil. Jangan Berkecil Hati Jikalau Kamu Tidak Memperoleh Juara, Kamu Sudah Menjadi Juara Untuk Dirimu Sendiri Karena Sudah Berjuang Sampai Saat Ini.             
            </Typography>					
            <Grid container spacing={3}>
              {DataPesertaLomba.data.menyanyisolo.map((data, key) => {
                return (
                  <Grid item xs={12} xl={6} sm={12} md={12} key={key}>
                    <Paper>
                      <CardPesertaLombaMenyayi namaPeserta={data.namaPeserta} gambarPeserta={data.gambarPeserta} bioSingkat={data.bioSingkat} videoLaguWajib={data.videoLaguWajib} videoLaguPilihan={data.videoLaguPilihan} juara={data.juara} />
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>	
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
					<img src={BannerLombaPuisi} className={CustomStyle.imgResponsive} alt="banner lomba" />
          <Typography variant="body2" paragraph>
						Lomba Video Puisi, Informasi Lomba Seperti Yang Ada Di Brosur.
					</Typography>					
					<Typography variant="body2" paragraph>
						Lomba Ini Diikuti Oleh 25 Peserta, Namun Hanya Beberapa Perserta Saja Yang Berhasil Menggumpulkan Karya Lombannya.
					</Typography>					
					<Typography variant="body2" paragraph>
            Apapun Hasil Penilaian Dari Dewan Juri Merupakan Final, Tidak Dapat Diganggu Gugat.
					</Typography>					
					<Typography variant="body2" paragraph>
            Kami Panitia Natal UNKRISWINA SUMBA 2020 Mengucapkan Selamat Kepada Anda, Semoga Kamu Berhasil. Jangan Berkecil Hati Jikalau Kamu Tidak Memperoleh Juara, Kamu Sudah Menjadi Juara Untuk Dirimu Sendiri Karena Sudah Berjuang Sampai Saat Ini.             
					</Typography>					
					<Grid container spacing={3}>
            {DataPesertaLomba.data.videopuisi.map((data, key) => {
              return (
                <Grid item xs={12} xl={6} sm={12} md={12} key={  key}>
                  <Paper>
                    <CardPesertaLombaPuisi namaPeserta={data.namaPeserta} gambarPeserta={data.gambarPeserta} bioSingkat={data.bioSingkat} videoPuisi={data.videoPuisi} juara={data.juara} score={data.score} catatan={data.catatan} />
                  </Paper>
                </Grid>
              );
            })}
					</Grid>	
        </TabPanel>
      </SwipeableViews>
      <Container>
        <div className={classes.quotes}>"{"Jika kekalahan itu diperlukan untuk membuat kita menjadi lebih kuat, maka menerima kekalahan adalah hal yang bijak."}"</div>
      </Container>
    </div>
  );
}
