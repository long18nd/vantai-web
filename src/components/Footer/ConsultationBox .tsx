import Img from "../../assets/imgs/bg_top-footer.jpg";

const ConsultationBox = () => {

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',     
      });
    }
  };

  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat h-[700px] md:h-[900px] lg:h-[1000px]"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="max-w-xl mx-auto bg-[#f7f4e3] bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl px-6 md:px-12 py-10 text-center z-10">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Thử trải nghiệm dịch vụ vận chuyển hoàn toàn khác
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Nhanh hơn, chính xác hơn, theo dõi vận chuyển dễ dàng hơn<br />
            và còn nhiều hơn thế nữa
          </p>
          <button
            onClick={handleScrollToContact} 
            className="w-full sm:w-auto bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition"
          >
            NHẬN TƯ VẤN NGAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBox;