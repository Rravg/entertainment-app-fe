import React from "react";
import "./App.css";

// React Router
import { Route, Routes, Outlet } from "react-router-dom";

// Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

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
    return <Outlet />;
}

function Home() {
    return (
        <>
            <NavBar />
            <Main />
        </>
    );
}

export default App;
