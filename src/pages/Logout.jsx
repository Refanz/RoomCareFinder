import React, {useState} from "react";
import {Dialog, DialogActions, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import Token from "../auth/Token.jsx";

function Logout() {
    const [open, setOpen] = useState(true);

    const token = new Token();

    function handleDialogLogout() {
        setOpen(false);

        window.location = "/dashboard/daftar-rumah-sakit-umum";
    }

    function handleLogout() {
        setOpen(false);

        token.removeToken();
        window.location.reload();
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleDialogLogout}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Ingin Logout?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDialogLogout}>No</Button>
                    <Button onClick={handleLogout}>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default Logout