import React from 'react';
import ContactManagement from "../pages/admin/contact_management/ContactManagement.tsx";
import ContactDetail from "../pages/admin/contact_management/ContactDetail.tsx";

interface RouteConfig {
    path: string;
    element: React.ReactNode;
    children?: RouteConfig[];
}

const adminRoutes: RouteConfig[] = [
    {
        path: '/admin',
        element: <> Dashboard </>,
    },
    {
        path: '/admin/quan-ly-lien-he',
        element: <ContactManagement />,
    },
    {
        path: '/admin/lien-he/:id',
        element: <ContactDetail />,
    },
];

export default adminRoutes;