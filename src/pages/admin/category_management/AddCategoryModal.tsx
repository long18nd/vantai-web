import { useState, useEffect } from "react"; // Đảm bảo import useEffect
import type Category from "../../../type/category";

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newCategory: Category) => void;
}

const AddCategoryModal = ({
  isOpen,
  onClose,
  onSuccess,
}: AddCategoryModalProps) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  // Reset form khi modal đóng
  useEffect(() => {
    if (!isOpen) {
      setName("");
      setSlug("");
      setLoading(false);
      setError(null);
      setValidationErrors({});
    }
  }, [isOpen]);

  // Xử lý tạo slug tự động từ tên
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    setValidationErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors.name;
      return newErrors;
    });

    const newSlug = newName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    setSlug(newSlug);
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value);
    setValidationErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors.slug;
      return newErrors;
    });
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!name.trim()) errors.name = "Tên chuyên mục là bắt buộc.";
    if (!slug.trim()) errors.slug = "Slug là bắt buộc.";
    else if (!/^[a-z0-9-]+$/.test(slug))
      errors.slug = "Slug chỉ được chứa chữ thường, số và dấu gạch ngang.";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, slug }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Thêm chuyên mục thất bại.");
      }

      const newCategory: Category = await response.json();
      onSuccess(newCategory);
      onClose(); // Đóng modal
      alert("Thêm chuyên mục thành công!");
    } catch (err: any) {
      console.error("Error adding category:", err);
      setError(err.message || "Không thể thêm chuyên mục.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    // Lớp nền overlay mờ và căn giữa
    <div
      className="fixed inset-0 bg-[#f5f5f596] flex items-center justify-center z-50"
      onClick={onClose} // Đóng modal khi click ra ngoài nền mờ
    >
      {/* Modal chính */}
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-auto relative"
        onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click lan truyền ra lớp nền
      >
        <h3 className="text-xl font-bold mb-4">Thêm mới chuyên mục</h3>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold" // Thêm font-bold cho X to hơn
        >
          &times;
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Tên chuyên mục:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                validationErrors.name ? "border-red-500" : ""
              }`}
              required
            />
            {validationErrors.name && (
              <p className="text-red-500 text-xs italic">
                {validationErrors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="slug"
              className="block text-gray-700 font-bold mb-2"
            >
              Slug:
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={slug}
              onChange={handleSlugChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                validationErrors.slug ? "border-red-500" : ""
              }`}
              required
            />
            {validationErrors.slug && (
              <p className="text-red-500 text-xs italic">
                {validationErrors.slug}
              </p>
            )}
          </div>

          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Lỗi!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              Hủy
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? "Đang thêm..." : "Thêm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
