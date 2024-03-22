import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function ViewSongs(){

    const [songs, setSongs] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/map-viewsongs')
        .then(response=>{
            setSongs(response.data);
        })
        .catch(error => console.error('There was an error!', error));
    },[]);

    return(
        <table border="">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(song=>(
                    <tr key={song.id}>
                        <td>{song.name}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td width={300}>
                            <audio controls>
                                <source src={song.link} type="audio/mpeg"></source>
                            </audio>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    );
}