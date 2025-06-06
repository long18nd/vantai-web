interface ServiceCardProps {
    content : string,
    img : string,
    title : string,
}

const ServiceCard = ({content, img, title} : ServiceCardProps) => {
  return (
      <div className="flex flex-col p-[16px] w-[280px] h-[400px] border border-solid rounded-xl">
        <div className="flex justify-center items-center">
          <img
            src={img}
            alt="Vận tải Bắc Nam"
            className="w-auto"
          />
        </div>

        <div>
            <h3 className="text-amber-600 text-xl font-medium text-center mt-[20px] mb-[20px]">
                {title}
            </h3>
        </div>

        <div>
            <p className="text-gray-400 text-xs text-center">{content}</p>
        </div>
      </div>
  )
}

export default ServiceCard
