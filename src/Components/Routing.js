import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import { useState } from "react";
import { createContext } from "react";
import TodoList from "./TodoList";

export const UserContext = createContext(null);//created context

const Routing = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  return (
    <>
      {/*Providing context data to application*/}    
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/todolist" element={<TodoList />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default Routing;
