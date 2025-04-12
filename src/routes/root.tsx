import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import RegitsterPage from "../pages/register-page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/register',
        element: <RegitsterPage />
    }
]);


export default router;