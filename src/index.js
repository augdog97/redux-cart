import React, { Component } from "react"; 
import ReactDOM from "react-dom"; 
import { createStore } from "redux"; 
import { Provider } from "react-redux"; 
import cartReducer from "./reducer"; 
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'; 
/* 
  1. Redux store is created with the createStore method with the reducer as the argument. THe reducer is imported at the top of the file. 
  2. Then pass the store as a prop to the Provider component. 
    - The provider component has to be the enveloping outer-most component to ensure that every component has access to the Redux store. 
*/ 

 var destination = document.querySelector("#container"); 
 var store = createStore(cartReducer); 
 
 
 ReactDOM.render(
 <Provider store={store}> 
 <App />
  </Provider>, 
  destination);
