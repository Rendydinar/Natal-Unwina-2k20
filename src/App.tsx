import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Views/Home';
import Lomba from './Views/Lomba';
import Tentang from './Views/Tentang';
import Panitia from './Views/Panitia';
import BottomNavigation from './Components/BottomNavigation';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#E40A2D',
      main: '#E40A2D',
      dark: '#E40A2D',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact={true} component={Home} />
        <Route path="/lomba" exact={true} component={Lomba} />
        <Route path="/panitia" exact={true} component={Panitia} />
        <Route path="/tentang" exact={true} component={Tentang} />
        <BottomNavigation />
      </Router>         
    </ThemeProvider>
  );
}

export default App;