import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";

function Header({title}) {
    return (
        <Box sx={{bgcolor: 'background.paper', pt: 8, pb: 6}}>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Dengan fokus pada kemudahan dan kecepatan, website kami merupakan platform pencarian kamar rumah sakit yang efisien dan komprehensif. Pengguna dapat dengan mudah menemukan informasi lengkap mengenai ketersediaan kamar di berbagai rumah sakit, termasuk fasilitas yang disediakan dan lokasi.
                </Typography>
                <TextField fullWidth type="text" name="search" placeholder="Cari rumah sakit.." />
            </Container>
        </Box>
    )
}

export default Header