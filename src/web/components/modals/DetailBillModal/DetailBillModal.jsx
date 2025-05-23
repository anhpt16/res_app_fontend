import React from "react";
import { Modal, Tooltip, Table, Divider } from "antd";
import "../../../../shared/styles/table_antd_custom.css";

export const DetailBillModal = ({open, close}) => {

    const deskColumns = [
        { title: "#", key: "index", width: 50, render: (_text, _record, index) => (index + 1), align: "center"},
        { title: "Bàn", key: "desk", dataIndex: "desk" },
        { title: "Thời gian", key: "time", dataIndex: "time", align: "center" },
        { title: "Thời lượng (Phút)", key: "duration", dataIndex: "duration", align: "center" },
        { title: "Thành tiền (VND)", key: "total", dataIndex: "total", align: "right" },
    ]
    const deskData = [
        { key: "1", desk: "Số 8", time: "24/04/2025 15:30:00", duration: "60", total: "200.000" }
    ]

    const mealColumns = [
        { title: "#", key: "index", width: 50, render: (_text, _record, index) => (index + 1), align: "center" },
        { title: "Tên món ăn", key: "name", dataIndex: "name" },
        { title: "Số lượng", key: "count", dataIndex: "count", align: "center" },
        { 
            title: "Đơn giá (VND)", 
            key: "price",
            align: "right",
            render: (_, record) => {
                const { price, price_discount } = record;
                return price_discount ? (
                    <span>
                        <span className="line-through text-gray-400 me-2">{price}</span>
                        <span>{price_discount}</span>
                    </span>
                ) : (
                    <span>{price}</span>
                )
            }
        },
        { title: "Thành tiền", key: "total", dataIndex: "total", align: "right" }
    ]
    const preorderData = [
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "45.000", price_discount: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
    ]
    const orderData = []
    
    const historyColumns = [
        { title: "Thời gian", key: "time", dataIndex: "time", align: "center" },
        { title: "Phương thức thanh toán", key: "type", dataIndex: "type", align: "center" },
        { title: "Nội dung", key: "content", dataIndex: "content", align: "center" },
        { title: "Tổng tiền", key: "total", dataIndex: "total", align: "right" }
    ]

    const historyData = [
        { time: "17/04/2025 15:20:24", type: "Chuyển khoản", content: "TT. một phần", total: "200.000" }
    ]

  return (
    <Modal
    open={open}
    onCancel={close}
    footer={null}
    width={800}
    >
        <div className="p-2 w-full">
            <span className="text-xl font-medium">Chi tiết hóa đơn</span>
            <div className="mt-4 w-full flex gap-x-4">
                <div className="w-1/2 flex flex-col gap-y-1">
                    <div className="flex text-base">
                        <span className="w-[140px]">Mã hóa đơn</span>
                        <span>:&nbsp;<span>HD200425122132123</span></span>
                    </div>
                    <div className="flex text-base">
                        <span className="w-[140px]">Ngày phát sinh</span>
                        <span>:&nbsp;<span>17/04/2024 15:30:32</span></span>
                    </div>
                    <div className="flex text-base">
                        <span className="w-[140px]">Họ tên</span>
                        <span className="flex-1 min-w-0 flex">
                            <span>:&nbsp;</span>
                            <Tooltip placement="topLeft" title="Nguyễn Nhật Anh">
                                <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">Nguyễn Nhật Anh</span>
                            </Tooltip>
                        </span>
                    </div>
                    <div className="flex text-base">
                        <span className="w-[140px]">Số điện thoại</span>
                        <span>:&nbsp;<span>0983532451</span></span>
                    </div>
                    <div className="flex text-base">
                        <span className="min-w-[140px]">Email</span>
                        <span className="flex-1 min-w-0 flex">
                            <span>:&nbsp;</span>
                            <Tooltip placement="topLeft" title="nhatanh16122002@gmail.com">
                                <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">nhatanh16122002@gmail.com</span>
                            </Tooltip>
                        </span>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-y-1">
                    <div className="flex text-base">
                        <span className="min-w-[160px]">Nhân viên tạo đơn</span>
                        <span className="flex-1 min-w-0 flex">
                            <span>:&nbsp;</span>
                            <Tooltip placement="topLeft" title="Nguyễn Nhật Anh">
                                <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">Nguyễn Nhật Anh</span>
                            </Tooltip>
                        </span>
                    </div>
                    <div className="flex text-base">
                        <span className="w-[160px]">Trạng thái đơn</span>
                        <span>:&nbsp;<span>TT. một phần</span></span>
                    </div>
                    <div className="flex text-base">
                        <span className="w-[160px]">Thanh toán trước</span>
                        <span>:&nbsp;<span>800.000đ</span></span>
                    </div>
                    <div className="flex text-base">
                        <span className="w-[160px]">Ngày hoàn thành</span>
                        <span>:&nbsp;<span>16/04/2023</span></span>
                    </div>
                </div>
            </div>
            {deskData.length > 0 && (
                <>
                    <p className="text-base font-medium mt-6">Bàn:</p>
                    <Table 
                        className="mt-2 table-modal-bill"
                        columns={deskColumns}
                        dataSource={deskData}
                        size="middle"
                        pagination={false}
                    />
                </>
            )}
            {preorderData.length > 0 && (
                <>
                    <p className="text-base font-medium mt-6">Món ăn đặt trước:</p>
                    <Table 
                        className="mt-2 table-modal-bill"
                        columns={mealColumns}
                        dataSource={preorderData}
                        size="middle"
                        pagination={false}
                    />
                </>
            )}
            {orderData.length > 0 && (
                <>
                    <p className="text-base font-medium mt-6">Món ăn:</p>
                    <Table 
                        className="mt-2 table-modal-bill"
                        columns={mealColumns}
                        dataSource={orderData}
                        size="middle"
                        pagination={false}
                    />
                </>
            )}
            <div className="flex mt-2 px-2">
                <div className="flex-1">
                    <span>(</span>
                    <span>GIAM20</span>
                    <span>)</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                        <span className="flex-1 text-right">Tổng tiền:</span>
                        <span className="w-[160px] text-right">540.000</span>
                    </div>
                    <div className="flex">
                        <span className="flex-1 text-right">Mã giảm giá:</span>
                        <span className="w-[160px] text-right">-20.000</span>
                    </div>
                    <div className="flex">
                        <span className="flex-1 text-right">Tổng tiền thực tế:</span>
                        <span className="w-[160px] text-right">520.000</span>
                    </div>
                    <Divider className="my-2!"/>
                    <div className="flex">
                        <span className="flex-1 text-right">Số tiền đã thanh toán:</span>
                        <span className="w-[160px] text-right">200.000</span>
                    </div>
                    <div className="flex">
                        <span className="flex-1 text-right">Còn lại:</span>
                        <span className="w-[160px] text-right text-red-500">340.000</span>
                    </div>
                </div>
            </div>
            <p className="text-base font-medium mt-2">Lịch sử thanh toán</p>
            <Table 
                className="mt-2 table-modal-bill"
                columns={historyColumns}
                dataSource={historyData}
                size="middle"
                pagination={false}
            />
        </div>
    </Modal>
  )
}
