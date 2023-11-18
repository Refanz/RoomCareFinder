import './App.css'
import NavigationBar from "./components/NavigationBar.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NoPage from "./pages/NoPage.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Logout from "./pages/Logout.jsx";
import Token from "./auth/Token.jsx";
import {useState} from "react";

function App() {
    const tokenLogin = new Token();

    const [token, setToken] = useState(tokenLogin.getToken());

    function GuardedRoute({Component}) {
        const isUserLogin = token !== null;

        return (
            isUserLogin ? <Component /> : <Navigate to="/login" />
        )
    }

    function LoginRoute({Component}) {
        const isUserLogin = token !== null;

        return (
            isUserLogin ? <Navigate to="/dashboard" /> : <Component setToken={setToken} />
        )
    }

    return (
        <>


            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<GuardedRoute Component={Dashboard}/> }/>
                    <Route path="/dashboard/daftar-rumah-sakit-umum" element={<GuardedRoute Component={Dashboard}/> }/>
                    <Route path="/dashboard/daftar-rumah-sakit-khusus" element={<GuardedRoute Component={Dashboard}/> }/>
                    <Route path="/login" element={<LoginRoute Component={Login}/> }/>
                    <Route path="/logout" element={<GuardedRoute Component={Logout}/>} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App
