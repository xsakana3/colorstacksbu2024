import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Members } from "./pages/members/Members";
import { Opportunities } from "./pages/opportunities/Opportunities";
import { Resources } from "./pages/resources/Resources";
import { Sponsor } from "./pages/sponsor/Sponsor";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/members" element={<Members/>} />
            <Route path="/opportunities" element={<Opportunities/>} />
            <Route path="/resources" element={<Resources/>} />
            <Route path="/sponsor" element={<Sponsor/>} />
        </Routes>
    )
}

export default AppRouter