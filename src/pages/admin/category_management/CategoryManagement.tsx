import { useEffect, useState, useCallback } from "react"; // Import useCallback
import { Link } from "react-router-dom";
import AddCategoryModal from "./AddCategoryModal"; // Import modal component
import type Category from "../../../type/category";

const CategoryManagement = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State để quản lý modal

  // Hàm để fetch categories, bọc trong useCallback để tránh re-render không cần thiết
  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true); // Đặt loading về true khi fetch lại
      setError(null); // Reset lỗi
      const response = await fetch("http://localhost:3000/api/categories");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch categories.");
      }
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (err: any) {
      console.error("Error fetching categories:", err);
      setError(err.message || "Không thể tải danh mục.");
    } finally {
      setLoading(false);
    }
  }, []); // Không có dependencies vì nó chỉ fetch 1 lần

  // Gọi fetchCategories khi component mount
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]); // fetchCategories là dependency

  // Xử lý xóa danh mục
  const handleDeleteCategory = async (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/categories/${id}`,
          {
            method: "DELETE",
          },
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Có lỗi xảy ra khi xóa danh mục.",
          );
        }

        setCategories(categories.filter((item) => item.id !== id));
        alert("Danh mục đã được xóa thành công!");
      } catch (err: any) {
        console.error("Error deleting category:", err);
        alert(err.message || "Có lỗi xảy ra khi xóa danh mục.");
      }
    }
  };

  // Hàm xử lý khi thêm chuyên mục thành công từ modal
  const handleAddCategorySuccess = (newCategory: Category) => {
    // Thêm chuyên mục mới vào danh sách hiện có
    setCategories((prevCategories) => [...prevCategories, newCategory]);
    // Không cần re-fetch toàn bộ nếu API trả về đối tượng mới
    // Tuy nhiên, nếu bạn muốn đảm bảo dữ liệu luôn mới nhất, bạn có thể gọi fetchCategories();
    // fetchCategories(); // Uncomment dòng này nếu bạn muốn re-fetch toàn bộ
  };

  if (loading) {
    return (
      <div className="p-6 bg-white rounded shadow text-center">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-100 border border-red-400 text-red-700 rounded shadow">
        <p>Lỗi: {error}</p>
        <p>Vui lòng đảm bảo backend đang chạy và kết nối đúng.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Quản lý danh mục</h2>

      {/* Nút thêm mới danh mục */}
      <div className="mb-4">
        <button
          onClick={() => setIsModalOpen(true)} // Mở modal khi nhấn nút
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Thêm mới chuyên mục
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">ID</th>
              <th className="border p-2 text-left">Tên danh mục</th>
              <th className="border p-2 text-left">Slug</th>
              <th className="border p-2 text-left">Ngày tạo</th>
              <th className="border p-2 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  Không có dữ liệu danh mục
                </td>
              </tr>
            ) : (
              categories.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.slug}</td>
                  <td className="border p-2">
                    {item.createdAt &&
                    !isNaN(new Date(item.createdAt).getTime())
                      ? new Date(item.createdAt).toLocaleString()
                      : "Không hợp lệ"}
                  </td>
                  <td className="border p-2 text-center">
                    <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2 space-y-2 sm:space-y-0">
                      <Link
                        to={`/admin/categories/edit/${item.id}`}
                        className="text-blue-600 hover:underline px-2 py-1 rounded border border-blue-600 text-sm"
                      >
                        Chỉnh sửa
                      </Link>
                      <button
                        onClick={() => handleDeleteCategory(item.id)}
                        className="text-red-600 hover:underline px-2 py-1 rounded border border-red-600 text-sm"
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal thêm chuyên mục */}
      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleAddCategorySuccess}
      />
    </div>
  );
};

export default CategoryManagement;
