import Container from "@mui/material/Container";
import {useContext, useState} from "react";
import {HospitalContext} from "../../context/HospitalContext.jsx";
import ItemHospital from "./ItemHospital.jsx";
import {Grid} from "@mui/material";
import SearchHospital from "./SearchHospital.jsx";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import Footer from "../landingpage/Footer.jsx";

function ListHospitals({type}) {
    const hospitals = useContext(HospitalContext);
    const [search, setSearch] = useState("");
    const location = useLocation();

    function filteredHospitals() {
        if (search === "") {
            return hospitals.filter((hospital) => hospital.type.toLowerCase() === type);
        } else {
            return hospitals.filter((hospital) => hospital.type.toLowerCase() === type && hospital.name.toLowerCase().includes(search));
        }
    }

    return (
        <>
            <Container sx={{py: 1}} maxWidth="md">
                <SearchHospital setSearch={setSearch} />
                <Grid container spacing={4} mt={1}>
                    {
                        filteredHospitals("umum").map((hospital, index) =>  <ItemHospital key={index} hospital={hospital} location={location}/>)
                    }
                </Grid>
            </Container>

            <Footer />
        </>
    );
}

export default ListHospitals

ListHospitals.propTypes = {
    type: PropTypes.string
}