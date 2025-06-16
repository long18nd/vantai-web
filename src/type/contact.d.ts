// src/types/contact.d.ts
interface Contact {
  id: number; // ID là số
  created_at: string; // Đã đổi tên theo phản hồi API của bạn
  email: string;
  item: string | null;
  name: string;
  phone: string;
  receiving_address: string | null;
  sending_address: string | null;
  weight: string | null;
  note: string | null; // Thêm trường note
}

export default Contact;
