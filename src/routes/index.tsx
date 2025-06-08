import React from 'react';
import { Route, Routes } from 'react-router-dom';
import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';
import LayoutUser from "../components/layout/LayoutUser.tsx";
import LayoutAdmin from "../components/layout/LayoutAdmin.tsx";

const renderRoutes = (routes: { path: string; element: React.ReactNode; children?: any[] }[]) => {
    return routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
            {route.children && renderRoutes(route.children)}
        </Route>
    ));
};

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route element={<LayoutUser />}>
                {renderRoutes(userRoutes)}
                {/* Nếu bạn có các route user không cần LayoutUser, hãy thêm chúng ở đây */}
            </Route>

            {/* Route cho Admin (có LayoutAdmin) */}
            <Route element={<LayoutAdmin />}>
                {renderRoutes(adminRoutes)}
                {/* Nếu bạn có các route admin không cần LayoutAdmin, hãy thêm chúng ở đây */}
            </Route>

            {/* Thêm các route khác không có layout riêng ở đây (ví dụ: trang 404) */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
};

export default AppRoutes;