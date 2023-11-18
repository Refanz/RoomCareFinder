import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";

function Footer() {
    return (
        <Box sx={{ flexGrow: 1, textAlign: 'center', mt: '50px', mb: '20px' }}>
            <Typography>
                Provided by{' '}
                <Link href="#" target="_blank" underline="none">
                    Kelompok 2 Praktikum RPLBK 2023
                </Link>
            </Typography>
            <Typography>Room care Finder App - Built with MUI</Typography>
        </Box>
    )
}

export default Footer