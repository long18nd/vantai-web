import type { NewCardProps } from "./NewCategory";

const NewCard = ({ date, describe, img, title }: NewCardProps) => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm overflow-hidden h-full">
      <div className="w-full h-40 overflow-hidden flex-shrink-0">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{describe}</p>

        <div className="text-xs text-gray-500 mb-4">{date}</div>

        <div className="mt-auto">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <span>Xem thêm </span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
