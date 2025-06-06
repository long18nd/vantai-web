import Img from "../../assets/imgs/bg_top-footer.jpg";

const ConsultationBox = () => {
  return (
    <div
      className="flex items-center justify-center bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: 'auto',
        height: '1000px',
      }}
    >
      <div className="max-w-4xl mx-auto bg-[#f7f4e3] rounded-xl shadow-lg p-8 text-center z-10 relative py-12">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          Thử trải nghiệm dịch vụ vận chuyển hoàn toàn khác
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Nhanh hơn, chính xác hơn, theo dõi vận chuyển dễ dàng hơn<br />
          và còn nhiều hơn thế nữa
        </p>
        <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition">
          NHẬN TƯ VẤN NGAY
        </button>
      </div>
    </div>
  );
};

export default ConsultationBox;
