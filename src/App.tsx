import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutUser from './components/LayoutUser'
import HomePage from './pages/HomePage'
import LayoutAdmin from './components/LayoutAdmin'
import Dashboard from './pages/Dashboard/Dashboard'
import ContactManagement from './pages/Dashboard/ContactManagement'
import ContactDetail from './pages/Dashboard/components/ContactDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutUser />}>
          <Route path='/' element={<HomePage />} />
        </Route>

        <Route element={<LayoutAdmin />}>
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/quan-ly-lien-he' element={<ContactManagement />} />
          <Route path="/admin/lien-he/:id" element={<ContactDetail />} />
          {/* <Route path='/admin/quan-ly-tin-tuc' element={<Test />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
