import './stylesheets/Main.css';
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import {Container} from 'reactstrap';

// https://randomuser.me/api   Different Random API for random user details

interface UserName {
  $oid: string,
}
interface UserInfo {
  _id: UserName;
  email: String;
  fist_name: String;
  lastname: string;
  firstname: String;
  last_name: String;
  username: String;
}

const fetchRandomData = ()=>{
 return  axios.get('http://15.207.229.231:8000/machstatz/get_all_users')
  .then(({data})=>{
    return data;
  })
  .catch(err => {
    console.log(err);
  });
}
 
export default function App(){
  const [userInfos, setUserInfos] = useState([]);
  const [email, setEmail] = useState('');
  const [fist_name, setFistName] = useState('');
  const [last_name, setLastName] = useState('');
  const [pwd, setPwd] = useState('');
  const [username, setUserName] = useState('');
  const [email2, setEmail2] = useState('');

  const fetchDataDynamically = () => {
   return  fetchRandomData().then((randomData)=>{
      setUserInfos(randomData);
      alert("Data Re-fetched Successfully");
  });
  }

const deleteUser = e => {
  e.preventDefault()
  fetch(`http://3.6.93.159:7883/machstatz/delete_existing_user`, {
    method: 'DELETE',
    body: JSON.stringify({'email': email2})
  })
  .then(()=>{
    if(email2=='') return alert("Please enter Email of the user to delete.");
    var temp = false;
    var existingUsers = userInfos;
    var rem;
    for(let x in existingUsers){
      if(existingUsers[x]['email'] == email2){
        temp=true;
        rem = x;
        break;
    }
    }
    
    if(temp){
      return fetchRandomData().then((randomData)=>{
        console.log(JSON.stringify(randomData, null, 2));
        randomData.splice(rem,1);
        setUserInfos(randomData);
        alert("User deleted successfully.");
      });
    }
    else {
      alert("Unable to delete the user or user may not exist.");
    }
  })
  .catch(()=>alert("There was an error"));
}  

const submit = e => {
  e.preventDefault()
  fetch(`http://15.207.229.231:8000/machstatz/add_new_user`, {
    method: 'POST',
    body: JSON.stringify({ email, fist_name, last_name, pwd, username }),
  })
  .then(()=> {
    if(email=='' || fist_name=='' || pwd=='' || username=='')  return alert("Please fill all the mandatory fields to add a new user.");
    var temp = true;
    var existingUsers = userInfos;
    for(let x in existingUsers){
        if(existingUsers[x]['email'] == email || existingUsers[x]['username']== username)
          temp=false; 
    }
    if(temp){
    return fetchRandomData().then((randomData)=>{
      setUserInfos(randomData);
      alert("Created the new user successfully.");
    });}
    else{
      alert("User with provided email or username is already exist. Can't add duplicates");
    }    
  })
  .catch(()=>alert("There was an error"));
  }

  useEffect(()=>{
      fetchRandomData().then((randomData)=>{
      setUserInfos(randomData);
    });

  }, []);

  return (
    <div>
      <h1 className="headerTop">Fetched Random user Data</h1>
      <Container className="container-grid">
        {userInfos.map((userInfo: UserInfo, idx: number)=>(
          <div key={idx} >
            <Card className="inside-card">
             <h4>{userInfo.fist_name}{userInfo.firstname}{' '}{userInfo.lastname}{userInfo.last_name}</h4>
            </Card>
          </div>
            ))}
      </Container>
      
      <div className="form-container-block">
      <form className="form-container" onSubmit={submit}>
        <h3>ADD USER</h3>
        <h4 htmlFor="email">Email</h4>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="*Enter Email Id"
          onChange={e => setEmail(e.target.value)}
        />
        <h4 htmlFor="fist_name">First Name</h4>
        <input
          name="fist_name"
          value={fist_name}
          placeholder="*Enter your First Name"
          onChange={e=>setFistName(e.target.value)}
          />

        <h4 htmlFor="last_name">Last Name</h4>
        <input
          name="last_name"
          value={last_name}
          placeholder="Enter your Last Name"
          onChange={e=>setLastName(e.target.value)}
          />
      
        <h4 htmlFor="pwd">Password</h4>
        <input
          type="password"
          name="pwd"
          value={pwd}
          placeholder="*Enter Password"
          onChange={e=>setPwd(e.target.value)}
          />
        
        <h4 htmlFor="username">Username</h4>
        <input
          name="username"
          value={username}
          placeholder="*Enter your Username"
          onChange={e=>setUserName(e.target.value)}
          />
        <br />
        <button style={{
          backgroundColor: "lightseagreen",
          borderRadius: "5px",
          marginTop: "15px",
          marginLeft: "10px",
          fontSize: "20px",
          alignSelf: "bottom",
        }} type="submit">Add User</button>
      </form>
      <div className="form-container2">
      <form className="delete-form" onSubmit={deleteUser}>
        <h3>DELETE USER</h3>
        <h4 htmlFor="email2">Email</h4>
        <input
          type="email2"
          name="email2"
          value={email2}
          placeholder="*Enter Email"
          onChange={e => setEmail2(e.target.value)}
        />
        <br />
        <button style={{
          backgroundColor: "lightseagreen",
          borderRadius: "5px",
          marginTop: "15px",
          marginLeft: "10px",
          fontSize: "20px",
          alignSelf: "bottom",
        }} type="submit">Delete User</button>
      </form>
      <br />
      <button onClick={()=>{
        fetchDataDynamically();
      }}
      style={{
          backgroundColor: "lightseagreen",
          borderRadius: "5px",
          marginLeft: "170px",
          fontSize: "20px",
          alignSelf: "bottom",
          padding: "10px",
          justifyContent: "center",
        }}>Reload Fetched Data</button>
        </div>

      </div>
    </div>
  );
}
