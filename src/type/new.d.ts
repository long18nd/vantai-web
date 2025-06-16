// src/type/new.d.ts

import type Category from "./category"; // Import Category từ file category.d.ts

export type New = {
  id: number;
  title: string;
  slug: string;
  content: string; // Nội dung đầy đủ của bài viết
  thumbnailUrl: string; // URL ảnh từ backend
  created_at: string; // Ngày tạo từ backend
  categoryId: number; // ID của category
  category: Category; // Đối tượng category đầy đủ
};

export interface NewCardProps {
  id: number;
  img: string; // Sẽ ánh xạ từ 'thumbnailUrl'
  title: string;
  describe: string; // Sẽ ánh xạ từ 'content' hoặc một trường 'description' khác
  date: string; // Sẽ ánh xạ từ 'created_at'
  slug: string;
  content?: string; // Tùy chọn: nội dung đầy đủ (cho NewDetail, không phải NewCard)
  category?: Category; // **ĐÃ THÊM TRƯỜNG NÀY ĐỂ KHẮC PHỤC LỖI TYPESCRIPT**
}
