import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function AddMovie(){
    const classes = useStyles();
    let [name,setName] = useState("");
    let [year,setYear] = useState(null);
    let [genre,setGenre] = useState("");

    const sub = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"name":name,"yearOfRelease":Number(year),"genre":genre});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:9090/movie", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
    return(
        <div style={{textAlign:"center"}}>
        <h1 >Add a Movie</h1>
        <label style={{fontSize:"20px"}}><b>Enter movie Name: </b> </label>
        <TextField id="outlined-basic" label="movie name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}></TextField><br></br><br></br>
        <label style={{fontSize:"20px"}}><b>Enter Year: </b></label>
        <TextField id="outlined-basic" label="year" variant="outlined" value={year} onChange={(e)=>setYear(e.target.value)}></TextField><br></br><br></br>
        <label style={{fontSize:"20px"}}><b>Enter Genre: </b></label>
        <TextField id="outlined-basic" label="genre" variant="outlined" value={genre} onChange={(e)=>setGenre(e.target.value)}></TextField><br></br><br></br>
        <Button variant="contained" color="primary" onClick={sub}>Sumbit</Button>
        </div>
    )
}

export default AddMovie;