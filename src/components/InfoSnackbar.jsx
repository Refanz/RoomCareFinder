import {useState} from "react";
import {Alert, Snackbar, Stack} from "@mui/material";
import PropTypes from "prop-types";

function InfoSnackbar({isOpen}) {
    const [open, setOpen] = useState(isOpen);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Email or password is not valid!
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default InfoSnackbar

InfoSnackbar.propTypes = {
    isOpen: PropTypes.node
}