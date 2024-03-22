import { Link } from "react-router-dom";

export default function Customerhome(){
    return(
        <div>
             <h1>Welcome to customer home</h1> 
             <Link to='/exploresongs'>Explore songs</Link>
        </div>
    );
}