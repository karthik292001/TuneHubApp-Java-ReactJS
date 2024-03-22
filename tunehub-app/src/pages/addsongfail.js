import { Link } from "react-router-dom";

export default function AddSongsFail(){
    return(
        <div>
            <h1>Song is failed to add, Try again!</h1>
            <Link to='/map-addsongs'>ADD SONGS</Link>
        </div>
    );
}