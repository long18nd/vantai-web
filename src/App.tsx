import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutUser from "./components/Layout/LayoutUser.tsx";
import HomePage from "./pages/client/HomePage.tsx";
import LayoutAdmin from "./components/Layout/LayoutAdmin.tsx";
import ContactManagement from "./pages/admin/contact_management/ContactManagement.tsx";
import ContactDetail from "./pages/admin/contact_management/ContactDetail.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutUser />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<LayoutAdmin />}>
          <Route path="/admin" element={<> Dashboard </>} />
          <Route
            path="/admin/quan-ly-lien-he"
            element={<ContactManagement />}
          />
          <Route path="/admin/lien-he/:id" element={<ContactDetail />} />
          {/* <Route path='/admin/quan-ly-tin-tuc' element={<Test />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
