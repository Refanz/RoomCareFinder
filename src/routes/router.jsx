import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import NoPage from "../pages/NoPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NoPage/>
    },
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
]);

export default router;