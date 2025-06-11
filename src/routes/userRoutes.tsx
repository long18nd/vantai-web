import React from "react";
import HomePage from "../pages/client/home/HomePage.tsx";
import News from "../pages/client/news_page/News.tsx";
import ContactPage from "../pages/client/contact_page/ContactPage.tsx";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const userRoutes: RouteConfig[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tin-tuc",
    element: <News />,
  },
  {
    path: "/lien-he",
    element: <ContactPage />,
  },
];

export default userRoutes;
