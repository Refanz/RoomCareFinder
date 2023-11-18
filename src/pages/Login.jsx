import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import RoomAPI from "../api/RoomAPI.jsx";
import Token from "../auth/Token.jsx";
import InfoSnackbar from "../components/InfoSnackbar.jsx";

function Login(props) {

    const auth = new RoomAPI();
    const token = new Token();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [open, setOpen] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        auth.login({email, password}).then((res) => {
            console.log(res);

            if (res.statusCode === 200) {
                props.setToken(res.token);
                token.saveToken(res.token);
            } else {
                setOpen(true);
            }
        })

        setOpen(false);
    }

    return (
        <Box component="main" sx={{ p: 3, textAlign: 'center', mt:'50px' }}>
            <Toolbar />
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h5" component="h1"  fontWeight="bold">
                            Login User
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField label="Email" name="email" type="email" variant="outlined"
                                   onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField  type="password" label="Password" name="password"
                                    variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button type="submit" variant="outlined">Sign In</Button>
                    </Grid>
                </Grid>
            </form>

            {open && <InfoSnackbar isOpen={open}/>}
        </Box>
    );
}

export default Login