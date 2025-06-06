import Logo from "../../assets/imgs/logo-quy-long.jpg"

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Vận tải Bắc Nam"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-blue-600">Trang chủ</a>
          <a href="/gioi-thieu" className="hover:text-blue-600">Giới thiệu</a>
          <a href="/dich-vu" className="hover:text-blue-600">Dịch vụ</a>
          <a href="/bang-gia" className="hover:text-blue-600">Bảng giá</a>
          <a href="/tin-tuc" className="hover:text-blue-600">Tin tức</a>
          <a href="/lien-he" className="hover:text-blue-600">Liên hệ</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
