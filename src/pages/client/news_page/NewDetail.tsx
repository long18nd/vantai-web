// src/components/News/NewDetail.tsx

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { New, NewCardProps } from "../../../type/new";

const NewDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [newsArticle, setNewsArticle] = useState<NewCardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticleDetail = async () => {
      if (!slug) {
        setError("Slug bài viết không hợp lệ.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        // Fetch chi tiết bài viết từ backend dựa vào slug
        const response = await fetch(`http://localhost:3000/api/posts/${slug}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Không tìm thấy bài viết này.");
          }
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Không thể tải chi tiết bài viết.",
          );
        }

        const data: New = await response.json(); // Nhận dữ liệu backend theo kiểu 'New'

        // Ánh xạ dữ liệu từ kiểu 'New' (backend) sang 'NewCardProps' (frontend)
        const transformedData: NewCardProps = {
          id: data.id,
          title: data.title,
          slug: data.slug,
          describe: data.content, // Sử dụng content làm mô tả ngắn
          img: data.thumbnailUrl, // Ánh xạ thumbnailUrl sang img
          date: new Date(data.created_at).toLocaleDateString(), // Định dạng ngày
          content: data.content, // Giữ nội dung đầy đủ cho phần body của bài viết
          category: data.category, // Ánh xạ đối tượng category
        };

        setNewsArticle(transformedData);
      } catch (err: any) {
        console.error("Error fetching news article:", err);
        setError(
          err.message ||
            "Không thể tải chi tiết bài viết. Vui lòng thử lại sau.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArticleDetail();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <p>Đang tải bài viết...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 text-center text-red-500">
        <p>Lỗi: {error}</p>
        <Link
          to="/news"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Quay lại danh sách tin tức
        </Link>
      </div>
    );
  }

  if (!newsArticle) {
    return (
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <p>Bài viết không tồn tại.</p>
        <Link
          to="/news"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Quay lại danh sách tin tức
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
        <img
          src={newsArticle.img}
          alt={newsArticle.title}
          className="w-full h-auto object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">
          {newsArticle.title}
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Ngày đăng: {newsArticle.date}
        </p>
        {newsArticle.category && (
          <p className="text-gray-600 text-sm mb-4">
            Chuyên mục:{" "}
            <span className="font-semibold">{newsArticle.category.name}</span>
          </p>
        )}
        <div className="text-gray-700 leading-relaxed text-base">
          {/* Hiển thị nội dung đầy đủ của bài viết */}
          <p className="mb-4">{newsArticle.content}</p>
          {/* Nếu newsArticle.content là HTML, bạn có thể render nó bằng dangerouslySetInnerHTML:
          <div dangerouslySetInnerHTML={{ __html: newsArticle.content || '' }} />
          Nhưng hãy CẨN THẬN với XSS khi dùng dangerouslySetInnerHTML
          */}
        </div>
        <div className="mt-8">
          <Link
            to="/news"
            className="text-blue-600 hover:text-blue-800 text-lg font-medium flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7 7-7m7 14l-7-7 7-7"
              />
            </svg>
            Quay lại tin tức
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
