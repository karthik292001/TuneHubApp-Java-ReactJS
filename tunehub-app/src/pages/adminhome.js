import { Link } from "react-router-dom";

export default function Adminhome(){
    return(
        <div>
            <h1>Welcome Admin</h1>
            <Link to='/map-addsongs'>ADD SONGS</Link>
            <br/>
            <Link to='/map-viewsongs'>VIEW SONGS</Link>
            <br/>
            <Link to='/createplaylist'>CREATE PLAYLIST</Link>
            <br/>
            <Link to='/viewPlaylists'>VIEW PLAYLISTS</Link>
        </div>
    );
}