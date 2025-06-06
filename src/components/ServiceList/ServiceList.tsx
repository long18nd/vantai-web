import ServiceCard from './ServiceCard'

import vc_oto from '../../assets/imgs/vc_nhanh.png'
import vc_xemay from '../../assets/imgs/vc_xemay.png'
import vc_tietkiem from '../../assets/imgs/vc_tietkiem.png'
import vc_nha from '../../assets/imgs/dv_logistics.png'


const ListService = [
    {
        title : "Vận chuyển ô tô",
        content :"Vận chuyển ô tô Bắc Nam bằng tàu hỏa là một trong những dịch vụ chủ lực của Quy Long Logistics, chúng tôi là đơn vị đi đầu trong việc hệ thống chuyên nghiệp dịch vụ giao ô tô door to door trọn gói tốt nhất.",
        img : vc_oto,
    },
    {
        title : "Vận chuyển xe máy",
        content :"BacNamtrans là đơn vị đầu tiên chuẩn hóa chuyên nghiệp dịch vụ vận chuyển xe máy trên toàn quốc.",
        img : vc_xemay,
    },
    {
        title : "Vận chuyển tiết kiệm",
        content :"Dịch vụ giao hàng tiêu chuẩn với giá cước cực rẻ nhằm tiết kiệm tối đa chi phí cho doanh nghiệp của bạn.",
        img : vc_tietkiem,
    },
    {
        title : "Vận chuyển nhà",
        content :"Dịch vụ chuyển nhà trọn gói Bắc Nam là một trong những dịch vụ chủ lực của Quy Long Logistics, chúng tôi là đơn vị đi đầu trong việc hệ thống chuyên nghiệp dịch vụ chuyển nhà, văn phòng trọn gói tốt nhất.",
        img : vc_nha,
    },
]

const ServiceList = () => {
  return (
    <div className='h-[640px] flex flex-col justify-around' >
        <h1 className='text-4xl font-medium text-center'>
            Vận chuyển hàng hóa Bắc Nam
        </h1>
        <div className='flex flex-row items-center justify-center'>
            {
                ListService.map((card, index) => {
                    return <div className='mr-[30px]'>
                        <ServiceCard key={index} content={card.content} img={card.img} title={card.title} />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default ServiceList
