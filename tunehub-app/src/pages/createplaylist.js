import axios from "axios";
import { useEffect, useState } from "react";

export default function CreatePlaylist(){


    const [songlist,setSongList]=useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:8080/createplaylist')
        .then(response=>{
            setSongList(response.data);
        })
        .catch(error => console.error('There was an error!', error));
    },[]);



    const [name,setName]=useState('');
    const [songs,setSongs]=useState([]);

    const handleCheckboxChange = (e) => {
        const song = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
            setSongs(prevSongs => [...prevSongs,  song]);
        } else {
            setSongs(prevSongs => prevSongs.filter(id => id !==  song));
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8080/addplaylist', {
            name: name,
            songs: songs.map(JSON.parse) // Parse each JSON string to object
        });
        if(res.data=="adminhome"){
            window.location.href="/"+res.data;
        }else if(res.data=="createplaylistfail"){
            window.location.href="/"+res.data;
        }
    }


    return(
        <form onSubmit={handleFormSubmit}>
            <label>Playlist Name:</label>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            {songlist.map(song=>(
                <div key={song.id}>
                    <input type="checkbox" name="songs" value={JSON.stringify(song)} onChange={handleCheckboxChange} />
                   
                    <label>{song.name}</label>
                </div>
            ))}
            <input type="submit" value="ADD PLAYLIST"/>
        </form>
    );
}
