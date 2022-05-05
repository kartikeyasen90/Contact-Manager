import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import { addContact } from '../../actions/action.js';

export const AddTocontact = () => {
  const [name,setName]=useState("");
  const [phone,setphone]=useState("");
  const [email,setemail]=useState("");
  const dispatch=useDispatch();
  const history=useNavigate();
 
  function createcontact(e){
    e.preventDefault();
    console.log("name :",name);
    console.log("phone :",phone);
    console.log("email :",email);
    const array={
      id:shortid.generate(),
      name:name,
      phone:phone,
      email:email
    }
    dispatch(addContact(array));
    history("/");
  }
  return <div>
  <div className='create_contact'> <h1>Create Contact</h1></div>
      <form className='form' >
  <label for="fname">First name:</label><br/>
  <input className='css-input' onChange={(event)=>{return setName(event.target.value)}} type="text" id="fname" name="fname" value={name}/><br/>
  <label for="phone">Phone:</label><br/>
  <input className='css-input' onChange={(event)=>{return setphone(event.target.value)}} type="text" id="lname" value={phone} name="lname"/><br/>
  <label for="email">Email:</label><br/>
  <input className='css-input' onChange={(event)=>{return setemail(event.target.value)}} type="text" id='email' value={email} name='email'/><br/>
  <button className='myButton' onClick={createcontact} >Add Contact</button><br/>
</form>
  </div>;
};
