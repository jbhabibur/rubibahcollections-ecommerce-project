import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                    {
                        path: "/shop",
                        element: <Shop />,
                    },
                ],
            },
        ],
    },
]);

export default router;