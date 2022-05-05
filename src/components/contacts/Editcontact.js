import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import shortid from 'shortid';
import { addContact, getContact, updateContact } from '../../actions/action.js';

export const Editcontact = () => {
  
 const contact=useSelector((state)=>state.data.contact);
  const [name,setName]=useState("");
  const [phone,setphone]=useState("");
  const [email,setemail]=useState("");
  const dispatch=useDispatch();
  const history=useNavigate();
  let {id}=useParams();
  useEffect(()=>{
    if(contact!=null)
    {
      setName(contact.name)
      setphone(contact.phone)
      setemail(contact.email)
    }
    dispatch(getContact(id));
  },[contact])

  function onupdate(event){
    event.preventDefault();
    const update_contact=Object.assign(contact,{
      name:name,
      phone:phone,
      email:email
    })
    dispatch(updateContact(update_contact));
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
  <button className='myButton'onClick={onupdate}  >edit Contact</button><br/>
</form>
  </div>;
};

