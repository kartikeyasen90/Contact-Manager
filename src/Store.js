import React from "react";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducer from "./reducers"



 const store=createStore(rootreducer,composeWithDevTools());
 export default store;