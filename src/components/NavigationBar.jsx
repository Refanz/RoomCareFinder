import TopBar from "./TopBar.jsx";
import DrawerItem from "./DrawerItem.jsx";
import {useState} from "react";
import MyDrawer from "./MyDrawer.jsx";


function NavigationBar({children}) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        {text: "Home", href: "/"},
        {text: "About", href: "/about"},
        {text: "Login", href: "/login"}
    ];

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
