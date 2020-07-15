import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Shoes from './shoes.json';
 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
   // flexGrow: 1,
    display:"flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    margin:"5px 20px",
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"70%",
     
  },
  btnBuy:{
      cursor:"pointer",
    width: "100%",
    height:"10%",
    backgroundColor:"skyBlue",
    color:"Black",
    margin: "10px 0px",
  },
  sImg:{
      width: "80%",
      height:"90%",
  }
  
}));

export const ProductDetail = () =>{
    let [cls , setCls] = useState("notSuccess");
  const classes = useStyles();
  let { id } = useParams();
  if(! Shoes[id])
  {
      return <h2>No Product Found</h2>
  }

   const SubEvent = (event) =>{
       setCls("success");
   }

  return (

    <div className={classes.root}>
      <Grid container >
         
        <Grid item xs={8}>
          <Paper className={classes.paper}>
          
    <img src={Shoes[id].img} className={classes.sImg}  alt={Shoes[id].name} />
    
          </Paper>
        </Grid>
        <Grid item xs={4}>
       
          <Paper className={classes.paper}>
          <span><strong>{Shoes[id].name}     </strong></span>
        <span>{Shoes[id].price}</span><br /><br />
              
  <p>{Shoes[id].detail}</p>
  <button className={classes.btnBuy} onClick={SubEvent}>BUY</button>

  <Alert variant="filled" severity="success" className={cls}>
        Your Order Is Confirmed
      </Alert>
      <Link to ="/" className={cls}>Go To Home</Link>
  </Paper>
        </Grid>
         
        
      </Grid>
    </div>
  );
}

 
