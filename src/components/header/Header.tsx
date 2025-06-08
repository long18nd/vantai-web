import { useState } from "react";
import Logo from "../../assets/imgs/logo-quy-long.jpg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Vận tải Bắc Nam" className="h-12 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-blue-600">Trang chủ</a>
          <a href="/gioi-thieu" className="hover:text-blue-600">Giới thiệu</a>
          <a href="/dich-vu" className="hover:text-blue-600">Dịch vụ</a>
          <a href="/bang-gia" className="hover:text-blue-600">Bảng giá</a>
          <a href="/tin-tuc" className="hover:text-blue-600">Tin tức</a>
          <a href="/lien-he" className="hover:text-blue-600">Liên hệ</a>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 shadow">
          <ul className="space-y-3 text-sm font-medium text-gray-700">
            <li><a href="/" className="block hover:text-blue-600">Trang chủ</a></li>
            <li><a href="/gioi-thieu" className="block hover:text-blue-600">Giới thiệu</a></li>
            <li><a href="/dich-vu" className="block hover:text-blue-600">Dịch vụ</a></li>
            <li><a href="/bang-gia" className="block hover:text-blue-600">Bảng giá</a></li>
            <li><a href="/tin-tuc" className="block hover:text-blue-600">Tin tức</a></li>
            <li><a href="/lien-he" className="block hover:text-blue-600">Liên hệ</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
