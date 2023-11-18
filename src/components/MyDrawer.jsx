import {Drawer} from "@mui/material";
import PropTypes from "prop-types";

function MyDrawer({children, handleDrawerToggle, mobileOpen}) {
    return (
        <>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: '240px'},
                    }}
                >
                    {children}
                </Drawer>
            </nav>
        </>
    )
}

export default MyDrawer

MyDrawer.propTypes = {
    children: PropTypes.element,
    handleDrawerToggle: PropTypes.func,
    mobileOpen: PropTypes.bool
}