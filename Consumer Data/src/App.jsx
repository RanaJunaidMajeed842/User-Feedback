import React from "react";
import Home from "./Pages/home";
import Login from "./Pages/login";
import SignUp from "./Pages/signup";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignUp/>}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App