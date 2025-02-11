import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Hero() {
    return (
        <>
            <Box>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h3" fontWeight={700}>
                            Kenyamanan yang Menyertai Proses Pemulihan Anda
                        </Typography>
                        <Typography variant="h6" mt={3}>
                            Dengan bangga kami persembahkan layanan pencarian kamar rumah sakit terkini di situs kami. Temukan kamar rumah sakit dengan cepat dan efisien. Kami berkomitmen untuk memberikan pengalaman pencarian yang mudah dan akurat untuk memastikan kenyamanan dan keamanan Anda. Mari temukan perawatan yang tepat pada waktunya di tempat yang Anda butuhkan dengan website kami yang sederhana namun andal ini.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/"
                            sx={{ width: '200px', fontSize: '16px', mt:'20px' }}
                        >
                            READ MORE
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img src="/hospital-room.jpg" alt="Hospital Room" width="100%"  />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Hero