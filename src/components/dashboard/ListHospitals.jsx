import Container from "@mui/material/Container";
import {useContext, useState} from "react";
import {HospitalContext} from "../../context/HospitalContext.jsx";
import ItemHospital from "./ItemHospital.jsx";
import {Grid, Pagination} from "@mui/material";
import SearchHospital from "./SearchHospital.jsx";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import Footer from "../landingpage/Footer.jsx";

function ListHospitals({type}) {
    const hospitals = useContext(HospitalContext);
    const [search, setSearch] = useState("");
    const location = useLocation();

    const [page, setPage]= useState(1);

    function handlePagination(evt, val) {
        setPage(val);
    }

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
                        filteredHospitals().slice((page - 1) * 3, page * 3).map((hospital, index) =>  <ItemHospital key={index} hospital={hospital} location={location}/>)
                    }
                </Grid>
                <Pagination count={Math.ceil((filteredHospitals().length / 2) - 1 )} variant="outlined" color="primary" sx={{marginTop: '30px'}} onChange={handlePagination} page={page} />
            </Container>
            <Footer />
        </>
    );
}

export default ListHospitals

ListHospitals.propTypes = {
    type: PropTypes.string
}