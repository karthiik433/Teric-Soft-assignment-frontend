import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
import MovieList from "./movielist";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BasicTextFields from "./dummy";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function App() {
  let [registered,setRegistered] = useState(true);
  let [login,setLogin] = useState(true);
  let [signphone,setsignPhone] = useState();
  let [signpassword,setsignPassword] = useState("");
  let [logphone,setlogPhone] = useState();
  let [logpassword,setlogPassword] = useState("");

  const classes = useStyles();

  const reg = ()=>{
    console.log(19);
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"phone":Number(signphone),"password":signpassword});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      credentials:"include"
    };
    
    fetch("http://localhost:9090/account/register", requestOptions)
      .then(response =>{
       if(response.ok){
        setRegistered(true);
       }
       return response.text()
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const log = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"phone":Number(logphone),"password":logpassword});
        var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: raw,
         redirect: 'follow',
         credentials:"include"
            };

          fetch("http://localhost:9090/account/login", requestOptions)
          .then(response => {
            if(response.ok){
              setLogin(true);
            }
           return response.text()})
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
  }

  return (
    <div>
     {registered?
     <>
     {login?
     <MovieList/>:
     <>
      <h1 style={{textAlign:"center",color:"green"}}>LOGIN</h1>
      <form style={{textAlign:"center"}} className={classes.root} noValidate autoComplete="off">
     <label style={{fontSize:"20px"}}><b>Enter mobile number:</b></label>
     <TextField id="outlined-basic" label="mobile" variant="outlined" type="number" placeholder="Enter number" value={logphone} onChange={(e)=>setlogPhone(e.target.value)} ></TextField><br></br><br></br>
     <label style={{fontSize:"20px"}}><b>Enter password:</b></label>
     <TextField id="outlined-basic" label="password" variant="outlined" type="password" placeholder="Enter password" value={logpassword} onChange={(e)=>setlogPassword(e.target.value)} ></TextField><br></br><br></br>
     <Button variant="contained" color="primary" onClick={log} disabled={logphone==="" || logpassword===""} >Login</Button>
     </form>
     </>
    }
    
     </>:
     <>
     <h1 style={{textAlign:"center",color:"red"}}>REGISTER</h1>
     <form style={{textAlign:"center"}} className={classes.root} noValidate autoComplete="off">
     <label style={{fontSize:"20px"}}><b>Enter mobile number:</b></label>
     <TextField id="outlined-basic" label="mobile" variant="outlined" type="number" placeholder="Enter mobile number" value={signphone} onChange={(e)=>setsignPhone(e.target.value)} ></TextField><br></br><br></br>
     <label style={{fontSize:"20px"}}><b>Enter password:</b></label>
     <TextField id="outlined-basic" label="password" variant="outlined" type="password" placeholder="enter password" value={signpassword} onChange={(e)=>setsignPassword(e.target.value)} ></TextField><br></br><br></br>
     <Button variant="contained" color="primary" onClick={reg} disabled={signphone==="" || signpassword===""}>Register</Button>
     </form>
     
     {/* <Button variant="contained" color="primary">
      Hello World
    </Button> */}
    
     </>
     }
    </div>
  );
}

export default App;
