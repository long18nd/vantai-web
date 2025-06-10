import { useState } from "react";
import bgImg from "../../../../assets/imgs/bg-tra-cuu.png";
import type Contact from "../../../../type/contact";
import Toast from "../../../../components/ui/toast/Toast";

const LookupSection = () => {
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
    <section
      className="w-full bg-no-repeat bg-cover bg-center py-10"
      style={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "900px",
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row justify-between">
        {/* Left: Text giới thiệu */}
        <div className="md:w-1/2 text-white text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {/* TRA CỨU CƯỚC VẬN TẢI <br /> BẮC NAM */}
            BẠN MUỐN VẬN CHUYỂN NHỮNG MẶT HÀNG GÌ?
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            {/* Tra cước vận chuyển hàng hóa nhanh chóng, dễ dàng, chính xác */}
            Vận tải Khánh Việt cung cấp đa dịch vụ vận chuyển từ nhà cửa, xe,
            hàng hóa xây dựng,...
          </p>
        </div>

        {/* Right: Form */}

        <div className="md:w-1/3 p-4 border rounded-lg shadow-sm bg-white">
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
              className="w-full bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700 transition-colors"
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
    </section>
  );
};

export default LookupSection;
