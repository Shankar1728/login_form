import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signup() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [result,setResult] = useState("");
    const navigate = useNavigate();

    const handlesigning = (e) =>{
        e.preventDefault();
        console.log(username);
        console.log(password);
        if(password !== confirmPassword){
          alert("Password doesn't match");
        }
        else{
          axios.post("http://localhost:8080/add", {username:username, password:password})
        .then(Response => {
            setResult(Response.data);
            console.log(result);
            if(Response.data === 1){
              alert("success");
              navigate("/");
            }
            
        })
        .catch(err => console.log(err));
        }
    }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        {result}
        <form onSubmit={handlesigning}>
        <div id='a'>
            <div style={{textAlign:'center',color:'white'}}><h1>New Account</h1></div>
            <div>
                <div style={{display:'flex',padding:'10px'}}>
                    <div style={{width:'50%',textAlign:'center',color:'white'}}><b>User Name</b></div>
                    <div style={{width:'45%'}}><input type="text" id="u" placeholder='Enter Username' name="username" value={username} onChange={(f)=>{setUsername(f.target.value)}} autoComplete='username' required style={{width:'100%'}}/></div>
                </div>
                <div style={{display:'flex',padding:'10px'}}>
                    <div style={{width:'50%',textAlign:'center',color:'white'}}><b>Password</b></div>
                    <div style={{width:'45%'}}><input type="password" id="p" placeholder='Enter Password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} autoComplete='current-password' required style={{width:'100%'}}/></div>
                </div>
                <div style={{display:'flex',padding:'10px'}}>
                    <div style={{width:'50%',textAlign:'center',color:'white'}}><b>Confirm Password</b></div>
                    <div style={{width:'45%'}}><input type="password" id="cf" placeholder='Re-Enter Password' name="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} autoComplete='current-password' required style={{width:'100%'}}/></div>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:'5px'}}>
                <button type='submit' style={{color:'green'}}>Sign Up</button>
            </div>
            <div>
                <div style={{color:'white',padding:'10px'}}>
                    <Link to="/" style={{color:'white'}}>LOGIN PAGE</Link>
                </div>
            </div>
            </div>
         </form>
    </div>
  )
}

export default Signup
