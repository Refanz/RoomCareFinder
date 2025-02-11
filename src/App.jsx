import './App.css'
import NavigationBar from "./components/NavigationBar.jsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import NoPage from "./pages/NoPage.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Logout from "./pages/Logout.jsx";
import Token from "./auth/Token.jsx";
import {useState} from "react";
import DetailHospital from "./components/dashboard/DetailHospital.jsx";
import PropTypes from "prop-types";
import {HospitalProvider} from "./context/HospitalContext.jsx";
import GeneralHospitals from "./pages/GeneralHospitals.jsx";
import SpecialHospitals from "./pages/SpecialHospitals.jsx";
import ListRooms from "./components/dashboard/ListRooms.jsx";

function App() {
    const tokenLogin = new Token();

    const [token, setToken] = useState(tokenLogin.getToken());

    function GuardedRoute({Component}) {
        const isUserLogin = token !== null;

        return (
            isUserLogin ? <Component/> : <Navigate to="/login"/>
        )
    }

    function LoginRoute({Component}) {
        const isUserLogin = token !== null;

        return (
            isUserLogin ? <Navigate to="/dashboard/daftar-rumah-sakit-umum"/> : <Component setToken={setToken}/>
        )
    }

    return (
        <BrowserRouter>
            <NavigationBar/>
            <HospitalProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard/daftar-rumah-sakit-umum"
                           element={<GuardedRoute Component={GeneralHospitals}/>}/>
                    <Route path="/dashboard/daftar-rumah-sakit-khusus"
                           element={<GuardedRoute Component={SpecialHospitals}/>}/>
                    <Route path="/dashboard/daftar-rumah-sakit-umum/detail/:id"
                           element={<GuardedRoute Component={DetailHospital}/>}/>
                    <Route path="/dashboard/daftar-rumah-sakit-khusus/detail/:id"
                           element={<GuardedRoute Component={DetailHospital}/>}/>
                    <Route path="/dashboard/daftar-rumah-sakit-umum/room/:id"
                           element={<GuardedRoute Component={ListRooms}/>}/>
                    <Route path="/dashboard/daftar-rumah-sakit-khusus/room/:id"
                           element={<GuardedRoute Component={ListRooms}/>}/>
                    <Route path="/login" element={<LoginRoute Component={Login}/>}/>
                    <Route path="/logout" element={<GuardedRoute Component={Logout}/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </HospitalProvider>
        </BrowserRouter>
    )
}

export default App

App.propTypes = {
    Component: PropTypes.element
}