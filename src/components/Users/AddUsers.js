import React,{useState} from "react";
import axios from 'axios'
import {useHistory} from "react-router-dom";
const AddUser = () =>{
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
   website: ""
 });
 const {name, username,email, phone, website}= user;
 const onInputChange = e => {
   console.log(e.target.value);
   setUser({...user,[e.target.name]: e.target.value})  
 };
 const onSubmit= async e =>{
   e.preventDefault();
   await axios.post("http://localhost:3002/users", user);
history.push("/")
 }; 
    return(
        <div className="container">
            <div Classname="w-75 mx-auto shadow p-5">
                <h2 className="bhuvi" >Add A User</h2>
              <form onSubmit={e => onSubmit(e)}>
                <div class="form-group">
<input type="text" className="form-control form-control-lg" 
 placeholder="Enter your Name" name="name"
value={name}
onChange={e => onInputChange(e)}/>
<br/>

</div>
  <div class="form-group">
    

    <input type="text" className="form-control form-control-lg" 
     placeholder="Enter your UserName" name="username"
     value={username} 
  onChange={e => onInputChange(e)}/>
  <br/>
  
  </div>
  
  <div class="form-group">

    <input type="text" className="form-control form-control-lg" 
     placeholder="Enter your Email" name="email"
     value={email}
  onChange={e => onInputChange(e)}/>
    <br/>
  </div>
  
  <div class="form-group">
    
    <input type="text" className="form-control form-control-lg" 
    placeholder="Enter your Phone Number" name="phone"
    value={phone}
  onChange={e => onInputChange(e)}/>
    <br/>
  </div>
  
  <div class="form-group">
    
    <input type="text" className="form-control form-control-lg" 
     placeholder="Enter your Website Name" name="website"
     value={website}
    onChange={e => onInputChange(e)} />
    
  </div>
  
  <button style={{margin: '2' }} className="btn btn-primary btn-block">Add user</button>
</form>
        
            </div>


        </div>
    )
}
export default AddUser;