import NewCategory, { type NewCardProps } from "./NewCategory";

const News = () => {
  // Hàm tạo data mẫu để dễ dàng tạo nhiều bài viết
  const generateDummyNews = (
    count: number,
    category: string,
  ): NewCardProps[] => {
    return Array.from({ length: count }).map((_, i) => ({
      img: `https://via.placeholder.com/400x250/${Math.floor(Math.random() * 16777215).toString(16)}/FFFFFF?text=${category}+${i + 1}`,
      title: `Tiêu đề bài viết ${category} số ${i + 1}: Đây là một tiêu đề rất dài để test hiển thị`,
      describe: `Đây là mô tả ngắn gọn cho bài viết ${category} số ${i + 1}. Nội dung mô tả sẽ dài hơn để test tính năng line-clamp và xem thẻ có đồng đều chiều cao hay không.`,
      date: `0${(i % 12) + 1}/06/2025`,
      // id: `${category.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`,
    }));
  };

  const carNews: NewCardProps[] = generateDummyNews(8, "Xe Ô tô"); // 8 bài viết
  const motorbikeNews: NewCardProps[] = generateDummyNews(6, "Xe Máy"); // 6 bài viết
  const petNews: NewCardProps[] = generateDummyNews(4, "Thú Cưng"); // 4 bài viết (vừa đủ hiển thị hết trên desktop)
  const techNews: NewCardProps[] = generateDummyNews(3, "Công Nghệ"); // 3 bài viết (ít hơn 4, không hiện mũi tên trên desktop)

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
        Cập nhật Tin tức mới nhất
      </h1>

      <NewCategory categoryName="Tin tức xe máy" listCard={motorbikeNews} />

      <hr className="my-10 border-gray-300" />

      <NewCategory categoryName="Tin tức ô tô" listCard={carNews} />

      <hr className="my-10 border-gray-300" />

      <NewCategory categoryName="Tin tức thú cưng" listCard={petNews} />

      <hr className="my-10 border-gray-300" />

      <NewCategory categoryName="Tin tức công nghệ" listCard={techNews} />
    </div>
  );
};

export default News;
