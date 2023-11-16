import './App.css'
import NavigationBar from "./components/NavigationBar.jsx";
import RoomAPI from "./api/RoomAPI.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NoPage from "./pages/NoPage.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
    // const roomApi = new RoomAPI();
    //
    // roomApi.getHospitals().then((data) => {
    //     console.log(data);
    // })


    return (
        <>
            <NavigationBar />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App
