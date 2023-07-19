import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const Login = ()=>{
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    console.log(username);
    console.log(password);
    const  handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
        username: username,
          password:password

        }
       console.log({data});
       try{
        const response = await fetch ('https://dummyjson.com/auth/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            // username:'atuny0',
            // password:'9uQFF1Lh'
        },
        body :JSON.stringify(data),
       })
       const result = await response.json();
       console.log(result);

       }
       catch(error){
        console.log(error.message);
       }
    }

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input placeholder="Enter username" type="text"
                onChange={(e)=>setUserName(e.target.value)}/>
                <br/>
                <br/>
                <input placeholder="Enter Password" type="password"
                onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <br/>
                <Link to ="/Home"> <button type="submit">Login</button></Link>
               
            </form>
        </div>
    )
}

export default Login;