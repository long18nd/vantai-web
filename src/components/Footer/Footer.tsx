const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Giới thiệu */}
        <div>
          <h2 className="text-lg font-semibold mb-4">VẬN TẢI BẮC NAM</h2>
          <p>
            Công ty TNHH Vận Tải Bắc Nam chuyên cung cấp dịch vụ vận chuyển hàng hóa uy tín, chuyên nghiệp, giá rẻ trên toàn quốc. Đội ngũ xe tải đa dạng, nhận chở hàng lẻ, hàng nguyên chuyến nhanh chóng và an toàn.
          </p>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Thông tin liên hệ</h2>
          <ul className="space-y-2">
            <li>Địa chỉ: Số 556 Quốc Lộ 1A, Bình Hưng Hòa, Bình Tân, TP.HCM</li>
            <li>Hotline: <a href="tel:0971703011" className="text-red-400">0971 703 011</a></li>
            <li>Email: <a href="mailto:vantaibacnam.vn@gmail.com" className="text-blue-300">vantaibacnam.vn@gmail.com</a></li>
            <li>Website: <a href="https://vantaibacnam.vn" className="text-blue-300">vantaibacnam.vn</a></li>
          </ul>
        </div>

        {/* Dịch vụ */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Dịch vụ chính</h2>
          <ul className="space-y-2">
            <li><a href="/van-chuyen-hang-hoa" className="hover:text-red-400">Vận chuyển hàng hóa Bắc Nam</a></li>
            <li><a href="/cho-thue-xe-tai" className="hover:text-red-400">Cho thuê xe tải chở hàng</a></li>
            <li><a href="/dich-vu-nang-ha" className="hover:text-red-400">Dịch vụ nâng hạ hàng hóa</a></li>
            <li><a href="/gui-hang-di-tinh" className="hover:text-red-400">Gửi hàng đi các tỉnh</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 text-center py-4 text-gray-400 text-xs">
        © {new Date().getFullYear()} Vận Tải Bắc Nam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
