import NewCard from "./NewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export interface NewCardProps {
  img: string;
  title: string;
  describe: string;
  date: string;
  // thêm id hoặc slug ở đây để tạo link chi tiết
  // id: string;
  // slug: string;
}

interface NewCategoryProps {
  categoryName: string;
  listCard?: NewCardProps[] | [];
}

const NewCategory = ({ categoryName, listCard }: NewCategoryProps) => {
  if (!listCard || listCard.length === 0) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-700 mb-4 uppercase flex items-center">
          <span className="inline-block w-6 h-0.5 bg-yellow-500 mr-2"></span>
          {categoryName}
        </h2>
        <p className="text-gray-500 italic">
          Không có tin tức nào trong chuyên mục này.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-8 relative group">
      <h2 className="text-xl font-bold text-gray-700 mb-4 uppercase flex items-center">
        <span className="inline-block w-6 h-0.5 bg-yellow-500 mr-2"></span>
        {categoryName}
      </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: `#swiper-button-prev-${categoryName.replace(/\s+/g, "-")}`,
          nextEl: `#swiper-button-next-${categoryName.replace(/\s+/g, "-")}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {listCard.map((card, idx) => (
          <SwiperSlide key={idx}>
            <NewCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
      {listCard.length > 4 && (
        <>
          <div
            id={`swiper-button-prev-${categoryName.replace(/\s+/g, "-")}`}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 
                       bg-white p-2 rounded-full shadow-md cursor-pointer 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div
            id={`swiper-button-next-${categoryName.replace(/\s+/g, "-")}`}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 
                       bg-white p-2 rounded-full shadow-md cursor-pointer 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default NewCategory;
