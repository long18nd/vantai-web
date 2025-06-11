import { useNavigate } from "react-router-dom";
import Img from "../../../assets/imgs/bg_top-footer.jpg";

const ConsultationBox = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat h-[700px] md:h-[900px] lg:h-[1000px]"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="max-w-xl mx-auto bg-[#f7f4e3] bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl px-6 md:px-12 py-10 text-center z-10">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Vận tải là yếu tố then chốt để kết nối và phát triển
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Chúng tôi cam kết mang đến dịch vụ vận tải hiệu quả, an toàn và
            <br /> đáng tin cậy, giúp bạn đạt được mục tiêu một cách nhanh chóng
            và dễ dàng
          </p>
          <button
            onClick={() => navigate("/lien-he")}
            className="w-full sm:w-auto bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition"
          >
            NHẬN TƯ VẤN NGAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBox;
