import PhoneIcon from "../../../../assets/imgs/icon_phone.png";
import TimeIcon from "../../../../assets/imgs/icon_time.png";
import SupIcon from "../../../../assets/imgs/icon_support.png";
import MailIcon from "../../../../assets/imgs/icon_mail.png"; // Đã sửa đường dẫn icon mail
import Background from "../../../../assets/imgs/background.png";

const ContactSection = () => {
  return (
    <div
      id="contact-section"
      className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2 space-y-6">
          <div>
            <h1 className="text-[#27343b] text-center text-2xl font-semibold">
              LIÊN HỆ ĐỂ ĐƯỢC PHỤC VỤ TỐT HƠN
            </h1>
            <div className="text-center text-gray-400">
              _______________________________________
            </div>
          </div>

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
              <span>khanhviet@gmail.com</span>
            </div>
          </div>

          <h3 className="text-lg font-medium mt-6">
            Dành cho khách hàng muốn nhận thông tin và cập nhật bảng giá tốt
            nhất
          </h3>
          <div className="bg-blue-100 p-4 flex flex-col sm:flex-row sm:items-center gap-3 mt-2 rounded-md">
            <input
              placeholder="Nhập email"
              type="email"
              className="flex-1 px-4 py-3 bg-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded w-full sm:w-auto hover:bg-blue-700 transition-colors">
              Nhận tư vấn ngay
            </button>
          </div>

          <div className="mt-6">
            <img src={Background} alt="Background" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
