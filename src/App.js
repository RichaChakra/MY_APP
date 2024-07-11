import React from "react";
import Form from "./pages/Form";
import { Route, Routes } from "react-router-dom";
import Thankyou from "./pages/Thankyou";

const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element = {<Form/>}/>
        <Route path="/thankyou" element = {<Thankyou/>}/>
      </Routes>
    </>
  )
}

export default App