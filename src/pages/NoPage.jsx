import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function NoPage() {
    return (
        <Box component="main" sx={{p: 3, textAlign: 'center'}} my={30}>
            <Toolbar/>

            <Typography component="div" variant="h5" alignContent="center" fontWeight="bold">
                Oops!
            </Typography>
            <Typography component="div" variant="p" alignContent="center" my="30px">
                Sorry, an unexpected error has ocurred.
            </Typography>
            <Typography component="div" variant="p" fontStyle="italic">
                NotFound
            </Typography>
        </Box>
    )
}

export default NoPage