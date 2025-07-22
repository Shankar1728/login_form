import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [result,setResult] = useState("");
    const navigate = useNavigate();
    const handlelogin = (e) =>{
        e.preventDefault();
        console.log(username);
        console.log(password);
        axios.post("http://localhost:8080/login", {username:username, password:password})
        .then(Response => {
            setResult(Response.data);
            console.log(result);
            if(Response.data === 'Valid User !')
                navigate("/AllUsers");
            
        })
        .catch(err => console.log(err));
    }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <form onSubmit={handlelogin}>
        <div id='a'>
            <div style={{textAlign:'center',color:'white'}}><h1>LOGIN</h1></div>
            <div>
                <div style={{display:'flex',padding:'10px'}}>
                    <div style={{width:'50%',textAlign:'center',color:'white'}}><b>User Name</b></div>
                    <div style={{width:'45%'}}><input type="text" id="u" placeholder='Enter Username' name="username" value={username} onChange={(f)=>{setUsername(f.target.value)}} autoComplete='username' required style={{width:'100%'}}/></div>
                </div>
                <div style={{display:'flex',padding:'10px'}}>
                    <div style={{width:'50%',textAlign:'center',color:'white'}}><b>Password</b></div>
                    <div style={{width:'45%'}}><input type="password" id="p" placeholder='Enter Password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} autoComplete='current-password' required style={{width:'100%'}}/></div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',paddingTop:'20px'}}>
                <button type='submit'style={{color:'green'}}>LOGIN</button>
                
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:'5px', color:result === 'Valid User !' ? 'green' :'red', fontWeight:'bold'}}>{result}</div>
            <div style={{display:'flex'}}>
                {/* <div style={{color:'white',padding:'10px'}}>
                    <Link to="/AllUsers" style={{color:'white'}}>DETAILS</Link>
                </div> */}
                <div style={{color:'white',padding:'10px'}}>
                    <Link to="/Signup" style={{color:'white'}}>SIGN UP</Link>
                </div>
            </div>
         </div>
         </form>
    </div>
  )
}

export default Login