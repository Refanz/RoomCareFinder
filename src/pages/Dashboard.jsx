import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {useLocation} from "react-router-dom";
import {HospitalProvider} from "../context/HospitalContext.jsx";
import GeneralHospitals from "./GeneralHospitals.jsx";
import SpecialHospitals from "./SpecialHospitals.jsx";

function Dashboard() {
    const location = useLocation().pathname;

    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <HospitalProvider>
                {
                    location.includes("umum") ? <GeneralHospitals /> : <SpecialHospitals />
                }
            </HospitalProvider>
        </Box>
    );
}

export default Dashboard