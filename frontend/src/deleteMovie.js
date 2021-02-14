import React from "react";

function DeleteMovie(props){
    const sub = ()=>{
        var raw = "";
        var requestOptions = {
          method: 'DELETE',
          body: raw,
          redirect: 'follow'
        };
        
        fetch(`http://localhost:9090/movie/${props.deleteMovie._id}`, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
    return(
        <div style={{backgroundColor:"green",}}>
        <button style={{marginLeft:"50%",marginTop:"50px",backgroundColor:"red",width:"150px",height:"50px",borderRadius:"10px"}} onClick={sub}>Delete Movie</button>
        </div>
    )
}

export default DeleteMovie;