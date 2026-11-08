import { createBrowserRouter } from "react-router-dom";

import NotFound from '../features/pages/NotFound.jsx';
import Home from '../features/pages/Home.jsx';
import Auth from "../features/auth/Auth.js";

export const router = createBrowserRouter([
    {
        path:"*",
        element: <NotFound></NotFound>
    },
    {
        path:"/home",
        element: <Home></Home>
    },
      {
        path:"/user/:id",
    },
     {
        path:"/",
        element: <Auth></Auth>
    }

])