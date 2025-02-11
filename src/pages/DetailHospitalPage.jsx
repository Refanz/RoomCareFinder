import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import {useContext} from "react";
import {HospitalContext} from "../context/HospitalContext.jsx";
import {useParams} from "react-router-dom";
import ItemDetailHospital from "../components/dashboard/ItemDetailHospital.jsx";
import Footer from "../components/landingpage/Footer.jsx";

function DetailHospitalPage() {
    const hospitals = useContext(HospitalContext);
    const id = parseInt(useParams().id);

    function getHospitalById() {
        return hospitals.filter((hospital) => hospital.id === id);
    }

    return (
        <>
            <Container sx={{py: 10}} maxWidth="md">
                <Grid container spacing={4}>
                    {
                        getHospitalById().length > 0 &&  <ItemDetailHospital hospital={getHospitalById()} />
                    }
                </Grid>

            </Container>

            <Footer />
        </>


    );

}

export default DetailHospitalPage;