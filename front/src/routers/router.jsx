import {PrivateRouter} from "../routers/PrivateRouter"
import {PublicRouter} from "../routers/PublicRouter"
import { createBrowserRouter } from "react-router-dom";
import Calendar from "../feature/Calendar/pages/Calendar";
import Layout from "../componets/Layaout";
import Business from "../feature/business/pages/business";
import { PATH_BUSINESS, PATH_CALENDAR, PATH_CALENDAR_CLIENT, PATH_LOGIN, PATH_REGISTER } from "./routerPaths";
import Login from "../feature/Sesion/pages/Login";
import Register from "../feature/Sesion/pages/Register";
import Home from "../feature/home/pages/index"
import { navbar } from "@nextui-org/react";

const router = createBrowserRouter([
    {
        path: "/",
        element:  //<PublicRouter>
                    <Layout />,            
                    //</PublicRouter>,
        errorElement: <p>Error</p>,

        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: PATH_LOGIN,
                element: <Login />
            },
            {
                path: PATH_REGISTER,
                element: <Register/>
            },
            {
                path: PATH_CALENDAR_CLIENT,
                element: <Calendar/>
            },
        ]
    },
    {
        path: "/",
        element:
                // <PrivateRouter>
                    <Layout />,
                // </PrivateRouter>,
        errorElement: <p>Error</p>,

        children:[
            {
                path: PATH_BUSINESS,
                element: 
                    <Business />
            },
        ]
    }
]);

export default router;