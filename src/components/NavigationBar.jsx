import TopBar from "./TopBar.jsx";
import DrawerItem from "./DrawerItem.jsx";
import {useEffect, useState} from "react";
import MyDrawer from "./MyDrawer.jsx";
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";

function NavigationBar({children}) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        if (location.pathname.includes("/dashboard")) {
            setNavItems([
                {text: "Rumah Sakit Umum", href: "/dashboard/daftar-rumah-sakit-umum"},
                {text: "Rumah Sakit Khusus", href: "/dashboard/daftar-rumah-sakit-khusus"},
                {text: "Logout", href: "/logout"}
            ]);
        } else {
            setNavItems([
                {text: "Home", href: "/"},
                {text: "About", href: "/about"},
                {text: "Login", href: "/login"}
            ]);
        }
    }, [location]);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <TopBar handleDrawerToggle={handleDrawerToggle} navItems={navItems}>

            <MyDrawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}>
                <DrawerItem handleDrawerToggle={handleDrawerToggle} navItems={navItems}/>
            </MyDrawer>

            {children}
        </TopBar>
    );
}

export default NavigationBar;

NavigationBar.propTypes = {
    children: PropTypes.node
}
