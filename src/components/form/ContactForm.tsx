import React, { type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  item: string;
  weight: string;
  sending_address: string;
  receiving_address: string;
}

interface FormErrors {
  phone?: string;
  email?: string;
  weight?: string;
}

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  submitButtonText: string;
  loading: boolean; // Thêm prop loading
  className?: string; // Để tùy chỉnh CSS grid/flex từ bên ngoài
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  submitButtonText,
  loading,
  className,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={className || "grid grid-cols-1 md:grid-cols-2 gap-6"}
    >
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">
          Tên đơn vị
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-2 text-sm border-gray-300"
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
          className={`w-full rounded-md border px-3 py-2 text-sm ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
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
          className={`w-full rounded-md border px-3 py-2 text-sm ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
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
          name="item"
          value={formData.item}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-2 text-sm border-gray-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">
          Trọng lượng (kg)
        </label>
        <input
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          className={`w-full rounded-md border px-3 py-2 text-sm ${
            errors.weight ? "border-red-500" : "border-gray-300"
          }`}
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
          name="sending_address"
          value={formData.sending_address}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-2 text-sm border-gray-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">
          Địa chỉ nhận hàng
        </label>
        <input
          type="text"
          name="receiving_address"
          value={formData.receiving_address}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-2 text-sm border-gray-300"
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
          disabled={loading} // Vô hiệu hóa nút khi đang loading
        >
          {loading ? "Đang gửi..." : submitButtonText}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
