interface ServiceCardProps {
  content: string;
  img: string;
  title: string;
}

const ServiceCard = ({ content, img, title }: ServiceCardProps) => {
  return (
    <div className="flex flex-col p-6 w-[280px] h-[420px] border border-gray-600 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white right-shadow hover-right-shadow">
      <div className="flex justify-center items-center mb-4 h-[120px]">
        <img
          src={img}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-blue-600 text-lg font-semibold text-center mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-sm text-center leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default ServiceCard;
