import { useState, type ChangeEvent, type FormEvent } from "react";

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

interface ToastInfo {
  message: string;
  type: "success" | "error";
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  item: "",
  weight: "",
  sending_address: "",
  receiving_address: "",
};

const useContactForm = (
  onSuccess?: (data: FormData) => void,
  onApiError?: (error: string) => void,
  setToast?: (toast: ToastInfo | null) => void,
) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại là bắt buộc.";
    } else if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ (ví dụ: 0901234567).";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email là bắt buộc.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng.";
    }

    if (formData.weight && isNaN(Number(formData.weight))) {
      newErrors.weight = "Trọng lượng phải là số.";
    } else if (Number(formData.weight) < 0) {
      newErrors.weight = "Trọng lượng không thể là số âm.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setToast?.({
        message: "Vui lòng kiểm tra lại thông tin đã nhập.",
        type: "error",
      });
      return;
    }

    setLoading(true);

    const newContact = {
      ...formData,
    };

    console.log("New contact data to send:", newContact);

    try {
      const response = await fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Có lỗi khi gửi dữ liệu!");
      }

      setToast?.({
        message: "Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.",
        type: "success",
      });

      onSuccess?.(formData);

      setFormData(initialFormData);
      setErrors({});
    } catch (error: any) {
      console.error("Lỗi khi gửi request:", error);
      setToast?.({
        message:
          error.message || "Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.",
        type: "error",
      });
      onApiError?.(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    loading,
    setFormData,
    setErrors,
  };
};

export default useContactForm;
