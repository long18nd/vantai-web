import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./hero_section.css";
import type HeroSlide from "../../../../type/heroSlide";

const HeroSection = () => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${baseUrl}/api/hero-slides`);
        if (!response.ok) {
          throw new Error("Failed to fetch hero slides.");
        }
        const data: HeroSlide[] = await response.json();
        setSlides(data);
      } catch (err: any) {
        console.error("Error fetching hero slides:", err);
        setError(err.message || "Không thể tải slide. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-gray-100">
        <p>Đang tải slides...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-red-100 text-red-700">
        <p>Lỗi: {error}</p>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-gray-100">
        <p>Không có slide nào được tìm thấy.</p>
      </div>
    );
  }

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
      {slides.map((slide) => {
        const fullImageUrl =
          slide.imageUrl.startsWith("http://") ||
          slide.imageUrl.startsWith("https://")
            ? slide.imageUrl
            : `${baseUrl}/${slide.imageUrl}`;

        return (
          <SwiperSlide key={slide.id}>
            <a
              rel={slide.linkUrl ? "noopener noreferrer" : ""}
              className="w-full h-full bg-center bg-cover flex items-center justify-center relative group"
              style={{
                backgroundImage: `url(${fullImageUrl})`,
              }}
            >
              {(slide.title || slide.subtitle) && (
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center p-4">
                  {slide.title && (
                    <h2 className="text-3xl md:text-5xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              )}
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSection;
