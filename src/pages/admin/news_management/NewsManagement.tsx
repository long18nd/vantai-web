import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { DeleteIcon } from "lucide-react";
import type { New } from "../../../type/new";

const NewsManagement = () => {
  const [news, setNews] = useState<New[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch news.");
        }
        const data: New[] = await response.json();
        console.log("Fetched news data:", data);

        setNews(data);
      } catch (err: any) {
        console.error("Error fetching news:", err);
        setError(err.message || "Không thể tải tin tức.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleDeleteNews = async (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tin tức này không?")) {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Có lỗi xảy ra khi xóa tin tức.",
          );
        }

        setNews(news.filter((item) => item.id !== id));
        alert("Tin tức đã được xóa thành công!");
      } catch (err: any) {
        console.error("Error deleting news:", err);
        alert(err.message || "Có lỗi xảy ra khi xóa tin tức.");
      }
    }
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
    <div>
      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Quản lý tin tức</h2>

        {/* Nút thêm mới tin tức */}
        <div className="mb-4">
          <Link
            to="/admin/quan-ly-bai-viet/them"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Thêm mới tin tức
          </Link>
        </div>

        <div className="overflow-x-auto">
          {" "}
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">Ngày tạo</th>
                <th className="border p-2 text-left">Danh mục</th>
                <th className="border p-2 text-left">Tiêu đề</th>
                <th className="border p-2 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {news.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center p-4">
                    Không có dữ liệu tin tức
                  </td>
                </tr>
              ) : (
                news.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border p-2">
                      {new Date(item.created_at).toLocaleString()}
                    </td>
                    <td className="border p-2">
                      {item.category ? item.category.name : "Không xác định"}
                    </td>
                    <td className="border p-2">{item.title}</td>
                    <td className="border p-2 text-center">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <button
                          onClick={() => handleDeleteNews(item.id)}
                          className="text-red-600 hover:underline flex flex-row items-center justify-center"
                        >
                          <DeleteIcon className="mr-1" />
                          <span>Xóa</span>
                        </button>
                        <Link
                          to={`/news/${item.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-row items-center justify-center text-black hover:text-blue-600 hover:underline"
                        >
                          <IoEyeSharp className="mr-1" />
                          <span>Chi tiết</span>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsManagement;
