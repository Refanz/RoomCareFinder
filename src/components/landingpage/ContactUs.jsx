import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ContactUs() {
    return (
        <Box>
            <Grid container spacing={6}>
                <Grid item xs={12} md={5}>
                    <img src="/hospital-room2.jpg" width="100%" />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h3" fontWeight={700}>
                        We build, We revive
                    </Typography>
                    <Typography>
                        Dengan menyajikan informasi yang akurat, cepat, dan mudah diakses, website ini membantu pengguna dalam menghadapi situasi darurat atau mempersiapkan diri untuk perawatan medis dengan lebih baik.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: '200px', fontSize: '16px', mt:'20px' }}
                    >
                        CONTACT US
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactUs