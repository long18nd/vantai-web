import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type Contact from "../../../type/contact";
import { IoEyeSharp } from "react-icons/io5";

const ContactManagement = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/contacts");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch contacts.");
        }
        const data: Contact[] = await response.json();
        console.log("Fetched contacts data:", data);
        setContacts(data);
      } catch (err: any) {
        console.error("Error fetching contacts:", err);
        setError(err.message || "Không thể tải dữ liệu liên hệ.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

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
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Quản lý liên hệ</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Ngày đăng ký</th>
              <th className="border p-2 text-left">Tên KH / Công ty</th>
              <th className="border p-2 text-left">SĐT</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Mặt hàng</th>
              <th className="border p-2 text-left">Trọng lượng</th>
              <th className="border p-2 text-left">Nơi gửi</th>
              <th className="border p-2 text-left">Nơi nhận</th>
              <th className="border p-2 text-left">Ghi chú</th>
              <th className="border p-2 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={10} className="text-center p-4">
                  Không có dữ liệu liên hệ
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="border p-2">
                    {new Date(contact.created_at).toLocaleString()}
                  </td>
                  <td className="border p-2">{contact.name}</td>{" "}
                  <td className="border p-2">{contact.phone}</td>
                  <td className="border p-2">{contact.email}</td>
                  <td className="border p-2">{contact.item || "N/A"}</td>{" "}
                  <td className="border p-2">{contact.weight || "N/A"}</td>{" "}
                  <td className="border p-2">
                    {contact.sending_address || "N/A"}
                  </td>{" "}
                  <td className="border p-2">
                    {contact.receiving_address || "N/A"}
                  </td>{" "}
                  <td className="border p-2">{contact.note || "N/A"}</td>{" "}
                  <td className="border p-2 text-center">
                    <Link
                      to={`/admin/lien-he/${contact.id}`}
                      className="flex flex-row items-center justify-center text-black hover:text-blue-600 hover:underline"
                    >
                      <IoEyeSharp />
                      <span className="ml-[6px]">Chi tiết</span>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactManagement;
