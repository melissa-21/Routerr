import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AppBar} from "@mui/material";
import {Homepage} from "../pages/Homepage";
import {Aboutpage} from "../pages/Aboutpage";
import {Blogpage} from "../pages/Blogpage";
import {Notfoundpage} from "../pages/Notfoundpage";
const navbar= () =>{
    return (
        <div className="menu">
            <AppBar position="static">

                    <Link to="/">Home</Link>
                    <Link to="/posts">Blog</Link>
                    <Link to="/about">About</Link>
                </AppBar>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/about" element={<Aboutpage/>} />
                    <Route path="/posts" element={<Blogpage/>} />
                    <Route path="*" element={<Notfoundpage/>} />
                </Routes>
        </div>
    );
}
export default navbar;