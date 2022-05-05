import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/action';

export const Contacts = ({contact,ischecked}) => {
  
  const dispatch=useDispatch();
   const {name,phone,email,id}=contact;
  return (
    <tr>
    <td scope='row'>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" checked={ischecked} 
            class="custom-control-input" />
            <label  class="custom-control-label" ></label>
        </div>
    </td>
    <td><Avatar className='mr-2' name={name} size="45" round={true}/>{name}</td>
    <td>{phone}</td>
    <td>{email}</td>
    <td>
        <Link to={`/contacts/edit/${id}`}>
        <span className='material-icons'>edit</span>
         </Link>
         <button>
        <span onClick={()=>{
          dispatch(deleteContact(id))
        }} className='material-icons'>remove_circle</span></button>
         
    </td>
</tr>
  );
};
