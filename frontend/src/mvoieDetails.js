import React,{useState,useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function MovieDetails(props){

    const classes = useStyles();
    return(
        <>
        <div style={{marginLeft:"50%"}} >
                <Card className={classes.root} style={{textAlign:"center"}}>
                <CardActionArea>
                <CardContent style={{backgroundColor:`rgb(245,197,133)`}}>
                <Typography  gutterBottom variant="h5" component="h2">
                 </Typography>
                <h1>Movie Name: {props.itemName.name}</h1>
                <h2>Year Of Release: {props.itemName.yearOfRelease}</h2>
                <h2>Genre: {props.itemName.genre}</h2>
                 </CardContent>
                 </CardActionArea>
               </Card><br></br>
               </div>
        
        </>
    )
}


export default MovieDetails;