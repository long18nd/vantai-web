import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { useEffect, useState } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa"; // Thêm icons cho nút actions
import type Contact from "../../../type/contact";

const ContactDetail = () => {
  const { id } = useParams<{ id: string }>(); // id từ URL là string
  const navigate = useNavigate();

  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State để quản lý dữ liệu form khi chỉnh sửa
  const [formData, setFormData] = useState<Partial<Contact>>({});
  // State để kiểm soát chế độ chỉnh sửa
  const [isEditing, setIsEditing] = useState(false);
  // State cho lỗi submit
  const [submitError, setSubmitError] = useState<string | null>(null);
  // State cho trạng thái submit (ví dụ: "Đang lưu...")
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch chi tiết liên hệ
  useEffect(() => {
    const fetchContactDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/contacts/${id}`,
        ); // CẬP NHẬT CỔNG VÀ ĐƯỜNG DẪN API
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Liên hệ không tìm thấy.");
          }
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Không thể tải chi tiết liên hệ.",
          );
        }
        const data: Contact = await response.json();
        setContact(data);
        setFormData(data); // Khởi tạo formData với dữ liệu hiện có
      } catch (err: any) {
        console.error("Error fetching contact:", err);
        setError(err.message || "Đã xảy ra lỗi khi tải chi tiết liên hệ.");
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetail();
  }, [id]); // id là dependency để re-fetch khi id thay đổi

  // Xử lý thay đổi input trong chế độ chỉnh sửa
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value === "" ? null : value, // Chuyển rỗng thành null cho các trường có thể null
    }));
  };

  // Xử lý khi người dùng click Save
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    // Chuẩn bị dữ liệu để gửi đi
    const dataToUpdate: Partial<Contact> = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      item: formData.item === "" ? null : formData.item,
      weight: formData.weight === "" ? null : formData.weight,
      sending_address:
        formData.sending_address === "" ? null : formData.sending_address,
      receiving_address:
        formData.receiving_address === "" ? null : formData.receiving_address,
      note: formData.note === "" ? null : formData.note,
    };

    // Loại bỏ created_at, id khỏi dataToUpdate nếu chúng có trong formData
    // Backend sẽ không cần và có thể lỗi nếu nhận chúng
    delete dataToUpdate.created_at;
    // delete dataToUpdate.id; // ID là trên URL, không gửi trong body

    try {
      const response = await fetch(`http://localhost:3000/api/contacts/${id}`, {
        method: "PUT", // Sử dụng PUT method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToUpdate),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Cập nhật liên hệ thất bại.");
      }

      const updatedContactData: Contact = await response.json(); // Backend trả về dữ liệu đã cập nhật
      setContact(updatedContactData); // Cập nhật lại contact state với dữ liệu mới nhất
      setIsEditing(false); // Thoát khỏi chế độ chỉnh sửa
      alert("Cập nhật liên hệ thành công!");
    } catch (err: any) {
      console.error("Error updating contact:", err);
      setSubmitError(err.message || "Không thể cập nhật liên hệ.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Nút hủy chỉnh sửa
  const handleCancelEdit = () => {
    setFormData(contact as Contact); // Khôi phục formData về dữ liệu gốc
    setIsEditing(false);
    setSubmitError(null); // Xóa lỗi submit
  };

  // Hiển thị trạng thái tải
  if (loading) {
    return <div className="p-4 text-center">Đang tải dữ liệu...</div>;
  }

  // Hiển thị lỗi nếu không tải được liên hệ
  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded shadow">
        <p>Lỗi: {error}</p>
        <button
          onClick={() => navigate("/admin/lien-he")}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Quay lại danh sách
        </button>
      </div>
    );
  }

  // Nếu không có contact (ví dụ: id không tồn tại)
  if (!contact) {
    return (
      <div className="p-4 text-center">
        Không tìm thấy liên hệ.
        <button
          onClick={() => navigate("/admin/lien-he")}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Quay lại danh sách
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Chi tiết liên hệ</h2>

      {/* Nút hành động (Chỉnh sửa / Lưu / Hủy) */}
      <div className="mb-4 flex justify-end space-x-2">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FaEdit className="mr-2" /> Chỉnh sửa
          </button>
        ) : (
          <>
            <button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
              disabled={isSubmitting}
            >
              <FaSave className="mr-2" /> {isSubmitting ? "Đang lưu..." : "Lưu"}
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded flex items-center"
              disabled={isSubmitting}
            >
              <FaTimes className="mr-2" /> Hủy
            </button>
          </>
        )}
      </div>

      {/* Hiển thị lỗi submit */}
      {submitError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Lỗi!</strong>
          <span className="block sm:inline"> {submitError}</span>
        </div>
      )}

      <div className="space-y-4">
        {" "}
        {/* Tăng khoảng cách giữa các trường */}
        {/* Ngày đăng ký */}
        <div>
          <strong>Ngày đăng ký:</strong>{" "}
          {contact.created_at && !isNaN(new Date(contact.created_at).getTime())
            ? new Date(contact.created_at).toLocaleString()
            : "Không hợp lệ"}
        </div>
        {/* Tên khách hàng / Công ty */}
        <div>
          <label className="block text-gray-700 font-bold mb-1">
            Tên khách hàng / Công ty:
          </label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <p className="text-gray-900">{contact.name}</p>
          )}
        </div>
        {/* Số điện thoại */}
        <div>
          <label className="block text-gray-700 font-bold mb-1">
            Số điện thoại:
          </label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <p className="text-gray-900">{contact.phone}</p>
          )}
        </div>
        {/* Email */}
        <div>
          <label className="block text-gray-700 font-bold mb-1">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <p className="text-gray-900">{contact.email}</p>
          )}
        </div>
        {/* Mặt hàng */}
        <div>
          <label className="block text-gray-700 font-bold mb-1">
            Mặt hàng:
          </label>
          {isEditing ? (
            <input
              type="text"
              name="item"
              value={formData.item || ""}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <p className="text-gray-900">{contact.item || "N/A"}</p>
          )}
        </div>
        {/* Trọng lượng */}
        <div>
          <label className="block text-gray-700 font-bold mb-1">
            Trọng lượng:
          </label>
          {isEditing ? (
            <input
              type="text"
              name="weight"
              value={formData.weight || ""}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ) : (
            <p className="text-gray-900">{contact.weight || "N/A"}</p>
          )}
        </div>
        {/* Địa chỉ gửi hàng */}
        <div>
          <label className="block text-gray-700 font-bold mb-1">
            Địa chỉ gửi hàng:
          </label>
          {isEditing ? (
            <textarea
              name="sending_address"
              value={formData.sending_address || ""}
              onChange={handleChange}
              rows={2}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          ) : (
            <p className="text-gray-900">{contact.sending_address || "N/A"}</p>
          )}
        </div>
        {/* Địa chỉ nhận hàng */}
        <div>
          <label className="block text-gray-700 font-bold mb-1">
            Địa chỉ nhận hàng:
          </label>
          {isEditing ? (
            <textarea
              name="receiving_address"
              value={formData.receiving_address || ""}
              onChange={handleChange}
              rows={2}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          ) : (
            <p className="text-gray-900">
              {contact.receiving_address || "N/A"}
            </p>
          )}
        </div>
        {/* Ghi chú */}
        <div>
          <label className="block text-gray-700 font-bold mb-1">Ghi chú:</label>
          {isEditing ? (
            <textarea
              name="note"
              value={formData.note || ""}
              onChange={handleChange}
              rows={3}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          ) : (
            <p className="text-gray-900">{contact.note || "N/A"}</p>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate("/admin/quan-ly-lien-he")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
