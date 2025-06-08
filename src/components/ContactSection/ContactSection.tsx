import PhoneIcon from "../../assets/imgs/icon_phone.png"
import TimeIcon from "../../assets/imgs/icon_time.png"
import SupIcon from "../../assets/imgs/icon_support.png"
import MailIcon from "../../assets/imgs/icon_phone.png"
import Background from "../../assets/imgs/background.png"


const ContactSection = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* LEFT */}
        <div className="md:w-2/3 space-y-6">
          <div>
            <h1 className="text-[#27343b] text-center text-2xl font-semibold">LIÊN HỆ ĐỂ ĐƯỢC PHỤC VỤ TỐT HƠN</h1>
            <div className="text-center text-gray-400">_______________________________________</div>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <img className="mr-4 w-6 h-6" src={PhoneIcon} alt="Phone" />
              <span>098 44 22 555</span>
            </div>
            <div className="flex items-center">
              <img className="mr-4 w-6 h-6" src={TimeIcon} alt="Time" />
              <div>
                <div>Thời gian làm việc:</div>
                <div>07:00 - 21:00 (Thứ hai - Chủ nhật)</div>
              </div>
            </div>
            <div className="flex items-center">
              <img className="mr-4 w-6 h-6" src={SupIcon} alt="Support" />
              <div>
                <div>028 3719 8019</div>
                <div>(Call 24/7)</div>
              </div>
            </div>
            <div className="flex items-center">
              <img className="mr-4 w-6 h-6" src={MailIcon} alt="Mail" />
              <span>quylongtransport@gmail.com</span>
            </div>
          </div>

          {/* Email Subscription */}
          <h3 className="text-lg font-medium mt-6">
            Dành cho khách hàng muốn nhận thông tin và cập nhật bảng giá tốt nhất
          </h3>
          <div className="bg-[#141414] p-4 flex flex-col sm:flex-row sm:items-center gap-3 mt-2 rounded-md">
            <input
              placeholder="Nhập email"
              type="email"
              className="flex-1 px-4 py-3 bg-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded w-full sm:w-auto hover:bg-amber-700 transition-colors">
              Đăng ký ngay
            </button>
          </div>

          {/* Background image */}
          <div className="mt-6">
            <img src={Background} alt="Background" className="w-full h-auto" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/3 p-4 border rounded-lg shadow-sm">
          <h1 className="text-2xl text-[#123123] font-semibold">NHẬN TƯ VẤN VẬN CHUYỂN</h1>
          <p className="mt-3 text-sm text-gray-700">
            Có ngay ưu đãi 20% cước vận chuyển với đơn hàng đầu tiên khi để lại thông tin dưới đây:
          </p>

          <form className="mt-6 space-y-4">
            {[
              "Tên đơn vị",
              "Số điện thoại",
              "Email",
              "Tên mặt hàng",
              "Trọng lượng/cân nặng",
              "Địa chỉ gửi hàng",
              "Địa chỉ nhận hàng"
            ].map((label, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-900 mb-1">{label}</label>
                <input
                  type="text"
                  className="w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:outline-amber-500"
                />
              </div>
            ))}
            <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded mt-2">
              Nhận tư vấn ngay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

