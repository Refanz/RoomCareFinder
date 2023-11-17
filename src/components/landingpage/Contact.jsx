import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

function Contact() {
    return (
        <Box mt={5} textAlign="center">
            <Typography variant="h4">
                Contact Us
            </Typography>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                mt={3}
            >
                <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{mt: '20px'}}
                />

                <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    sx={{mt: '20px'}}
                />

                <TextField
                    label="Messages"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                    sx={{mt: '20px'}}
                />

                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    sx={{ width: '200px', fontSize: '16px', mt: '20px' }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default Contact