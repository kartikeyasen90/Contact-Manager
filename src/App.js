import React from "react";
import { Provider } from "react-redux";
import './App.css';
import { Contact } from "./components/contacts/Contact";
import { Navbar } from "./components/Navbar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import store from "./Store";
import { Contacts } from "./components/contacts/Contacts";
import { AddTocontact } from "./components/contacts/AddTocontact";
import { Editcontact } from "./components/contacts/Editcontact";


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
         <Navbar/>
         <div className="container">
           <div className="py-3">
           <Routes>
              <Route exact path="/" element={<Contact/>}/>
              <Route exact path="/contacts/add" element={<AddTocontact/>}/>
              <Route exact path="/contacts/edit/:id" element={<Editcontact/>}/>
               </Routes>
           </div>
         </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
