import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Dùng để điều hướng sau khi thêm thành công
import { IoCloudUploadOutline } from "react-icons/io5";
import type Category from "../../../type/category";
import type { New } from "../../../type/new";

const AddNew = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  // State cho form data
  const [formData, setFormData] = useState<Partial<New>>({
    title: "",
    slug: "",
    content: "",
    thumbnailUrl: "",
    categoryId: undefined, // undefined ban đầu, sẽ là number sau khi chọn
  });

  // State cho danh sách categories để populate dropdown
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [errorCategories, setErrorCategories] = useState<string | null>(null);

  // State cho quá trình submit
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // State cho validation errors
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  // Fetch categories khi component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/categories");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch categories.");
        }
        const data: Category[] = await response.json();
        setCategories(data);
        // Chọn category đầu tiên làm mặc định nếu có ít nhất 1 category
        if (data.length > 0) {
          setFormData((prev) => ({ ...prev, categoryId: data[0].id }));
        }
      } catch (err: any) {
        console.error("Error fetching categories:", err);
        setErrorCategories(err.message || "Không thể tải danh mục.");
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Xử lý thay đổi input
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "categoryId" ? parseInt(value) : value, // Chuyển categoryId thành số
    }));
    // Xóa lỗi validation khi người dùng bắt đầu nhập
    setValidationErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  // Basic client-side validation
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.title?.trim()) errors.title = "Tiêu đề là bắt buộc.";
    if (!formData.slug?.trim()) errors.slug = "Slug là bắt buộc.";
    if (!formData.content?.trim()) errors.content = "Nội dung là bắt buộc.";
    if (!formData.thumbnailUrl?.trim())
      errors.thumbnailUrl = "URL ảnh đại diện là bắt buộc.";
    else if (
      !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(formData.thumbnailUrl)
    ) {
      errors.thumbnailUrl = "URL ảnh đại diện không hợp lệ (phải là URL ảnh).";
    }
    if (formData.categoryId === undefined || isNaN(formData.categoryId))
      errors.categoryId = "Danh mục là bắt buộc.";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Xử lý submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null); // Reset lỗi submit trước đó

    if (!validateForm()) {
      return; // Dừng nếu validation thất bại
    }

    setLoadingSubmit(true);
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Gửi formData đã được kiểm tra
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Có lỗi xảy ra khi thêm tin tức.");
      }

      alert("Tin tức đã được thêm thành công!");
      navigate("/admin/news"); // Điều hướng về trang quản lý tin tức
    } catch (err: any) {
      console.error("Error adding news:", err);
      setSubmitError(err.message || "Không thể thêm tin tức.");
    } finally {
      setLoadingSubmit(false);
    }
  };

  if (loadingCategories) {
    return (
      <div className="p-6 bg-white rounded shadow text-center">
        <p>Đang tải danh mục...</p>
      </div>
    );
  }

  if (errorCategories) {
    return (
      <div className="p-6 bg-red-100 border border-red-400 text-red-700 rounded shadow">
        <p>Lỗi tải danh mục: {errorCategories}</p>
        <p>Vui lòng đảm bảo backend đang chạy và có dữ liệu danh mục.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Thêm mới tin tức</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Tiêu đề */}
        <div>
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Tiêu đề:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              validationErrors.title ? "border-red-500" : ""
            }`}
            required
          />
          {validationErrors.title && (
            <p className="text-red-500 text-xs italic">
              {validationErrors.title}
            </p>
          )}
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-gray-700 font-bold mb-2">
            Slug (URL thân thiện):
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug || ""}
            onChange={handleChange}
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

        {/* Danh mục */}
        <div>
          <label
            htmlFor="categoryId"
            className="block text-gray-700 font-bold mb-2"
          >
            Danh mục:
          </label>
          <select
            id="categoryId"
            name="categoryId"
            value={formData.categoryId || ""}
            onChange={handleChange}
            className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              validationErrors.categoryId ? "border-red-500" : ""
            }`}
            required
          >
            {categories.length === 0 ? (
              <option value="">Không có danh mục nào</option>
            ) : (
              <>
                <option value="">-- Chọn danh mục --</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </>
            )}
          </select>
          {validationErrors.categoryId && (
            <p className="text-red-500 text-xs italic">
              {validationErrors.categoryId}
            </p>
          )}
        </div>

        {/* URL ảnh đại diện */}
        <div>
          <label
            htmlFor="thumbnailUrl"
            className="block text-gray-700 font-bold mb-2"
          >
            URL Ảnh đại diện:
          </label>
          <div className="flex items-center border rounded">
            <input
              type="url" // Sử dụng type="url" để có validation cơ bản của trình duyệt
              id="thumbnailUrl"
              name="thumbnailUrl"
              value={formData.thumbnailUrl || ""}
              onChange={handleChange}
              className={`appearance-none rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                validationErrors.thumbnailUrl ? "border-red-500" : ""
              }`}
              placeholder="https://example.com/image.jpg"
              required
            />
            <button
              type="button" // Đặt type="button" để tránh submit form
              onClick={() =>
                alert("Chức năng tải ảnh lên sẽ được phát triển sau.")
              } // Tạm thời
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r flex items-center"
            >
              <IoCloudUploadOutline className="mr-1" /> Tải lên
            </button>
          </div>
          {validationErrors.thumbnailUrl && (
            <p className="text-red-500 text-xs italic">
              {validationErrors.thumbnailUrl}
            </p>
          )}
          {formData.thumbnailUrl && !validationErrors.thumbnailUrl && (
            <div className="mt-2">
              <img
                src={formData.thumbnailUrl}
                alt="Preview"
                className="max-w-xs h-auto rounded shadow"
              />
            </div>
          )}
        </div>

        {/* Nội dung */}
        <div>
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Nội dung:
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content || ""}
            onChange={handleChange}
            rows={10}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              validationErrors.content ? "border-red-500" : ""
            }`}
            required
          ></textarea>
          {validationErrors.content && (
            <p className="text-red-500 text-xs italic">
              {validationErrors.content}
            </p>
          )}
        </div>

        {/* Hiển thị lỗi submit từ API */}
        {submitError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Lỗi!</strong>
            <span className="block sm:inline"> {submitError}</span>
          </div>
        )}

        {/* Nút Submit */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loadingSubmit || loadingCategories} // Disable khi đang tải danh mục hoặc đang submit
          >
            {loadingSubmit ? "Đang thêm..." : "Thêm tin tức"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/news")} // Nút quay lại
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
