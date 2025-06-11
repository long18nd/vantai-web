export default interface Category {
  id: number;
  name: string;
  slug: string; // Chuỗi thân thiện với URL, duy nhất
  description?: string; // Mô tả danh mục, có thể null
}
