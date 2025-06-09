import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./hero_section.css";
import slide1 from "../../../../assets/imgs/banner-01.jpg";
import slide2 from "../../../../assets/imgs/banner-02.jpg";
import slide3 from "../../../../assets/imgs/banner-03.jpg";

const slides = [slide1, slide2, slide3];

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
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
