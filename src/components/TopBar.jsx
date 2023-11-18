import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu.js";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {HealthAndSafety} from "@mui/icons-material";
import PropTypes from "prop-types";

function TopBar({children, handleDrawerToggle, navItems}) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        href="/"
                        sx={{ mr: 2, display: {xs:'none',  sm: 'block' } }}
                    >
                        <HealthAndSafety />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                    >
                        Room Care Finder
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.text} sx={{ color: '#fff' }} href={item.href}>
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            {children}
        </Box>
    )
}

export default TopBar

TopBar.propTypes = {
    children: PropTypes.node,
    handleDrawerToggle: PropTypes.func,
    navItems: PropTypes.array
}