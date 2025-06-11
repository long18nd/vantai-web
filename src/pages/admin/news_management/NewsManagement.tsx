import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import type New from "../../../type/new";

const NewsManagement = () => {
  const [news, setNews] = useState<New[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  const handleDeleteNews = (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tin tức này không?")) {
      fetch(`http://localhost:3001/api/news/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            setNews(news.filter((item) => item.id !== id));
            alert("Tin tức đã được xóa thành công!");
          } else {
            alert("Có lỗi xảy ra khi xóa tin tức.");
          }
        })
        .catch((error) => {
          console.error("Error deleting news:", error);
          alert("Có lỗi xảy ra khi xóa tin tức.");
        });
    }
  };

  return (
    <div>
      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Quản lý tin tức</h2>

        {/* Nút thêm mới tin tức */}
        <div className="mb-4">
          <Link
            to="/admin/news/add" // Đường dẫn tới trang thêm mới tin tức
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Thêm mới tin tức
          </Link>
        </div>

        {loading ? (
          <p>Đang tải dữ liệu...</p>
        ) : (
          <div className="overflow-x-auto">
            {" "}
            {/* Dùng overflow-x-auto để bảng cuộn ngang nếu quá rộng */}
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2 text-left">Ngày tạo</th>
                  <th className="border p-2 text-left">Ảnh đại diện</th>
                  <th className="border p-2 text-left">Tiêu đề</th>
                  <th className="border p-2 text-left">Danh mục</th>
                  <th className="border p-2 text-left">Tác giả</th>
                  <th className="border p-2 text-left">Lượt xem</th>
                  <th className="border p-2 text-left">Trạng thái</th>
                  <th className="border p-2 text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {news.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border p-2">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                    <td className="border p-2">
                      {item.thumbnailUrl ? (
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          className="w-20 h-12 object-cover rounded" // Điều chỉnh kích thước ảnh phù hợp
                        />
                      ) : (
                        <span className="text-gray-400">Không ảnh</span>
                      )}
                    </td>
                    <td className="border p-2">{item.title}</td>
                    <td className="border p-2">{item.category}</td>
                    <td className="border p-2">{item.author}</td>
                    <td className="border p-2">{item.views || 0}</td>
                    <td className="border p-2">{item.status}</td>
                    <td className="border p-2 text-center">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        {/* Nút Chỉnh sửa */}
                        <Link
                          to={`/admin/news/edit/${item.id}`} // Đường dẫn tới trang chỉnh sửa tin tức
                          className="text-blue-600 hover:underline"
                        >
                          Chỉnh sửa
                        </Link>
                        {/* Nút Xóa */}
                        <button
                          onClick={() => handleDeleteNews(item.id)}
                          className="text-red-600 hover:underline"
                        >
                          Xóa
                        </button>
                        {/* Nút Xem chi tiết (ngoài frontend) */}
                        <Link
                          to={`/news/${item.slug || item.id}`} // Giả định có slug hoặc dùng id để xem tin tức ở frontend
                          target="_blank" // Mở trong tab mới
                          rel="noopener noreferrer"
                          className="flex flex-row items-center justify-center text-black hover:text-blue-600 hover:underline"
                        >
                          <IoEyeSharp className="mr-1" />
                          <span>Xem</span>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
                {news.length === 0 && (
                  <tr>
                    <td colSpan={8} className="text-center p-4">
                      Không có dữ liệu tin tức
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsManagement;
