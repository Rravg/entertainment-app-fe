import React, { useState } from "react";
import "./App.css";

// React Router
import { Route, Routes, Outlet, Navigate } from "react-router-dom";

// Components
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import AuthProvider, { useAuth } from "./components/AuthProvider";

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
    const [currentPage, setCurrentPage] = useState<Pages>({ page: "Home" });
    return (
        <AuthProvider>
            <RequireAuth>
                <>
                    <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <Main currentPage={currentPage} />
                </>
            </RequireAuth>
        </AuthProvider>
    );
}

function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
    let auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default App;
