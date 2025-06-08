import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Contact {
  id: string;
  createdAt: string;
  customerName: string;
  phone: string;
  email: string;
  itemName: string;
  weight: string;
  fromAddress: string;
  toAddress: string;
}

const ContactDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Thay URL bằng API thật của bạn
    fetch(`http://localhost:3001/api/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setContact(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contact:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-4">Đang tải dữ liệu...</div>;
  if (!contact) return <div className="p-4">Không tìm thấy liên hệ</div>;

  return (
    <div className="p-6 bg-white rounded shadow max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Chi tiết liên hệ</h2>

      <div className="space-y-2">
        <div>
          <strong>Ngày đăng ký:</strong>{" "}
          {new Date(contact.createdAt).toLocaleString()}
        </div>
        <div>
          <strong>Tên khách hàng / Công ty:</strong> {contact.customerName}
        </div>
        <div>
          <strong>Số điện thoại:</strong> {contact.phone}
        </div>
        <div>
          <strong>Email:</strong> {contact.email}
        </div>
        <div>
          <strong>Mặt hàng:</strong> {contact.itemName}
        </div>
        <div>
          <strong>Trọng lượng:</strong> {contact.weight}
        </div>
        <div>
          <strong>Địa chỉ gửi hàng:</strong> {contact.fromAddress}
        </div>
        <div>
          <strong>Địa chỉ nhận hàng:</strong> {contact.toAddress}
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
