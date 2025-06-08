import img from "../../assets/imgs/banner-van-tai-bac-nam.jpg";
import background from "../../assets/imgs/background1.png";
import iCon1 from "../../assets/imgs/icon1.png";
import iCon2 from "../../assets/imgs/icon2.png";
import iCon3 from "../../assets/imgs/icon3.png";
import iCon4 from "../../assets/imgs/icon4.png";
import iCon5 from "../../assets/imgs/icon5.png";
import iCon6 from "../../assets/imgs/icon6.png";
import AboutCard from "../../pages/client/home/OtherSection/AboutCard";

const ListCard = [
  { icon: iCon1, count: "179", text: "Xe tải vận chuyển" },
  { icon: iCon2, count: "1,179", text: "Nhân viên toàn quốc" },
  { icon: iCon3, count: "67", text: "Điểm gửi hàng toàn quốc" },
  { icon: iCon4, count: "17,976", text: "Khách hàng tin dùng" },
  { icon: iCon5, count: "28,968", text: "Đơn hàng đang vận chuyển" },
  { icon: iCon6, count: "20,000", text: "Diện tích kho bãi" },
];

const AboutSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="py-16"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-medium text-center mb-6">
            GIỚI THIỆU VẬN TẢI BẮC NAM
          </h1>
          <p className="text-base text-justify mb-6">
            Vận Tải Bắc Nam tự hào là đơn vị đi đầu về áp dụng công nghệ vào lĩnh
            vực vận chuyển nhằm mang tới trải nghiệm đột phá trong vận hành và
            quản lý đơn hàng siêu dễ dàng. Mong mỏi của chúng tôi khi áp dụng công
            nghệ là nhằm mang tới trải nghiệm logistics tốt nhất cho khách hàng
            cũng tối ưu để giảm cước vận chuyển hiện đang quá cao so với các nước
            trong khu vực.
          </p>
          <img className="rounded-lg shadow-md" src={img} alt="Giới thiệu" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h1 className="text-3xl font-medium text-center mb-6">SỐ LIỆU THỐNG KÊ</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {ListCard.map((card, index) => (
              <AboutCard key={index} cout={card.count} icon={card.icon} text={card.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
