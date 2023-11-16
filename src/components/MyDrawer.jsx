import {Drawer} from "@mui/material";

function MyDrawer({children, handleDrawerToggle, mobileOpen}) {
    //const drawerWidth = 240;

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