import axios from "axios";
import { useState } from "react";

export default function Register(){

    const [username,setUsername] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [gender,setGender] =useState('');
    const [role,setRole] =useState('');
    const [address,setAddress] =useState('');
    

    const handleFormSubmit = async()=>{
       const res = await axios.post('http://localhost:8080/register',{username,email,password,gender,role,address});
       window.location.href=("/map-login");
       
    }

    return(
        <div class="container">
            <form onSubmit={handleFormSubmit} class="text-center">
                <h2>Register</h2>
                <label>User Name:</label>
                <input type="text" name="username" value={username} onChange={(e)=> setUsername(e.target.value)} class="form-control"/>
                <br/>
                <label>Email ID:</label>
                <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} class="form-control"/>
                <br/>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} class="form-control"/>
                <br/>
                <label>Gender:</label>
                <div>
                    Male<input type="radio" name="gender" value="male" onChange={(e)=> setGender(e.target.value)}/>
                    Female<input type="radio" name="gender" value="female" onChange={(e)=> setGender(e.target.value)}/>
                    Other<input type="radio" name="gender" value="other" onChange={(e)=> setGender(e.target.value)}/>
                </div>
                <br/>
                <label>Role:</label>
                <div>
                    Admin<input type="radio" name="role" value="admin" onChange={(e)=> setRole(e.target.value)}/>
                    Customer<input type="radio" name="role" value="customer" onChange={(e)=> setRole(e.target.value)}/>
                </div>
                <br/>
                <label>Address:</label>
                <textarea name="address" class="form-control" value={address} onChange={(e)=> setAddress(e.target.value)}></textarea>
                <br/>
                <input type="submit" value="REGISTER" class="btn"/>
            </form>
        </div>
    );
}   