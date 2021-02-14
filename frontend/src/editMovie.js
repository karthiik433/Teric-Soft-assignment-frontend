import React,{useState,useEffect} from "react";
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

function EditMovie(props){
    const classes = useStyles();
    let [editedName,setEditedName] = useState(props.editItem.name);
    let [editedYear,setEditedYear] = useState(props.editItem.yearOfRelease);
    let [editedGenre,setEditedGenre] = useState(props.editItem.genre);

    const submit = ()=>{
       
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"name":editedName,"yearOfRelease":Number(editedYear),"genre":editedGenre});

            var requestOptions = {
             method: 'PUT',
             headers: myHeaders,
             body: raw,
             redirect: 'follow'
};

fetch(`http://localhost:9090/movie/${props.editItem._id}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
    return(
        <div style={{textAlign:"center"}}>
        <h1>Edit and Update Movie Details</h1>
        <TextField id="outlined-basic" label="movie name" variant="outlined" type="text" value={editedName} onChange={(e)=>setEditedName(e.target.value)} ></TextField><br></br><br></br>
        <TextField id="outlined-basic" label="year" variant="outlined" type="text" value={editedYear} onChange={(e)=>setEditedYear(e.target.value)} ></TextField><br></br><br></br>
        <TextField id="outlined-basic" label="genre" variant="outlined" type="text" value={editedGenre} onChange={(e)=>setEditedGenre(e.target.value)} ></TextField><br></br><br></br>
        <Button variant="contained" color="primary" onClick={submit}>Sumbit</Button>
        </div>
    )
}

export default EditMovie;
