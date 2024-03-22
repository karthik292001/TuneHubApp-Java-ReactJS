import axios from "axios";
import { useEffect } from "react";

export default function ExploreSongs(){

    const email = sessionStorage.getItem('userEmail');
    
    useEffect(()=>{
        axios.post('http://localhost:8080/exploreSongs', { email })
        .then(response=>{
            if(response.data=="displaysongs"){
                window.location.href=('/map-viewsongs');
            }else if(response.data=="payment"){
                window.location.href=('/payment');
            }
        })
        .catch(error => console.error('There was an error!', error));
    },[]);
    return(
        <div> </div>
    );
}