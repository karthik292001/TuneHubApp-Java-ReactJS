import axios from "axios";
import { useState } from "react";

export default function AddSongs(){


    const [name,setName] =useState(''); 
    const [artist,setArtist] =useState('');
    const [genre,setGenre] =useState('');
    const [link,setLink] =useState('');

    const handleFormSubmit = async()=>{
        const res = await axios.post('http://localhost:8080/addsongs',{name,artist,genre,link});
        if(res.data=="adminhome")
        {
            window.location.href="/"+res.data;
        }else{
            window.location.href="/"+res.data;
        }
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <label>Song Name: </label>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <br/><br/>
            <label>Song Artist: </label>
            <input type="text" name="artist" value={artist} onChange={(e)=> setArtist(e.target.value)}/>
            <br/><br/>
            <label>Song Genre: </label>
            <input type="text" name="genre" value={genre} onChange={(e)=> setGenre(e.target.value)}/>
            <br/><br/>
            <label>Song Link: </label>
            <input type="text" name="link" value={link} onChange={(e)=> setLink(e.target.value)}/>
            <br/><br/>
            <input type="submit" value="ADD SONGS"/>
        </form>
    );
}