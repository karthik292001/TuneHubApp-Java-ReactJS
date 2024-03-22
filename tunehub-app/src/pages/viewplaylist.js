import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewPlaylist(){

    const [playlists,setPlaylists]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/viewPlaylists')
        .then(response=>{
            setPlaylists(response.data);
        })
        .catch(error => console.error('There was an error!', error));
    },[]);
   
    return(
        <table border="">
            <thead>
                <tr>
                    <th>Playlist ID</th>
                    <th>Playlist NAME</th>
                    <th>Playlist SONGS</th>
                </tr>
            </thead>
            <tbody>
                {playlists.map(playlist=>(
                    <tr key={playlist.id}>
                        <td>{playlist.id}</td>
                        <td>{playlist.name}</td>
                        <td>
                        {playlist.songs.map(song=>( 
                            <ul>
                                <li key={song.id}>
                                    <span>{song.name}</span>
                                    <audio controls>
                                         <source src={song.link} type="audio/mpeg"></source>
                                     </audio>
                                </li>
                            </ul>
                        ))} 
                        </td>     
                    </tr>
                ))}
            
            </tbody>
        </table>
    );
}