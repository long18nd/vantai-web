import { useState } from "react";
import bgImg from "../../../../assets/imgs/bg-tra-cuu.png";
import Toast from "../../../../components/ui/toast/Toast";
import ContactForm from "../../../../components/form/ContactForm";
import useContactForm from "../../../../hook/useContactForm";

const ContactSection = () => {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const { formData, errors, handleChange, handleSubmit, loading } =
    useContactForm(
      () => {
        // Callback này có thể trống hoặc xử lý gì đó sau khi gửi thành công
        // Ví dụ: console.log("Form LookupSection submitted successfully!");
      },
      (error) => {
        // Xử lý lỗi API cụ thể cho LookupSection nếu cần
        console.error("API Error on LookupSection:", error);
      },
      setToast, // Truyền hàm setToast từ LookupSection vào hook
    );

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
        <div className="md:w-1/2 text-white text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            BẠN MUỐN VẬN CHUYỂN NHỮNG MẶT HÀNG GÌ?
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Vận tải Khánh Việt cung cấp đa dịch vụ vận chuyển từ nhà cửa, xe,
            hàng hóa xây dựng,...
          </p>
        </div>
        <div className="md:w-1/3 p-4 border rounded-lg shadow-sm bg-white">
          <h1 className="text-2xl text-[#123123] font-semibold">
            NHẬN TƯ VẤN VẬN CHUYỂN
          </h1>
          <p className="mt-3 text-sm text-gray-700">
            Có ngay ưu đãi 20% cước vận chuyển với đơn hàng đầu tiên khi để lại
            thông tin dưới đây:
          </p>

          <ContactForm
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitButtonText="Nhận tư vấn ngay"
            loading={loading} // Truyền trạng thái loading
            className="mt-6 space-y-4" // Sử dụng class cho spacing
          />
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

export default ContactSection;
