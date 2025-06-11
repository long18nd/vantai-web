import React, { useEffect, useState } from "react";
import ContactForm from "../../../components/form/ContactForm";
import Toast from "../../../components/ui/toast/Toast";
import useContactForm from "../../../hook/useContactForm";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const { formData, errors, handleChange, handleSubmit, loading } =
    useContactForm(
      () => {
        // Callback này được gọi khi form submit thành công VÀ API gọi thành công
        // Bạn có thể thêm logic cụ thể cho ContactPage ở đây nếu cần,
        // ví dụ: chuyển hướng người dùng, log event.
        console.log("ContactPage: Form submitted and API call successful!");
      },
      (error) => {
        // Callback này được gọi khi có lỗi API
        console.error("ContactPage: API Error handled:", error);
      },
      setToast, // Truyền hàm setToast của ContactPage vào hook
    );

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-blue-700">
            Liên hệ nhận tư vấn vận chuyển
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Điền thông tin bên dưới để chúng tôi có thể hỗ trợ bạn nhanh nhất.
          </p>
        </div>

        <ContactForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitButtonText="Nhận tư vấn ngay"
          loading={loading} // Truyền trạng thái loading
          className="grid grid-cols-1 md:grid-cols-2 gap-6" // Sử dụng class cho grid layout
        />
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

export default ContactPage;
