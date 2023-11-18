import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NameCard from "../components/NameCard.jsx";
import {Grid} from "@mui/material";
import Footer from "../components/landingpage/Footer.jsx";

function About() {
    const data = [
        {name: 'Refanda Surya Saputra', nim: '21120120120022'},
        {name: 'Khasandra Nur Pristiwaning Rahayu', nim: '21120120140089'},
        {name: 'Muhammad Baihaqi Asshaumi Muntaqo', nim: '21120120140156'},
        {name: 'Didan Hasan Murtaqi', nim: '21120120140141'},
    ]

    return (
        <>
            <Box component="main" sx={{p: 3, textAlign: 'center'}}>
                <Toolbar />

                <Typography component="div" variant="h4">
                    About Us
                </Typography>

                <Typography mt={2}>
                    Ini adalah website sederhana untuk mencari ketersediaan kamar pada rumah sakit di Indonesia
                </Typography>

                <Grid container spacing={2} mt={5} alignItems="center" direction="column">
                    {data.map((n) => {
                        return(
                            <Grid key={n.name} item>
                                <NameCard name={n.name} desc={n.nim} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <Footer />
        </>
    );
}

export default About