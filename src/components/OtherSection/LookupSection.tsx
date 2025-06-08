import bgImg from "../../assets/imgs/bg-tra-cuu.png";

const LookupSection = () => {
  return (
    <section
      className="w-full bg-no-repeat bg-cover bg-center py-10"
      style={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "900px",
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row justify-between items-center">
        {/* Left: Text giới thiệu */}
        <div className="md:w-1/2 text-white text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            TRA CỨU CƯỚC VẬN TẢI <br /> BẮC NAM
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Tra cước vận chuyển hàng hóa nhanh chóng, dễ dàng, chính xác
          </p>
        </div>

        {/* Right: Form */}
        <div className="md:w-[450px] w-full bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Gửi từ</label>
              <select className="w-full border p-2 rounded">
                <option>Chọn Tỉnh/TP</option>
              </select>
              <select className="w-full border mt-2 p-2 rounded">
                <option>Chọn Quận/Huyện</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Gửi đến</label>
              <select className="w-full border p-2 rounded">
                <option>Chọn Tỉnh/TP</option>
              </select>
              <select className="w-full border mt-2 p-2 rounded">
                <option>Chọn Quận/Huyện</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Cân nặng"
              className="border p-2 rounded w-full"
            />
            <select className="border p-2 rounded w-full">
              <option>Kg</option>
            </select>
          </div>

          <select className="w-full border p-2 rounded">
            <option>Hình thức vận chuyển</option>
            <option>VP - VP</option>
          </select>

          <select className="w-full border p-2 rounded">
            <option>Chọn gói dịch vụ</option>
            <option>VCN - vận chuyển nhanh</option>
          </select>

          <select className="w-full border p-2 rounded">
            <option>Thu hồi biên bản</option>
            <option>Có</option>
            <option>Không</option>
          </select>

          <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded font-semibold">
            Tra cứu ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default LookupSection;