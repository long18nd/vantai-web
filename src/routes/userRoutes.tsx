import React from 'react';
import HomePage from "../pages/client/home/HomePage.tsx";

interface RouteConfig {
    path: string;
    element: React.ReactNode;
    children?: RouteConfig[];
}

const userRoutes: RouteConfig[] = [
    {
        path: '/',
        element: <HomePage />,
    },
];

export default userRoutes;