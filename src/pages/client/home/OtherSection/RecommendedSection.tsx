import { FaTrophy, FaClipboardList, FaTags } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { MdPublic } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import FeatureCard from "./FeatureCard.tsx";

const features = [
  {
    icon: <FaTrophy size={28} />,
    title: "Giao hàng nhanh nhất",
    content: (
      <>
        <p>Thời gian giao nhanh hơn đơn vị khác</p>
        <p>
          <strong>Nha Trang</strong> – nhanh hơn 6 giờ
        </p>
        <p>
          <strong>Đà Nẵng</strong> – nhanh hơn 12 giờ
        </p>
        <p>
          <strong>Hà Nội</strong> – nhanh hơn 24 giờ
        </p>
      </>
    ),
  },
  {
    icon: <FiPackage size={28} />,
    title: "Đa dạng gói dịch vụ",
    content: (
      <>
        <p>Gói tốc độ – giao siêu nhanh</p>
        <p>Gói tiết kiệm – an toàn, hợp lý</p>
      </>
    ),
  },
  {
    icon: <MdPublic size={28} />,
    title: "Phủ sóng toàn quốc",
    content: (
      <>
        <p>Giao hàng tới mọi miền 63 tỉnh thành</p>
      </>
    ),
  },
  {
    icon: <FaClipboardList size={28} />,
    title: "Tra cứu, quản lý dễ dàng",
    content: (
      <>
        <p>Tra cứu giá cước tự động</p>
        <p>Theo dõi đơn hàng theo thời gian thực</p>
        <p>Xóa tan nỗi lo đơn hàng thất lạc</p>
      </>
    ),
  },
  {
    icon: <FaTags size={28} />,
    title: "Tiết kiệm chi phí",
    content: (
      <>
        <p>Loại bỏ công đoạn hỏi giá, tình trạng đơn</p>
        <p>Giảm chi phí cho doanh nghiệp</p>
      </>
    ),
  },
  {
    icon: <AiOutlinePieChart size={28} />,
    title: "Dịch vụ ổn định nhất",
    content: (
      <>
        <p>Giao đúng hẹn: 96,72%</p>
        <p>Đền bù thấp: 0,86%</p>
        <p>Hài lòng khách hàng: 94,52%</p>
      </>
    ),
  },
];

const RecommendedSection = () => {
  return (
    <div
      id="recommended"
      className="h-auto py-16 px-6 bg-[#163C63] text-white text-sm"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          <span className="text-blue-400 font-bold text-3xl">1001+</span> LÝ
          DO NÊN CHỌN VẬN TẢI BẮC NAM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedSection;
