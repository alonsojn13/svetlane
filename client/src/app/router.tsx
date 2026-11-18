import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound.js";
import Home from "../pages/Home.js";
import Auth from "../features/auth/Auth.tsx";
import PrivateLayout from "@/app/PrivateLayout.tsx";
import UserProfile from "@/features/user/pages/UserProfile.tsx";
import RLSituations from "@/features/stadistics/RLSituations.tsx";
import Words from "@/features/stadistics/Words.tsx";
import Grammar from "@/features/stadistics/Grammar.tsx";
import Plans from "@/features/plans/pages/Plans.tsx";
import DailyLearning from "@/features/learning/pages/DailyLearning.tsx";
import Mailbox from "@/features/social/pages/Mailbox.tsx";
import FreeReview from "@/features/learning/pages/FreeReview.tsx";
import Config from "@/features/config/pages/Config.tsx";
import Contacts from "@/features/contacts/Contacts.tsx";
import Test from "@/pages/Test.tsx";
import PublicLayout from "./PublicLayout.tsx";

export const router = createBrowserRouter([
  // Pages with Layout.
  {
    element: <PrivateLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/daily-learning", element: <DailyLearning /> },
      { path: "/mailbox", element: <Mailbox /> },
      { path: "/user", element: <UserProfile /> },
      { path: "/real-life-situations", element: <RLSituations /> },
      { path: "/words", element: <Words /> },
      { path: "/grammar", element: <Grammar /> },
      { path: "/free-review", element: <FreeReview /> },
      { path: "/contacts", element: <Contacts /> },

      { path: "/plans", element: <Plans /> },
      { path: "/config", element: <Config /> },
      { path: "/tests", element: <Test /> },

      { path: "*", element: <NotFound /> },
    ],
  },

  {
    // Pages without Layout.
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Auth></Auth> },
    ]
  }
]);
