import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";

const App = () => {

  const [allCustomers, setAllCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    console.log(newCustomer)
  }

  return (
    <>
      <Routes>
        <Route path="/" caseSensitive="false" element={<Home/>}/>
        <Route path="/login" caseSensitive="false" element={<Login/>} />
        <Route path="/register" caseSensitive="false" element={<Register allCustomers={allCustomers} addNewCustomer={addNewCustomer} />} />
        <Route path="/forgot-password" />
      </Routes>
    </>
  )
}

export default App;