import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type Contact from "../../../type/contact";
import { IoEyeSharp } from "react-icons/io5";

const ContactManagement = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/contacts")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Quản lý liên hệ</h2>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div className="overflow-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Ngày đăng ký</th>
                <th className="border p-2">Tên KH / Công ty</th>
                <th className="border p-2">SĐT</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Mặt hàng</th>
                <th className="border p-2">Trọng lượng</th>
                <th className="border p-2">Nơi gửi</th>
                <th className="border p-2">Nơi nhận</th>
                <th className="border p-2">Ghi chú</th>
                <th className="border p-2">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="border p-2">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                  <td className="border p-2">{contact.customerName}</td>
                  <td className="border p-2">{contact.phone}</td>
                  <td className="border p-2">{contact.email}</td>
                  <td className="border p-2">{contact.itemName}</td>
                  <td className="border p-2">{contact.weight}</td>
                  <td className="border p-2">{contact.fromAddress}</td>
                  <td className="border p-2">{contact.toAddress}</td>
                  <td className="border p-2">{contact.note}</td>
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
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td colSpan={9} className="text-center p-4">
                    Không có dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactManagement;
