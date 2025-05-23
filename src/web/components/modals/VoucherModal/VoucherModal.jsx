import React from "react";

import { Modal, Divider } from "antd";

export const VoucherModal = ({open, close}) => {
  return (
    <Modal
    open={open}
    onCancel={close}
    footer={null}
    width={800}
    >
        <div className="p-4">
            <div className="flex gap-x-8 max-md:flex-col max-md:gap-y-4">
                <div className="w-[120px] h-[120px] max-md:mx-auto object-cover overflow-hidden rounded">
                    <img src="/meal_detail_default.webp" alt="Ảnh Mã Giảm Giá" />
                </div>
                <div>
                    <span className="text-xl font-medium">Giảm giá 50%</span>
                    <div className="flex flex-col gap-y-1 mt-2">
                        <div className="flex">
                            <span className="text-base w-[120px]">Mã</span>
                            <span className="text-base">GIAM50CD1</span>
                        </div>
                        <div className="flex">
                            <span className="text-base w-[120px]">Trạng thái</span>
                            <span className="text-base text-green-500">Hoạt động</span>
                        </div>
                        <div className="flex">
                            <span className="text-base w-[120px]">Số lượng</span>
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </div>
            <Divider className="my-4! hidden! max-md:block!" />
            <div className="mt-4 flex flex-col gap-y-1">
                <div className="flex gap-x-2 text-base">
                    <span>Hạn sử dụng:</span>
                    <span>17/04/2025</span>
                </div>
                <div className="flex gap-x-2 text-base">
                    <span>Áp dụng:</span>
                    <span>Món ăn trong hóa đơn</span>
                </div>
                <div className="flex gap-x-2 text-base">
                    <span>Hóa đơn tối thiểu:</span>
                    <span>1.200.000đ</span>
                </div>
                <div className="flex gap-x-2 text-base">
                    <span>Giảm:</span>
                    <span>50%</span>
                </div>
                <div className="flex gap-x-2 text-base">
                    <span>Giảm tối đa:</span>
                    <span>850.000đ</span>
                </div>
                <Divider><span className="text-base font-medium">Chi tiết</span></Divider>
                <p className="text-base">Nhập mã GIAM50CD1 để nhận giảm giá 50% cho toàn bộ món ăn trong hóa đơn. 
                    Áp dụng từ 10/04 đến 30/04. Không áp dụng cho đặt bàn và các khoản phụ phí. 
                    Mỗi khách hàng chỉ sử dụng được 1 lần.
                </p>
            </div>
        </div>
    </Modal>
  )
}
