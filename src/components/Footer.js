import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import RestoreIcon from '@material-ui/icons/Restore';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import LocationOnIcon from '@material-ui/icons/LocationOn';
import SvgIcon from '@material-ui/core/SvgIcon';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LaunchIcon from '@material-ui/icons/Launch';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    
     <Link to="/"> <BottomNavigationAction label="Home" icon={<HomeIcon />} /></Link>
    <Link to="/products"> <BottomNavigationAction label="Products" icon={<FormatListBulletedIcon />} /></Link>
     <Link to="/about"> <BottomNavigationAction label="About Us" icon={<LaunchIcon />} /></Link>
    </BottomNavigation>
  );
}