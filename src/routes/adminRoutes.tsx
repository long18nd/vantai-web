import React from "react";
import ContactManagement from "../pages/admin/contact_management/ContactManagement.tsx";
import ContactDetail from "../pages/admin/contact_management/ContactDetail.tsx";
import NewsManagement from "../pages/admin/news_management/NewsManagement.tsx";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const adminRoutes: RouteConfig[] = [
  {
    path: "/admin",
    element: <> Dashboard </>,
  },
  {
    path: "/admin/quan-ly-lien-he",
    element: <ContactManagement />,
  },
  {
    path: "/admin/lien-he/:id",
    element: <ContactDetail />,
  },
  {
    path: "/admin/quan-ly-bai-viet",
    element: <NewsManagement />,
  },
];

export default adminRoutes;
