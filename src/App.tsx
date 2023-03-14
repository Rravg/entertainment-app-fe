import React from "react";
import "./App.css";

// React Router
import { Route, Routes, Outlet } from "react-router-dom";

// Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoMatch from "./components/NoMatch";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

function Layout() {
    return (
        <>
            <Outlet />
        </>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

export default App;
