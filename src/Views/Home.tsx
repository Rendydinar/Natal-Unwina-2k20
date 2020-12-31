import React from 'react';
import AppBar from '../Components/AppBar';
import Dokumentasi from '../Components/Dokumentasi/Dokumentasi';
import Dorprize from '../Components/Dorprize';
import Header from '../Components/Header';

const Home: React.FC = () => {
  return(
		<div>
			<Header />
			<AppBar />
			<Dokumentasi />
			<Dorprize />
		</div>
  )
}
export default Home;