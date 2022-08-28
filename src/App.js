import React from "react";
import "./App.css";
import Summary from "./Summary";
import Form from "./Form";


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
return (
  <div>
  <BrowserRouter >

   
<Routes>


  <Route path='/' element={<Form />} />
  <Route path='/Summary' element={<Summary />} />

</Routes>

</BrowserRouter>  
      </div>  
  );
}

