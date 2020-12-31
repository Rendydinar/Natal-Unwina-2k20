import React from 'react';
import Typography from '@material-ui/core/Typography';
import Gallery from "react-photo-gallery";
import clsx from 'clsx';

import Carousel, { Modal, ModalGateway } from "react-images";
import VideoDokumentasiAcara from './VideoDokumentasiAcara'

import CustomStyle from './Dokumentasi.module.css';

// Import Foto Acara Natal
import PhotoAcaraNatal1 from '../../static/img/AacaraNatal/perayaan_natal_1.jpg';
import PhotoAcaraNatal2 from '../../static/img/AacaraNatal/perayaan_natal_2.jpg';
import PhotoAcaraNatal3 from '../../static/img/AacaraNatal/perayaan_natal_4.jpg';
import PhotoAcaraNatal4 from '../../static/img/AacaraNatal/perayaan_natal_6.jpg';
import PhotoAcaraNatal5 from '../../static/img/AacaraNatal/perayaan_natal_7.jpg';
import PhotoAcaraNatal6 from '../../static/img/AacaraNatal/perayaan_natal_8.jpg';
import PhotoAcaraNatal7 from '../../static/img/AacaraNatal/perayaan_natal_9.jpg';
import PhotoAcaraNatal8 from '../../static/img/AacaraNatal/perayaan_natal_10.jpg';
import PhotoAcaraNatal9 from '../../static/img/AacaraNatal/perayaan_natal_11.jpg';
import PhotoAcaraNatal10 from '../../static/img/AacaraNatal/perayaan_natal_12.jpg';
import PhotoAcaraNatal11 from '../../static/img/AacaraNatal/perayaan_natal_13.jpg';
import PhotoAcaraNatal12 from '../../static/img/AacaraNatal/perayaan_natal_5.jpg';

// Import Foto Pembagian Kartu Ucapan
import KartuUcapan1 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_1.jpg';
import KartuUcapan2 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_2.jpg';
import KartuUcapan3 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_3.jpg';
import KartuUcapan4 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_4.jpg';
import KartuUcapan5 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_5.jpg';
import KartuUcapan6 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_6.jpg';                 
import KartuUcapan7 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_7.jpg';
import KartuUcapan8 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_8.jpg';
import KartuUcapan9 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_9.jpg';
import KartuUcapan10 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_10.jpg';
import KartuUcapan11 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_11.jpg';
import KartuUcapan12 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_12.jpg';
import KartuUcapan13 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_13.jpg';
import KartuUcapan14 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_14.jpg';
import KartuUcapan15 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_15.jpg';
import KartuUcapan16 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_16.jpg';
import KartuUcapan17 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_17.jpg';
import KartuUcapan18 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_18.jpg';
import KartuUcapan19 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_19.jpg';
import KartuUcapan20 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_20.jpg';
import KartuUcapan21 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_21.jpg';
import KartuUcapan22 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_22.jpg';
import KartuUcapan23 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_23.jpg';
import KartuUcapan24 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_24.jpg';
import KartuUcapan25 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_25.jpg';
import KartuUcapan26 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_26.jpg';
import KartuUcapan27 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_27.jpg';
import KartuUcapan28 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_28.jpg';
import KartuUcapan29 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_29.jpg';
import KartuUcapan30 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_30.jpg';
import KartuUcapan31 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_31.jpg';
import KartuUcapan32 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_32.jpg';
import KartuUcapan33 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_33.jpg';
import KartuUcapan34 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_34.jpg';
import KartuUcapan35 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_35.jpg';
import KartuUcapan36 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_36.jpg';
import KartuUcapan37 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_37.jpg';
import KartuUcapan38 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_38.jpg';
import KartuUcapan39 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_39.jpg';
import KartuUcapan40 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_40.jpg';
import KartuUcapan42 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_42.jpg';
import KartuUcapan43 from '../../static/img/PembagianKartuUcapan/pembagian_ucapan_43.jpg';

const Dokumentasi: React.FC = () => { 
	const [currentImageAcaraNatal, setCurrentImageAcaraNatal] = React.useState(0);
	const [viewerIsOpenAcaraNatal, setviewerIsOpenAcaraNatal] = React.useState(false);
	const [currentImageKartuUcapan, setCurrentImageKartuUcapan] = React.useState(0);
	const [viewerIsOpeKartuUcapan, setviewerIsOpeKartuUcapan] = React.useState(false);
		
	const FotoPembagianKartuUcapan = [
		{
			source: KartuUcapan1,
			srcSet: KartuUcapan1,
			src: KartuUcapan1,
			width: 1,
			height: 2,
			title: "BPMJ GKS Jemaat Kambaniru" 
		},
		{
			source: KartuUcapan2,
			srcSet: KartuUcapan2,
			src: KartuUcapan2,
			width: 3,
			height: 1,
			title: "BPMJ GKS Jemaat Mauhau" 
		},
		{
			source: KartuUcapan3,
			srcSet: KartuUcapan3,
			src: KartuUcapan3,
			width: 1,
			height: 2,
			title: "BPMJ GKS Jemaat Kawangu" 
		},
		{
			source: KartuUcapan4,
			srcSet: KartuUcapan4,
			src: KartuUcapan4,
			width: 3,
			height: 4,
			title: "BPMJ GKS Jemaat Lambanapu" 
		},
		{
			source: KartuUcapan5,
			srcSet: KartuUcapan5,
			src: KartuUcapan5,
			width: 4,
			height: 3,
			title: "BPMJ GKS Jemaat Payeti" 
		},
		{
			source: KartuUcapan6,
			srcSet: KartuUcapan6,
			src: KartuUcapan6,
			width: 3,
			height: 4,
			title: "BPMS Sinode GKS" 
		},
		{
			source: KartuUcapan7,
			srcSet: KartuUcapan7,
			src: KartuUcapan7,
			width: 1,
			height: 3,
			title: "Dinas Kesehatan" 
		},
		{
			source: KartuUcapan8,
			srcSet: KartuUcapan8,
			src: KartuUcapan8,
			width: 4,
			height: 2,
			title: "Bank BRI Waingapu" 
		},
		{
			source: KartuUcapan9,
			srcSet: KartuUcapan9,
			src: KartuUcapan9,
			width: 2,
			height: 3,
			title: "Telkomsel Waingapu" 
		},
		{
			source: KartuUcapan10,
			srcSet: KartuUcapan10,
			src: KartuUcapan10,
			width: 1,
			height: 3,
			title: "Kantor Samsat Waingapu" 
		},
		{
			source: KartuUcapan11,
			srcSet: KartuUcapan11,
			src: KartuUcapan11,
			width: 4,
			height: 3,
			title: "Bank Mandiri Waingapu" 
		},
		{
			source: KartuUcapan12,
			srcSet: KartuUcapan12,
			src: KartuUcapan12,
			width: 1,
			height: 3,
			title: "Kantor PLN Waingapu" 
		},
		{
			source: KartuUcapan13,
			srcSet: KartuUcapan13,
			src: KartuUcapan13,
			width: 1,
			height: 4,
			title: "NSS Waingapu" 
		},
		{
			source: KartuUcapan14,
			srcSet: KartuUcapan14,
			src: KartuUcapan14,
			width: 3,
			height: 1,
			title: "Telkom Waingapu" 
		},
		{
			source: KartuUcapan15,
			srcSet: KartuUcapan15,
			src: KartuUcapan15,
			width: 4,
			height: 3,
			title: "BPMJ GKS Jemaat Waingapu" 
		},
		{
			source: KartuUcapan16,
			srcSet: KartuUcapan16,
			src: KartuUcapan16,
			width: 1,
			height: 1,
			title: "Bank BRI Yosudarso" 
		},
		{
			source: KartuUcapan17,
			srcSet: KartuUcapan17,
			src: KartuUcapan17,
			width: 1,
			height: 2,
			title: "Rumah Sakit Imanuel" 
		},
		{
			source: KartuUcapan18,
			srcSet: KartuUcapan18,
			src: KartuUcapan18,
			width: 2,
			height: 1,
			title: "RSUD Umbu Rara Meha" 
		},
		{
			source: KartuUcapan19,
			srcSet: KartuUcapan19,
			src: KartuUcapan19,
			width: 2,
			height: 3,
			title: "PT. Aquamor" 
		},
		{
			source: KartuUcapan20,
			srcSet: KartuUcapan20,
			src: KartuUcapan20,
			width: 2,
			height: 3,
			title: "BPMJ GKS Jemaat Uma Mapu" 
		},
		{
			source: KartuUcapan21,
			srcSet: KartuUcapan21,
			src: KartuUcapan21,
			width: 3,
			height: 2,
			title: "BPMJ GKS Jemaat Mauliru" 
		},
		{
			source: KartuUcapan22,
			srcSet: KartuUcapan22,
			src: KartuUcapan22,
			width: 1,
			height: 3,
			title: "SMA Negeri 1 Pandawai" 
		},
		{
			source: KartuUcapan23,
			srcSet: KartuUcapan23,
			src: KartuUcapan23,
			width: 2,
			height: 4,
			title: "SMK Negeri 5 Waingapu" 
		},
		{
			source: KartuUcapan24,
			srcSet: KartuUcapan24,
			src: KartuUcapan24,
			width: 4,
			height: 3,
			title: "SMP Negeri 1 Waingapu" 
		},
		{
			source: KartuUcapan25,
			srcSet: KartuUcapan25,
			src: KartuUcapan25,
			width: 1,
			height: 3,
			title: "SMP Kristen Waingapu" 
		},
		{
			source: KartuUcapan26,
			srcSet: KartuUcapan26,
			src: KartuUcapan26,
			width: 1,
			height: 4,
			title: "SMA Kristen Waingapu" 
		},
		{
			source: KartuUcapan27,
			srcSet: KartuUcapan27,
			src: KartuUcapan27,
			width: 4,
			height: 1,
			title: "RSK Lindimara" 
		},
		{
			source: KartuUcapan28,
			srcSet: KartuUcapan28,
			src: KartuUcapan28,
			width: 1,
			height: 3,
			title: "Kapolres Waingapu" 
		},
		{
			source: KartuUcapan29,
			srcSet: KartuUcapan29,
			src: KartuUcapan29,
			width: 2,
			height: 3,
			title: "SMA Katolik Anda Luri" 
		},
		{
			source: KartuUcapan30,
			srcSet: KartuUcapan30,
			src: KartuUcapan30,
			width: 4,
			height: 3,
			title: "Kodim 1601 Sumba Timur" 
		},
		{
			source: KartuUcapan31,
			srcSet: KartuUcapan31,
			src: KartuUcapan31,
			width: 3,
			height:4,
			title: "STT Terpadu" 
		},
		{
			source: KartuUcapan32,
			srcSet: KartuUcapan32,
			src: KartuUcapan32,
			width: 3,
			height: 4,
			title: "SMA Negeri 1 Waingapu" 
		},
		{
			source: KartuUcapan33,
			srcSet: KartuUcapan33,
			src: KartuUcapan33,
			width: 3,
			height: 4,
			title: "SMP Negeri 2 Waingapu" 
		},
		{
			source: KartuUcapan34,
			srcSet: KartuUcapan34,
			src: KartuUcapan34,
			width: 4,
			height: 3,
			title: "PT. Gudang Garam" 
		},
		{
			source: KartuUcapan35,
			srcSet: KartuUcapan35,
			src: KartuUcapan35,
			width: 4,
			height: 3,
			title: "MAX FM Waingapu" 
		},
		{
			source: KartuUcapan36,
			srcSet: KartuUcapan36,
			src: KartuUcapan36,
			width: 4,
			height: 1,
			title: "BPJS Waingapu" 
		},
		{
			source: KartuUcapan37,
			srcSet: KartuUcapan37,
			src: KartuUcapan37,
			width: 1,
			height: 3,
			title: "AKPER Waingapu" 
		},
		{
			source: KartuUcapan38,
			srcSet: KartuUcapan38,
			src: KartuUcapan38,
			width: 4,
			height: 2,
			title: "Dinas Pendidikan Waingapu" 
		},
		{
			source: KartuUcapan39,
			srcSet: KartuUcapan39,
			src: KartuUcapan39,
			width: 4,
			height: 1,
			title: "BPMJ GKS Jemaat Padadita Barat" 
		},
		{
			source: KartuUcapan40,
			srcSet: KartuUcapan40,
			src: KartuUcapan40,
			width: 1,
			height: 1,
			title: "" 
		},
		{
			source: KartuUcapan42,
			srcSet: KartuUcapan42,
			src: KartuUcapan42,
			width: 2,
			height: 3,
			title: "" 
		},
		{
			source: KartuUcapan43,
			srcSet: KartuUcapan43,
			src: KartuUcapan43,
			width: 4,
			height: 3,
			title: "Kantor Keuangan Daerah Waingapu" 
		}
  ];

  const FotoAcaraNatal = [
    {
			source: PhotoAcaraNatal2,
			srcSet: "",
			src: PhotoAcaraNatal2,
			width: 1,
			height: 1,
			title: "Suasana Natal" 
		},
    {
			source: PhotoAcaraNatal3,
			srcSet: "",
			src: PhotoAcaraNatal3,
			width: 1,
			height: 1,	
			title: "Kebersamaan Natal" 
		},
    {
			source: PhotoAcaraNatal4,
			srcSet: "",
			src: PhotoAcaraNatal4,
			width: 1,
			height: 1,	
			title: "Perayaan Natal" 
		},
    {
			source: PhotoAcaraNatal5,
			srcSet: "",
			src: PhotoAcaraNatal5,
			width: 3	,
			height: 1,
			title: "Aduh Kaka Baju Merah Muda e" 
		},
    {
			source: PhotoAcaraNatal6,
			srcSet: "",
			src: PhotoAcaraNatal6,
			width: 1,
			height: 3,
			title: "Perayaan Natal" 
		},
    {
			source: PhotoAcaraNatal7,
			srcSet: "",
			src: PhotoAcaraNatal7,
			width: 2,
			height: 2,
			title: "Perayaan Natal" 
		},
    {
			source: PhotoAcaraNatal1,
			srcSet: "",
			src: PhotoAcaraNatal1,
			width: 1,
			height: 1,	
			title: "Bertiga, Asik" 
		},
    {
			source: PhotoAcaraNatal8,
			srcSet: "",
			src: PhotoAcaraNatal8,
			width: 1,
			height: 2,
			title: "Perayaan Natal" 
		},
    {
			source: PhotoAcaraNatal9,
			srcSet: "",
			src: PhotoAcaraNatal9,
			width: 1,
			height: 1,
			title: "Perayaan Natal" 
		},
    {
			source: PhotoAcaraNatal10,
			srcSet: "",
			src: PhotoAcaraNatal10,
			width: 1,
			height: 3,
			title: "Perayaan Natal" 
		},
    {
			source: PhotoAcaraNatal11,
			srcSet: "",
			src: PhotoAcaraNatal11,
			width: 2,
			height: 1,
			title: "Perayaan Natal" 
		},
    {
			source: PhotoAcaraNatal12,
			srcSet: "",
			src: PhotoAcaraNatal12,
			width: 4,
			height: 3,
			title: "Perayaan Natal" 
		}
];

	const openLightboxAcaraNatal = React.useCallback((event, { photo, index }) => {
	  setCurrentImageAcaraNatal(index);
	  setviewerIsOpenAcaraNatal(true);
	}, []);
	
	const closeLightboxAcaraNatal = () => {
	  setCurrentImageAcaraNatal(0);
	  setviewerIsOpenAcaraNatal(false);
  };

	const openLightboxKartuUcapan = React.useCallback((event, { photo, index }) => {
	  setCurrentImageKartuUcapan(index);
	  setviewerIsOpeKartuUcapan(true);
	}, []);
	
	const closeLightboxKartuUcapan = () => {
	  setCurrentImageKartuUcapan(0);
	  setviewerIsOpeKartuUcapan(false);
  };

	return(
		<div>
			<div>
				<div className={clsx(CustomStyle.curvediv, CustomStyle.upper)}>
					<svg viewBox="0 0 1350 319">
						<path fill="#E40A2D" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
				</div>  
				<div className={CustomStyle.curvediv}>
					<h1>Dokumentasi</h1>
					<svg viewBox="0 0 1350 319">
						<path fill="#fff" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
				</div>  
			</div>
			<div className={CustomStyle.padding}>
				<Typography variant="h6" align="center" color="primary" paragraph>
					Perayaan Natal            
				</Typography>
				<div>
					<Gallery photos={FotoAcaraNatal} onClick={openLightboxAcaraNatal} />
					<ModalGateway>
						{viewerIsOpenAcaraNatal ? (
							<Modal onClose={closeLightboxAcaraNatal}>
								<Carousel
									currentIndex={currentImageAcaraNatal}
									views={FotoAcaraNatal.map(x => ({
										...x,
										srcset: x.srcSet,
										caption: x.title
									}))} />
							</Modal>
						) : null}
					</ModalGateway>	
				</div>												
			</div>				
			<div className={CustomStyle.padding}>
				<Typography variant="h6" align="center" color="primary" paragraph>
					Pembagian Kartu Ucapan Natal            
				</Typography>
				<div>
					<Gallery photos={FotoPembagianKartuUcapan} onClick={openLightboxKartuUcapan} />
					<ModalGateway>
						{viewerIsOpeKartuUcapan ? (
							<Modal onClose={closeLightboxKartuUcapan}>
								<Carousel
									currentIndex={currentImageKartuUcapan}
									views={FotoPembagianKartuUcapan.map(x => ({
										...x,
										srcset: x.srcSet,
										caption: x.title
									}))} />
							</Modal>
						) : null}
					</ModalGateway>	
				</div>					
			</div>
			<div className={CustomStyle.padding}>
				<VideoDokumentasiAcara />
			</div>				
		</div>
  )
}

export default Dokumentasi;