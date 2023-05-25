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
import { useAuth } from "./components/AuthProvider";
import TitlesServices from "./services/TitlesServices";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        }
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="*" element={<NoMatch />} />
                    <Route path="/test" element={<TestRoom />} />
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
        <>
            <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Main currentPage={currentPage} />
        </>
    );
}

function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
    const auth = useAuth();

    if (!auth?.user) {
        return <Navigate to="/login" />;
    }

    return children;
}

function TestRoom() {
    const handleClick = async () => {
        let response = await TitlesServices.getAll();
        let titles = response.data as (typeof Object)[];

        titles.forEach((element) => {
            console.log(element);
        });
    };

    return <button style={{ height: "50px" }} onClick={handleClick}>Get Titles</button>;
}

export default App;
