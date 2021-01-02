import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router-dom'

// Icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '40px',
    position: 'fixed',
    bottom: 0
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event: any, newValue: any) => {
    history.push(`/${newValue}`);
    setValue(newValue);
  };


  return (
    <BottomNavigation
      value={value}
      onChange={handleChange} 
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />    
      <BottomNavigationAction label="Lomba" value="lomba" icon={<EmojiEventsIcon />} />
      <BottomNavigationAction label="Panitia" value="panitia" icon={<GroupIcon />} />
      <BottomNavigationAction label="Tentang" value="tentang" icon={<InfoIcon />} />
    </BottomNavigation>
  );
}
