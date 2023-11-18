import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Header from "../components/dashboard/Header.jsx";
import ListHospitals from "../components/dashboard/ListHospitals.jsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function Dashboard() {
    const [title, setTitle] = useState("");

    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("umum")) {
            setTitle("Daftar Rumah Sakit Umum");
        } else {
            setTitle("Daftar Rumah Sakit Khusus");
        }
    }, [location]);

    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />

            <Header title={title} />

            <ListHospitals />

        </Box>
    );
}

export default Dashboard