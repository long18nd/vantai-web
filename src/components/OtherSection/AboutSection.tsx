import img from "../../assets/imgs/banner-van-tai-bac-nam.jpg"
import bacground from "../../assets/imgs/background1.png"
import iCon1 from "../../assets/imgs/icon1.png"
import iCon2 from "../../assets/imgs/icon2.png"
import iCon3 from "../../assets/imgs/icon3.png"
import iCon4 from "../../assets/imgs/icon4.png"
import iCon5 from "../../assets/imgs/icon5.png"
import iCon6 from "../../assets/imgs/icon6.png"
import AboutCard from "./AboutCard"


const ListCard = [
    {
        icon: iCon1,
        count: "179",
        text: "Xe tải vận chuyển"
    },
    {
        icon: iCon2,
        count: "1,179",
        text: "Nhân viên toàn quốc"
    },
    {
        icon: iCon3,
        count: "67",
        text: "Điểm gửi hàng toàn quốc"
    },
    {
        icon: iCon4,
        count: "17,976",
        text: "Khách hàng tin dùng"
    },
    {
        icon: iCon5,
        count: "28,968",
        text: "Đơn hàng đang vận chuyển"
    },
    {
        icon: iCon6,
        count: "20,000",
        text: "Diện tích kho bãi"
    },
]

const AboutSection = () => {
    return (
        <div style={{
            backgroundImage: `url(${bacground})`,
            backgroundSize: 'auto',
            height: '780px',
        }}
            className="flex flex-row px-[320px] py-[70px]">
            <div className="w-[50%] flex flex-col">
                <h1 className="mt-[20px] text-3xl font-medium text-center">GIỚI THIỆU VẬN TẢI BẮC NAM</h1>
                <p className="mt-[40px] text-base">
                    Vận Tải Bắc Nam tự hào là đơn vị đi đầu về áp dụng công nghệ vào lĩnh vực vận chuyển nhằm mang tới trải nghiệm đột phá trong vận hành và quản lý đơn hàng siêu dễ dàng. Mong mỏi của chúng tôi khi áp dụng công nghệ là nhằm mang tới trải nghiệm logistics tốt nhất cho khách hàng cũng tối ưu để giảm cước vận chuyển hiện đang quá cao so với các nước trong khu vực.
                </p>
                <img className="mt-[20px]" src={img} />
            </div>

            <div className="w-[50%] flex flex-col items-center">
                <h1 className="mt-[20px] text-3xl font-medium text-center">SỐ LIỆU THỐNG KÊ</h1>
                <div className="mt-[40px] flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-around">
                        {
                            // @ts-ignore
                            ListCard.filter((card, index) => index < 3).map((card, index) => {
                                return (
                                    <AboutCard key={index} cout={card.count} icon={card.icon} text={card.text} />
                                )
                            })
                        }
                    </div>

                    <div className="flex flex-row items-center justify-around mt-[24px]">
                        {
                            // @ts-ignore
                            ListCard.filter((card, index) => index >= 3).map((card, index) => {
                                return (
                                    <AboutCard key={index} cout={card.count} icon={card.icon} text={card.text} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
