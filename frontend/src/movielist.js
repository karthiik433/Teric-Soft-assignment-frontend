import React,{useState,useEffect} from "react";
import {Route,Switch,BrowserRouter,Link} from "react-router-dom";
import MovieDetails from "./mvoieDetails";
import EditMovie from "./editMovie";
import DeleteMovie from "./deleteMovie";
import AddMovie from "./addMovie";
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

function MovieList(){
    const classes = useStyles();

    let [movies,setMovies] = useState(null);
    let [itemName,setItem] = useState("");
    let [editItem,setEditItem] = useState("");
    let [deleteMovie,setDeleteMovie] = useState("");
    let [addMovie,setMovie] = useState("");

    const displayDetails = (item)=>{
        setItem(item);
    }
    const editMovie = (item)=>{
        setEditItem(item);
    }
      

    useEffect(()=>{
     
        var raw = "";
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          credentials:"include"
        };
        
        fetch("http://localhost:9090/movie", requestOptions)
          .then(response => response.json())
          .then(result => setMovies(result))
          .catch(error => console.log('error', error)); 
          console.log(10);
    },[])
    return(
        <>
        <BrowserRouter>
        <Switch>
        <Route exact path="/addMovie"><AddMovie/></Route>
        <Route exact path="/movieDetails"><MovieDetails itemName={itemName} /></Route>
        <Route exact path="/editMovie"><EditMovie editItem={editItem}/></Route>
        <Route exact path="/deleteMovie"><DeleteMovie deleteMovie={deleteMovie} /></Route>
        <Route path="/">
        <Link style={{textDecoration:"none",marginLeft:"50%"}} to="/addMovie"><Button variant="contained" color="primary">Add Movie</Button></Link><br></br><br></br><br></br>
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
        {movies && movies.map((item,idx)=>{
            return(
                <div key={idx} >
                <Card className={classes.root} key={idx}>
                <CardActionArea>
                <CardContent style={{backgroundColor:`rgb(${idx*100},97,123)`}}>
                <Typography  gutterBottom variant="h5" component="h2">
                {item.name}
                 </Typography>
                 </CardContent>
                 </CardActionArea>
                 <CardActions>
               <Link style={{textDecoration:"none"}} to="/movieDetails"><Button size="small" color="primary" onClick={()=>displayDetails(item)}>details</Button></Link>
               <Link style={{textDecoration:"none"}} to="/editMovie"><Button size="small" color="primary" onClick={()=>editMovie(item)}>edit</Button></Link>
               <Link style={{textDecoration:"none"}} to="/deleteMovie"><Button size="small" color="primary" onClick={()=>setDeleteMovie(item)}>delete</Button></Link>
                </CardActions>
               </Card><br></br>
               </div>
            )
        })}
        </div>
        </Route>
        </Switch>
        </BrowserRouter>
        </>
    )
} 

export default MovieList;