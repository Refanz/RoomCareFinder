import './App.css'
import NavigationBar from "./components/NavigationBar.jsx";
import {Navigate, RouterProvider} from "react-router-dom";
import Token from "./auth/Token.jsx";
import {useState} from "react";
import PropTypes from "prop-types";
import router from "./routes/router.jsx";

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
        <>
            <NavigationBar/>
            <RouterProvider router={router}/>
        </>
        // <BrowserRouter>
        //     <NavigationBar/>
        //     <HospitalProvider>
        //         <Routes>
        //             <Route path="/" element={<HomePage/>}/>
        //             <Route path="/dashboard/daftar-rumah-sakit-umum"
        //                    element={<GuardedRoute Component={GeneralHospitalPage}/>}/>
        //             <Route path="/dashboard/daftar-rumah-sakit-khusus"
        //                    element={<GuardedRoute Component={SpecialHospitals}/>}/>
        //             <Route path="/dashboard/daftar-rumah-sakit-umum/detail/:id"
        //                    element={<GuardedRoute Component={DetailHospitalPage}/>}/>
        //             <Route path="/dashboard/daftar-rumah-sakit-khusus/detail/:id"
        //                    element={<GuardedRoute Component={DetailHospitalPage}/>}/>
        //             <Route path="/dashboard/daftar-rumah-sakit-umum/room/:id"
        //                    element={<GuardedRoute Component={ListRooms}/>}/>
        //             <Route path="/dashboard/daftar-rumah-sakit-khusus/room/:id"
        //                    element={<GuardedRoute Component={ListRooms}/>}/>
        //             <Route path="/login" element={<LoginRoute Component={LoginPage}/>}/>
        //             <Route path="/logout" element={<GuardedRoute Component={Logout}/>}/>
        //             <Route path="*" element={<NoPage/>}/>
        //         </Routes>
        //     </HospitalProvider>
        // </BrowserRouter>
    )
}

export default App

App.propTypes = {
    Component: PropTypes.element
}