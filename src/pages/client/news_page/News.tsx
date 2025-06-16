// src/components/News/News.tsx

import { useEffect, useState, useCallback } from "react";
// Import các kiểu dữ liệu từ file định nghĩa kiểu chung
import NewCategory from "./NewCategory"; // Import component NewCategory
import type { New, NewCardProps } from "../../../type/new";
import type Category from "../../../type/category";

const News = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [postsByCategory, setPostsByCategory] = useState<{
    [key: string]: NewCardProps[];
  }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // 1. Fetch Categories từ backend
      const categoriesResponse = await fetch(
        "http://localhost:3000/api/categories",
      );
      if (!categoriesResponse.ok) {
        throw new Error("Failed to fetch categories.");
      }
      const categoriesData: Category[] = await categoriesResponse.json();
      setCategories(categoriesData);

      // 2. Fetch Posts từ backend (đảm bảo API trả về bài viết kèm category)
      const postsResponse = await fetch("http://localhost:3000/api/posts");
      if (!postsResponse.ok) {
        throw new Error("Failed to fetch posts.");
      }
      const postsData: New[] = await postsResponse.json(); // Dữ liệu backend theo kiểu 'New'

      // 3. Nhóm bài viết theo category
      const groupedPosts: { [key: string]: NewCardProps[] } = {};

      // Khởi tạo các nhóm cho tất cả các category đã fetch
      categoriesData.forEach((cat) => {
        groupedPosts[cat.slug] = [];
      });
      // Thêm nhóm "uncategorized" nếu có bài viết không có category rõ ràng
      groupedPosts["uncategorized"] = [];

      postsData.forEach((post) => {
        // Ánh xạ dữ liệu từ kiểu 'New' (backend) sang 'NewCardProps' (frontend)
        const transformedCard: NewCardProps = {
          id: post.id,
          title: post.title,
          slug: post.slug,
          describe: post.content, // Sử dụng content làm mô tả ngắn
          img: post.thumbnailUrl, // Ánh xạ thumbnailUrl sang img
          date: new Date(post.created_at).toLocaleDateString(), // Định dạng ngày
          content: post.content, // Giữ nội dung đầy đủ
          category: post.category, // Ánh xạ đối tượng category
        };

        if (transformedCard.category && transformedCard.category.slug) {
          // Thêm bài viết vào nhóm category tương ứng
          groupedPosts[transformedCard.category.slug].push(transformedCard);
        } else {
          // Nếu bài viết không có category, thêm vào nhóm "uncategorized"
          groupedPosts["uncategorized"].push(transformedCard);
        }
      });
      setPostsByCategory(groupedPosts);
    } catch (err: any) {
      console.error("Error fetching data:", err);
      setError(err.message || "Không thể tải dữ liệu. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 text-center text-red-500">
        <p>Lỗi: {error}</p>
        <p>Vui lòng kiểm tra kết nối backend và cấu trúc dữ liệu.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
        Cập nhật Tin tức mới nhất
      </h1>

      {/* Render các chuyên mục từ database */}
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <div key={category.id}>
            <NewCategory
              categoryName={category.name}
              listCard={postsByCategory[category.slug] || []} // Lấy bài viết theo slug
            />
            {/* Thêm <hr> giữa các chuyên mục, trừ chuyên mục cuối cùng */}
            {index < categories.length - 1 && (
              <hr className="my-10 border-gray-300" />
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">
          Không có chuyên mục nào được tìm thấy từ cơ sở dữ liệu.
        </p>
      )}

      {/* Hiển thị các bài viết không có chuyên mục (nếu có) */}
      {postsByCategory["uncategorized"] &&
        postsByCategory["uncategorized"].length > 0 && (
          <>
            {/* Thêm <hr> nếu có ít nhất một chuyên mục từ DB được hiển thị */}
            {categories.length > 0 && <hr className="my-10 border-gray-300" />}
            <NewCategory
              categoryName="Tin tức khác" // Tên chuyên mục cho bài viết không có category
              listCard={postsByCategory["uncategorized"]}
            />
          </>
        )}
    </div>
  );
};

export default News;
