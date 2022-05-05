import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearallContact, deleteAllcontact, deleteContact, selectallContact } from '../../actions/action';
import { Contacts } from './Contacts';

export const Contact = () => {
    const [selelctAll,setselectAll] =useState(false);
    const dispatch=useDispatch();
    const contacts= useSelector((state)=>state.data.contacts);
    const selectedcontacts=useSelector((state)=>state.data.selectedContacts);
    useEffect(()=>{
      if(selelctAll)
      {
          dispatch(selectallContact(contacts.map(contact=>contact.id)))
      }
      else{
        dispatch(clearallContact())
      }
    },[selelctAll])
    console.log(contacts);
  return (
  <div>
  {
      selectedcontacts.length>0 ? <button onClick={()=>{return dispatch(deleteAllcontact())}} className='btn btn-danger mb-3'>Delete all</button>:null 
  }
    <table class="table shadow">
  <thead>
    <tr>
      <th scope="col">
      <div class="custom-control custom-checkbox">
  <input id='selectall' type="checkbox"
  value={selelctAll}
  onClick={()=>{setselectAll(!selelctAll)}}
   class="custom-control-input" />
  {/* <label htmlFor='selectall' class="custom-control-label" ></label> */}
</div>
      </th>
      <th >Name</th>
      <th >Phone</th>
      <th >email</th>
    </tr>
  </thead>
  <tbody>
  
    {contacts.map((contact)=>{
        return(
            <Contacts contact={contact} key={contact.id} ischecked={selelctAll}/>
       );
    })}
    
  </tbody>
</table>
  </div>);
  
};
