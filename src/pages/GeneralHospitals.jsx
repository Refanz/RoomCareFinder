import Header from "../components/dashboard/Header.jsx";
import ListHospitals from "../components/dashboard/ListHospitals.jsx";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

function GeneralHospitals() {
    return (
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
        <Header title="Daftar Rumah Sakit Umum">
            <ListHospitals type="umum" />
        </Header>
        </Box>
    )
}

export default GeneralHospitals