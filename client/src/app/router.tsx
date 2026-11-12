import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound.jsx";
import Home from "../pages/Home.jsx";
import Auth from "../features/auth/Auth.js";
import RootLayout from "@/app/Layout.tsx";

export const router = createBrowserRouter([
  // Pages with Layout.
  {
    element: <RootLayout/>,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/user/:id", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  
  // Pages without Layout.
  { path: "/", element: <Auth></Auth> },

]);
