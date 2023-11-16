import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Hero from "../components/landingpage/Hero.jsx";
import Section from "../components/landingpage/Section.jsx";
import ContactUs from "../components/landingpage/ContactUs.jsx";
import Testimonial from "../components/landingpage/Testimonial.jsx";
import Contact from "../components/landingpage/Contact.jsx";
import Footer from "../components/landingpage/Footer.jsx";

function Home() {
    return (
        <>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Hero />
                <Section />
                <ContactUs />
                <Testimonial />
                <Contact />
                <Footer />
            </Box>
        </>
    );
}

export default Home