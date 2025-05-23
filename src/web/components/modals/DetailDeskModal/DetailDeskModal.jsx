import React from "react";

import { Modal, Divider } from "antd";
import { MainCarousel } from "./MainCarousel";

export const DetailDeskModal = ({open, close}) => {
  return (
    <Modal
        open={open}
        onCancel={close}
        footer={null}
        width={500}
    >
        <div className="p-4">
            <div>
                <MainCarousel />
            </div>
            <div className="flex flex-col gap-y-1 p-2 text-base">
                <div className="flex">
                    <span className="w-[180px]">Bàn số</span>
                    <span>8</span>
                </div>
                <div className="flex">
                    <span className="w-[180px]">Số người</span>
                    <span>
                        <span>4 - 8</span>
                        <span>&nbsp;người</span>
                    </span>
                </div>
                <div className="flex">
                    <span className="w-[180px]">Thời gian sử dụng</span>
                    <span>
                        <span>60</span>
                        <span>&nbsp;phút</span>
                    </span>
                </div>
                <div className="flex">
                    <span className="w-[180px]">Giá bàn</span>
                    <span className="text-green-500">300.000đ</span>
                </div>
            </div>
            <Divider className="my-1!">
                <p className="text-base font-medium px-2">Chi tiết</p>
            </Divider>
            <div className="flex flex-col gap-y-1 p-2 text-base">
                <div className="flex">
                    <span className="w-[180px]">Vị trí</span>
                    <span>Tầng 1</span>
                </div>
                <div className="flex">
                    <span className="w-[180px]">Kiểu dáng</span>
                    <span>Bàn tròn</span>
                </div>
                <span className="mt-2">Bàn vuông dành cho nhóm từ 4 đến 8 người, phù hợp cho bữa ăn gia đình hoặc nhóm bạn.</span>
            </div>
            <div className="mt-4 flex justify-center items-center">
                <button className="px-4 py-1 text-base font-medium text-white bg-green-600 rounded-lg cursor-pointer hover:bg-green-500 transition">Đặt bàn</button>
            </div>
        </div>
    </Modal>
  )
}
