import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


function AllUsers() {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () =>{
        axios.get("http://localhost:8080/all")
        .then(response =>{
            console.log
            setUsers(response.data);
        })
        .catch(er => console.log(er));
    };

  return (
    <div>
      <center>  
      <div style={{height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
            <table border="2" cellPadding='0' cellSpacing='0' style={{borderColor:'white'}}>
                <thead style={{color:'white'}}>
                    <tr>
                        <th>User Name</th> 
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody style={{color:'wheat'}}>
                    {
                        users.map((user, index) => 
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan='2' align='center'><Link to={"/"} style={{color:'white'}}>Login Page</Link></td>
                    </tr>
                </tbody>
            </table>
      </div>
      </center>
    </div>
  )
}

export default AllUsers
