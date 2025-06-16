import React from "react";
import ContactManagement from "../pages/admin/contact_management/ContactManagement.tsx";
import ContactDetail from "../pages/admin/contact_management/ContactDetail.tsx";
import NewsManagement from "../pages/admin/news_management/NewsManagement.tsx";
import AddNew from "../pages/admin/news_management/AddNew.tsx";
import CategoryManagement from "../pages/admin/category_management/CategoryManagement.tsx";

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
  {
    path: "/admin/quan-ly-bai-viet/them",
    element: <AddNew />,
  },
  {
    path: "/admin/quan-ly-chuyen-muc",
    element: <CategoryManagement />,
  },
];

export default adminRoutes;
