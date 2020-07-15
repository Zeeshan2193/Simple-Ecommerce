import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
      textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
},
   btnPro:{
       margin: '0 auto',
       marginRight: '-20px',
       position : 'absolute',
       top :'50%',
       right:'40%',
       width: '200px',
       height:'10%', 
   },
 
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
      <Button variant="contained" color="primary" className={classes.btnPro}>
        Check Products
      </Button>
      
    </div>
  );
}