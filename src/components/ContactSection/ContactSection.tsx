import PhoneIcon from "../../assets/imgs/icon_phone.png"
import TimeIcon from "../../assets/imgs/icon_time.png"
import SupIcon from "../../assets/imgs/icon_support.png"
import MailIcon from "../../assets/imgs/icon_phone.png"
import Background from "../../assets/imgs/background.png"


const ContactSection = () => {
    return (
        <div className="flex flex-row px-[320px] py-[70px] bg-white">
            <div>
                <div className="flex flex-row">
                    <div className="w-[70%]">
                        <div className="pb-[40px]">
                            <h1 className="text-[#27343b] text-center text-2xl">LIÊN HỆ ĐỂ ĐƯỢC PHỤC VỤ TỐT HƠN</h1>
                            <div className="text-center">_______________________________________</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-row items-center">
                                <img className="mr-[24px]" src={PhoneIcon} />
                                <span> 098 44 22 555</span>
                            </div>
                            <div className="flex flex-row items-center">
                                <img className="mr-[24px]" src={TimeIcon} />
                                <div>
                                    <div>Thời gian làm việc:</div>
                                    <div>07:00 - 21:00 (Thứ hai - Chủ nhật)</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <img className="mr-[24px]" src={SupIcon} />
                                <div>
                                    <div>028 3719 8019</div>
                                    <div>( Call 24/7)</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <img className="mr-[24px]" src={MailIcon} />
                                <span>quylongtransport@gmail.com</span>
                            </div>
                        </div>

                        <h3 className="my-[20px]">
                            Dành cho khách hàng muốn nhận thông tin và cập nhật bảng giá tốt nhất
                        </h3>

                        <div className="bg-[#141414] p-[10px]">
                            <input placeholder="Nhập email" type="email" className="w-[528px] h-[40px] mr-[10px] bg-white" />
                            <button className="w-[148px] h-[40px] bg-amber-600">
                                Đăng ký ngay
                            </button>
                        </div>

                        <div>
                            <img src={Background} />
                        </div>

                    </div>

                    <div className="ml-[24px] p-[16px]">
                        <h1 className="text-2xl text-[#123123]">NHẬN TƯ VẤN VẬN CHUYỂN</h1>
                        <p className="mt-[12px]">Có ngay ưu đãi 20% cước vận chuyển với đơn hàng đầu tiên khi để lại thông tin dưới đây:</p>
                        <form>
                            <div>
                                <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Tên đơn vị
                                    </label>
                                    <div>
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Số điện thoại
                                    </label>
                                    <div>
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Email
                                    </label>
                                    <div>
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Tên mặt hàng
                                    </label>
                                    <div>
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Trọng lượng/cân nặng
                                    </label>
                                    <div>
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Địa chỉ gửi hàng
                                    </label>
                                    <div>
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Địa chỉ nhận hàng
                                    </label>
                                    <div>
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                 <div className="sm:col-span-4">
                                    <button className="bg-amber-600 text-white mt-[12px] w-[336px] h-[36px]">Nhận tư vấn ngay</button>
                                 </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
