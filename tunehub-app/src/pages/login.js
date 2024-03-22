import axios from 'axios';
import { useState } from 'react';


export default function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleFormSubmit = async () => {
        const response = await axios.post("http://localhost:8080/login",{email:email,password:password});
        sessionStorage.setItem('userEmail', email);
        if(response.data=="login"){
            window.location.href=("/map-login");
        }else if(response.data=="adminhome" || response.data=="customerhome"){
            window.location.href="/"+response.data;
        }
    }
    

    return(
        <div class="container">
            <form onSubmit={handleFormSubmit} class="text-center">
                <h2>Login</h2>
                <label>Email ID:</label>
                <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} class="form-control"/>
                <br/>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} class="form-control"/>
                <br/>
                <input type="submit" value="LOGIN" class="btn"/>
            </form>
        </div>
    );
}