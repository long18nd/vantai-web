import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import "./hero_section.css";
import slide1 from "../../../../assets/imgs/banner-01.jpg";
import slide2 from "../../../../assets/imgs/banner-02.jpg";
import slide3 from "../../../../assets/imgs/banner-03.jpg";

const slides = [
  {
    image: slide1,
    title: "DỊCH VỤ VẬN TẢI TOÀN QUỐC",
    subtitle: "Nhanh chóng – An toàn – Tiết kiệm",
  },
  {
    image: slide2,
    title: "CHUYÊN GIA GIAO NHẬN HÀNG HÓA",
    subtitle: "Xe tải, xe container, xe nâng… đầy đủ chủng loại",
  },
  {
    image: slide3,
    title: "ĐỘI NGŨ TÀI XẾ KINH NGHIỆM",
    subtitle: "Hỗ trợ tận nơi, chăm sóc 24/7",
  },
];

const HeroSection = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      pagination={{ clickable: true }}
      navigation
      loop
      speed={1600}
      className="w-full h-[60vh] md:h-[80vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-center bg-cover flex items-center justify-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black/60 backdrop-blur-sm w-full h-full absolute top-0 left-0 z-0" />
            <div className="text-white text-center z-10 px-4 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-xl">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
