type New = {
  id: string;
  createdAt: string;
  title: string;
  slug?: string; // Tùy chọn, nếu bạn có slug cho URL
  category: string;
  author: string;
  thumbnailUrl: string;
  description: string; // Có thể hiển thị hoặc không trên bảng
  content: string; // Có thể hiển thị hoặc không trên bảng
  views: number;
  status: "draft" | "published" | "archived"; // Ví dụ về các trạng thái
};

export default New;
