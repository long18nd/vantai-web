import { useState } from "react";
import PhoneIcon from "../../../assets/imgs/icon_phone.png";
import TimeIcon from "../../../assets/imgs/icon_time.png";
import SupIcon from "../../../assets/imgs/icon_support.png";
import MailIcon from "../../../assets/imgs/icon_phone.png";
import Background from "../../../assets/imgs/background.png";
import type Contact from "../../../type/contact";
import Toast from "../../ui/Toast/Toast.tsx";

const ContactSection = () => {
  const [formData, setFormData] = useState<Omit<Contact, "id" | "createdAt">>({
    customerName: "",
    phone: "",
    email: "",
    itemName: "",
    weight: "",
    fromAddress: "",
    toAddress: "",
  });

  // State để lưu trữ các thông báo lỗi cho từng trường
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});
  // State cho toast notification (thông báo chung thành công/thất bại)
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Xóa lỗi của trường hiện tại khi người dùng bắt đầu nhập
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  // Hàm kiểm tra hợp lệ toàn bộ form
  const validateForm = () => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};

    // Validate phone number
    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại là trường bắt buộc.";
    } else if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ (ví dụ: 0901234567).";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email là trường bắt buộc.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng.";
    }

    // Validate weight (must be a number if provided)
    if (formData.weight && isNaN(Number(formData.weight))) {
      newErrors.weight = "Trọng lượng phải là một số (ví dụ: 5.5).";
    } else if (Number(formData.weight) < 0) {
      newErrors.weight = "Trọng lượng không thể là số âm.";
    }

    setErrors(newErrors); // Cập nhật state lỗi
    return Object.keys(newErrors).length === 0; // Trả về true nếu không có lỗi
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Gọi hàm validate trước khi submit
    if (!validateForm()) {
      // Hiển thị toast chung nếu có lỗi validation
      setToast({
        message: "Vui lòng kiểm tra lại thông tin đã nhập.",
        type: "error",
      });
      return; // Dừng việc gửi form nếu validation thất bại
    }

    const newContact: Contact = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...formData,
    };

    console.log("New contact data:", newContact);

    try {
      const response = await fetch("http://localhost:3001/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });

      if (!response.ok) {
        // Cố gắng đọc thông báo lỗi từ backend nếu có
        const errorData = await response.json();
        throw new Error(errorData.message || "Có lỗi khi gửi dữ liệu!");
      }

      // Hiển thị toast thành công
      setToast({
        message: "Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.",
        type: "success",
      });

      // Reset form sau khi gửi thành công
      setFormData({
        customerName: "",
        phone: "",
        email: "",
        itemName: "",
        weight: "",
        fromAddress: "",
        toAddress: "",
      });
      // Xóa tất cả lỗi sau khi submit thành công
      setErrors({});
    } catch (error: any) {
      console.error("Lỗi khi gửi request:", error);
      // Hiển thị toast lỗi nếu có vấn đề khi gửi request
      setToast({
        message:
          error.message || "Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.",
        type: "error",
      });
    }
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <div
      id="contact-section"
      className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3 space-y-6">
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
              <span>quylongtransport@gmail.com</span>
            </div>
          </div>

          <h3 className="text-lg font-medium mt-6">
            Dành cho khách hàng muốn nhận thông tin và cập nhật bảng giá tốt
            nhất
          </h3>
          <div className="bg-[#141414] p-4 flex flex-col sm:flex-row sm:items-center gap-3 mt-2 rounded-md">
            <input
              placeholder="Nhập email"
              type="email"
              className="flex-1 px-4 py-3 bg-white text-sm rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded w-full sm:w-auto hover:bg-amber-700 transition-colors">
              Nhận tư vấn ngay
            </button>
          </div>

          <div className="mt-6">
            <img src={Background} alt="Background" className="w-full h-auto" />
          </div>
        </div>

        <div className="md:w-1/3 p-4 border rounded-lg shadow-sm">
          <h1 className="text-2xl text-[#123123] font-semibold">
            NHẬN TƯ VẤN VẬN CHUYỂN
          </h1>
          <p className="mt-3 text-sm text-gray-700">
            Có ngay ưu đãi 20% cước vận chuyển với đơn hàng đầu tiên khi để lại
            thông tin dưới đây:
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Tên đơn vị
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full rounded-md border px-3 py-2 text-sm ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-md border px-3 py-2 text-sm ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Tên mặt hàng
              </label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Trọng lượng/cân nặng (kg)
              </label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className={`w-full rounded-md border px-3 py-2 text-sm ${errors.weight ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.weight && (
                <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Địa chỉ gửi hàng
              </label>
              <input
                type="text"
                name="fromAddress"
                value={formData.fromAddress}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Địa chỉ nhận hàng
              </label>
              <input
                type="text"
                name="toAddress"
                value={formData.toAddress}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 rounded mt-2 hover:bg-amber-700 transition-colors"
            >
              Nhận tư vấn ngay
            </button>
          </form>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
};

export default ContactSection;
