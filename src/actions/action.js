import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_ALL, DELETE_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../constants/constant"
//add contact
export const addContact=(contact)=>{
  return {
    type:CREATE_CONTACT,
    payload:contact
  }
}
// get contact
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload:id
})
// update contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload:contact
})
// delete contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload:id
})
//selectall contact
export const selectallContact = (id) => ({
  type: SELECT_CONTACT,
  payload:id
})
//clear all contact
export const clearallContact = () => ({
  type: CLEAR_CONTACT,
})
export const deleteAllcontact=()=>({
  type:DELETE_ALL
})




