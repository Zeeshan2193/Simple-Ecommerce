import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
   
  },
  title:{
    marginLeft : "20px",
    textDecoration:"none",
    color: "white",
    
},
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" className={classes.title}>
          <Link to="/" className="nav">Home</Link>{' '}
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link to="/products" className="nav">Products</Link>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link to ="/contact" className="nav">Contact Us</Link>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.title}>
          <Link to="about" className="nav">About Us</Link>{' '}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}