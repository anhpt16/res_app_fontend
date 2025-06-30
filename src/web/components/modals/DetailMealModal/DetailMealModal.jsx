import {} from "react";

import { MainCarousel } from "./MainCarousel";

import { Modal, Spin, Divider } from "antd";

import { ClockIcon, DateIcon } from "../../../../shared/utils/icons/Icons";
import "./DetailMealModal.css";

export const DetailMealModal = ({open, close}) => {

    return (
        <Modal
        open={open}
        onCancel={close}
        footer={null}
        width={600}
        className="modal-detail">
            <div className="min-h-[700px] max-md:min-h-[600px]">
                <div className="flex flex-row max-md:flex-col gap-x-8">
                    <div>
                        <MainCarousel>
                        </MainCarousel>
                    </div>
                    <div className="max-md:mt-4">
                        <p className="text-xl font-medium">Bò lúc lắc khoai tây</p>
                        <div className="flex flex-col gap-y-2 mt-3">
                            <div className="flex">
                                <p className="text-sm font-medium w-[100px]">Thực đơn:</p>
                                <p className="text-sm">Món chính</p>
                            </div>
                            <div className="flex">
                                <p className="text-sm font-medium w-[100px]">Đơn vị:</p>
                                <p className="text-sm">Đĩa</p>
                            </div>
                            <div className="flex">
                                <p className="text-sm font-medium w-[100px]">Giá:</p>
                                <div className="text-sm">
                                    <span>100.000đ</span>
                                    <span className="ms-4 text-gray-400 line-through">120.000đ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-base font-medium">Mô tả chi tiết</p>
                    <div className="w-15 modal-detail-divider">
                        <Divider className="bg-amber-500 rounded h-[3px]"/>
                    </div>
                    <div className="mt-3 flex gap-2">
                        <ClockIcon className="h-5 w-5" />
                        <span className="text-sm">10 phút - 20 phút</span>
                    </div>
                    <div className="mt-2 flex gap-2">
                        <p className="font-medium text-sm">Nguyên liệu:</p>
                        <span className="text-sm">Thịt bò, khoai tây, hành tây, ớt chuông, tỏi, tiêu,...</span>
                    </div>
                    <div className="text-sm mt-3">
                        <p>
                            Bò lúc lắc là món ăn có nguồn gốc từ ẩm thực Pháp – Việt,
                             xuất hiện từ thời kỳ thuộc địa Pháp tại Việt Nam (cuối thế kỷ 19, đầu thế kỷ 20).
                             Vào thời đó, các đầu bếp Việt bắt đầu tiếp xúc với phong cách nấu ăn phương Tây, 
                             đặc biệt là nguyên liệu thịt bò – một nguyên liệu cao cấp lúc bấy giờ.
                        </p>
                        <p className="mt-3">
                            Tên gọi "lúc lắc" xuất phát từ hình ảnh miếng thịt bò được xào lăn nhẹ trong chảo, lắc lên theo tay người đầu bếp.
                             Những miếng thịt vuông, nhỏ, mềm được đảo nhanh tay trên chảo nóng đã tạo nên cái tên thú vị và gần gũi: “bò lúc lắc”.
                        </p>
                        <p className="mt-3">
                            Về sau, món ăn này được biến tấu để phù hợp với khẩu vị người Việt và kết hợp thêm khoai tây chiên kiểu Pháp 
                            (Pommes Frites) – tạo nên "Bò lúc lắc khoai tây" vừa có nét phương Tây, vừa đậm đà hương vị châu Á.
                        </p>
                    </div>
                    <div className="mt-3 flex flex-col gap-2">
                        <div className="flex text-amber-500">
                            <p className="w-[160px]">Thời gian giảm giá:</p>
                            <span>2d:19:23:10</span>
                        </div>
                        <div className="flex text-amber-500">
                            <p className="w-[160px]">Sắp ra mắt:</p>
                            <div className="flex items-center gap-1">
                                <DateIcon className="w-4 h-4"/>
                                <span>17/04/2024</span>
                            </div>
                        </div>
                        <div className="flex text-red-600">
                            <p className="w-[160px]">Sắp kết thúc:</p>
                            <div className="flex items-center gap-1">
                                <DateIcon className="w-4 h-4"/>
                                <span>17/04/2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
