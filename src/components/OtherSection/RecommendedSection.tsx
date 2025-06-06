import { FaTrophy, FaClipboardList, FaTags } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { MdPublic } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";

const features = [
  {
    icon: <FaTrophy size={28} />,
    title: "Giao hàng nhanh nhất",
    content: (
      <>
        <p>Thời gian giao nhanh hơn đơn vị khác</p>
        <p><strong>Nha Trang</strong> – giao nhanh hơn 6 giờ</p>
        <p><strong>Đà Nẵng</strong> – giao nhanh hơn 12 giờ</p>
        <p><strong>Hà Nội</strong> – giao nhanh hơn 24 giờ</p>
      </>
    ),
  },
  {
    icon: <FiPackage size={28} />,
    title: "Đa dạng gói dịch vụ",
    content: (
      <>
        <p>Đơn vị đầu tiên có các gói vận chuyển</p>
        <p>Vận chuyển tốc độ – giao siêu nhanh</p>
        <p>Vận chuyển tiết kiệm – an toàn, tiết kiệm</p>
      </>
    ),
  },
  {
    icon: <MdPublic size={28} />,
    title: "Phủ sóng toàn quốc",
    content: (
      <>
        <p>Năng lực vận chuyển giao hàng đi khắp 63 tỉnh thành</p>
      </>
    ),
  },
  {
    icon: <FaClipboardList size={28} />,
    title: "Tra cứu, quản lý dễ dàng",
    content: (
      <>
        <p>Tra cứu giá cước tự động, minh bạch</p>
        <p>Theo dõi đơn hàng theo thời gian thực</p>
        <p>Xua tan nỗi lo không biết đơn hàng của mình đang ở đâu</p>
      </>
    ),
  },
  {
    icon: <FaTags size={28} />,
    title: "Tiết kiệm chi phí",
    content: (
      <>
        <p>Công đoạn hỏi giá, tình trạng đơn hàng, hàng giao trễ làm mất thời gian và chi phí cho doanh nghiệp.</p>
        <p>Hãy yên tâm vì tất cả được kiểm soát qua hệ thống của Quy Long Logistics</p>
      </>
    ),
  },
  {
    icon: <AiOutlinePieChart size={28} />,
    title: "Dịch vụ ổn định nhất",
    content: (
      <>
        <p>Tỷ lệ giao hàng đúng hẹn 96,72%</p>
        <p>Tỷ lệ đền bù, hoàn trả chỉ 0,86%</p>
        <p>Tỷ lệ khách hàng hài lòng tới 94,52%</p>
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
        <h2 className="text-2xl font-semibold text-center text-white mb-10">
          <span className="text-orange-400 font-bold text-3xl">1001+</span>{" "}
          LÝ DO NÊN CHỌN VẬN TẢI BẮC NAM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="text-orange-300">{feature.icon}</div>
              <div>
                <h3 className="text-orange-400 font-semibold text-base mb-1">
                  {feature.title}
                </h3>
                <div className="text-gray-200 space-y-1">{feature.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedSection;
