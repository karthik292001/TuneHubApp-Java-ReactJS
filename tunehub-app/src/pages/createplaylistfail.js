import { Link } from "react-router-dom";

export default function CreatePlaylistFail(){
    return(
        <div>
            <h1>Playlist is failed to add, Try again!</h1>
            <Link to='/createplaylist'>CREATE PLAYLIST</Link>
        </div>
    );
}