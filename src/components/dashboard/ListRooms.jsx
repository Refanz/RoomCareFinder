import Container from "@mui/material/Container";
import {Grid} from "@mui/material";
import Footer from "../landingpage/Footer.jsx";
import {useContext} from "react";
import {HospitalContext} from "../../context/HospitalContext.jsx";
import {useLocation, useParams} from "react-router-dom";
import ItemRoom from "./ItemRoom.jsx";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

function ListRooms() {
    const hospitals = useContext(HospitalContext);
    const id = parseInt(useParams().id);

    function getRooms() {
        const hospital =  hospitals.filter((hospital) => hospital.id === id);
        return hospital;
    }

    return (
        <>

            <Container sx={{py: 10, textAlign: 'center'}} maxWidth="md">
                <Typography component="h1" variant="h5">
                    {
                        `Daftar Kamar ${getRooms().length > 0 && getRooms()[0].name}`
                    }
                </Typography>
                <Grid container spacing={4} mt={1}>
                    {
                        getRooms().length > 0 && getRooms()[0].rooms.map((data, index) => {
                            return (
                                <ItemRoom key={index} hospital={data} />
                            )
                        })
                    }
                </Grid>
            </Container>

            <Footer />
        </>
    )
}

export default ListRooms

ListRooms.propTypes = {
    hospital: PropTypes.array
}