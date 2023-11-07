import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp";
import { useState, useEffect } from "react";
import { createContext } from "react";
import TodoList from "../components/TodoList";
import ProfilePage from "../components/ProfilePage";
import { USER_STORAGE_KEY } from "../utils/constants";

export const UserContext = createContext(null);//created context

const Routing = () => {
  const [user, setUser] = useState(()=>{
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY))||
  {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  }
});

useEffect(() => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}, [user]);

  return (
    <>
      {/*Providing context data to application*/}    
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/todolist" element={<TodoList />}></Route>
            <Route path="/profile" element={<ProfilePage/>}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
};

export default Routing;
