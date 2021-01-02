import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CustomStyle from './Tentang.module.css'
import clsx from 'clsx';
import Header from '../Components/Header';
import AboutIMG from '../static/img/banner-about.jpg'

const Tentang: React.FC = () => {
  return (
  	<div>
				<Header />
				<div className={CustomStyle.background}>
					<Typography variant="h4" color="primary" className={CustomStyle.title}>
						Natal Unkriswina Sumba 2k20 Dokumentasi            
					</Typography>
					<Typography variant="subtitle1" className={CustomStyle.title}>
						Yuk Kepo'in Kami 
					</Typography>
				</div>

				<div>
					<div className={clsx(CustomStyle.curvediv, CustomStyle.upper)}>
						<svg viewBox="0 0 1350 319">
							<path fill="#E40A2D" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
					</div>  
					<div className={CustomStyle.curvediv}>
						<h1>Tentang</h1>
						<svg viewBox="0 0 1350 319">
							<path fill="#fff" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
					</div>  
				</div>
        <Container>
          <Grid container>
            <Grid item xs={12} md={4} sm={4} xl={4} lg={4}>
              <img src={AboutIMG} className={CustomStyle.imgResponsive} alt="Tentang" />
            </Grid>
            <Grid item xs={12} md={8} sm={8} xl={8} lg={8}>
              <br/>
							<Typography variant="h6" color="primary" paragraph align="center">
									NATAL UNWINA 2k20
							</Typography>
              <Typography variant="body2" paragraph align="justify">
									Situs Dokumentasi Natal Universitas Kristen Wira Wacana Sumba Tahun 2020.
									Tema Natal Tahun Ini Adalah "Dan Mereka Akan Menamakan Dia Imanuel" Mat 1:23
              </Typography>
							<Typography variant="body2" align="justify" paragraph>
								Metode Natal Tahun Ini Dilakukan Secara Semi Offline, Staf Pegawai, Organisasi Kampus, Menghadiri Acara Secara Langsung Di Aula Kampus Unwina Bersama Dengan Panitia Natal, Sedangkan
								Dosen Mahasiswa/i Lain Yang Tidak Mendapatkan Undangan Untuk Menghadiri Acara Secara Langsung Menggunakan Zoom Meeting Untuk Menyaksikan Perayaan Natal.
							</Typography>
              <Typography variant="body2" paragraph align="justify">
								Ada 2 Jenis Kegiatan Pra-Natal, Yaitu Lomba Menyanyi Solo & Lomba Video Puisi Yang Hanya Boleh Diikuti Oleh Civitas Akedemika Unkriswina Sumba
              </Typography>
		          <Typography variant="body2" paragraph align="justify">
								Walaupun Dalam Masa Pandemi, Perayaan Natal Dilakukan Dengan Meriah Tentunya Mengikuti Protokol Kesehatan.	
              </Typography>


            </Grid>
          </Grid>
					<Typography variant="caption" paragraph align="center" style={{'marginTop': '100px'}}>
						Butuh <span style={{color: '#E40A2D'}}>Bantuan</span> ? <a href="mailto:r3ndydinar@gmail.com">WnnaCry</a>
					</Typography>
					<footer>
						<Typography variant="caption" color="primary" paragraph align="center">
							&copy; 2020 by Unkriswina Informers
						</Typography>
	        </footer>

        </Container>

  	</div>
  );
}

export default Tentang;
