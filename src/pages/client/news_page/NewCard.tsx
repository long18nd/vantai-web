import type { NewCardProps } from "./NewCategory"; // Giữ nguyên import type

const NewCard = ({ date, describe, img, title }: NewCardProps) => {
  return (
    // Thêm border, shadow, rounded corners và padding cho toàn bộ card
    <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full">
      {/* Container ảnh */}
      <div className="w-full h-40 overflow-hidden flex-shrink-0">
        <img
          src={img}
          alt={title} // Thêm alt text cho accessibility
          className="w-full h-full object-cover" // Đảm bảo ảnh vừa khung, không bị méo
        />
      </div>

      {/* Container nội dung văn bản */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* Tiêu đề */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
          {title}
        </h3>

        {/* Mô tả ngắn */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {" "}
          {/* Giới hạn 3 dòng */}
          {describe}
        </p>

        {/* Ngày đăng */}
        <div className="text-xs text-gray-500 mb-4">{date}</div>

        {/* Xem thêm link */}
        <div className="mt-auto">
          {" "}
          {/* Đẩy xuống dưới cùng */}
          <a
            href="#" // Thay # bằng đường dẫn thật của bài viết
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <span>Xem thêm </span>
            <span aria-hidden="true">&rarr;</span> {/* Mũi tên đẹp hơn */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
