import React from "react";
import { Link } from "react-router-dom";
import { Divider, Table, Checkbox, InputNumber } from "antd";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { InstructIcon, ClockSolidIcon } from "../../shared/utils/icons/Icons";
import "../../shared/styles/table_antd_custom.css";

export const TableBookedDetailPage = () => {

    const deskColumns = [
        { title: "#", key: "index", width: 50, render: (_text, _record, index) => (index + 1), align: "center"},
        { title: "Bàn", key: "desk", dataIndex: "desk" },
        { title: "Thời gian", key: "time", dataIndex: "time", align: "center" },
        { title: "Thời lượng (Phút)", key: "duration", dataIndex: "duration", align: "center" },
        { title: "Thành tiền (VND)", key: "total", dataIndex: "total", align: "right"},
    ]
    const deskData = [
        { key: "1", desk: "Số 8", time: "24/04/2025 15:30:00", duration: "60", total: "200.000" }
    ]

    const mealColumns = [
        { title: "#", key: "index", width: 50, render: (_text, _record, index) => (index + 1), align: "center" },
        { title: "Tên món ăn", key: "name", dataIndex: "name" },
        { title: "Số lượng", key: "count", dataIndex: "count", align: "center", render: (_text, record) => (<InputNumber  defaultValue={3} onChange={countChange} onKeyDown={(e) => e.preventDefault()} onPaste={(e) => e.preventDefault()}/>) },
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

    const paymentConfirm = () => {}
    const countChange = () => {}
  return (
    <>
        <div className="w-full h-full flex flex-col p-6 bg-transparent">
            <div>
                <Link to="/user/table-booked" className="text-sm">Bàn đã đặt</Link>
                <span>&nbsp;/&nbsp;</span>
                <span className="text-gray-500 text-sm select-none">
                    <span>HĐ12312421</span>
                    <span>&nbsp;(Số 8)</span>
                </span>
            </div>
            <div className="p-4 mt-2 bg-white flex-1 flex flex-col">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <InstructIcon className="w-4 h-4" />
                        <span className="text-xl font-medium">Chi tiết đặt bàn</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ClockSolidIcon className="w-4 h-4" />
                        <span>14 phút 24 giây</span>
                    </div>
                </div>
                <Divider className="mt-2! mb-0!" />
                <Scrollbars>
                    <div className="flex-1 mt-4! pe-4">
                        <div className="flex gap-x-10">
                            {/* Thông tin cá nhân */}
                            <div className="flex flex-col text-base gap-y-1">
                                <span className="font-medium mb-2">Thông tin cá nhân</span>
                                <div className="flex">
                                    <span className="w-[140px]">Họ và tên</span>
                                    <span>
                                        <span>:&nbsp;</span>
                                        <span>Nguyễn Nhật Anh</span>
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="w-[140px]">Số điện thoại</span>
                                    <span>
                                        <span>:&nbsp;</span>
                                        <span>0983532451</span>
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="w-[140px]">Email</span>
                                    <span>
                                        <span>:&nbsp;</span>
                                        <span>nhatanh16122002@gmail.com</span>
                                    </span>
                                </div>
                            </div>
                            {/* Thông tin đơn đặt bàn */}
                            <div className="flex flex-col text-base gap-y-1">
                                <span className="font-medium mb-2">Thông tin đơn đặt bàn</span>
                                <div className="flex">
                                    <span className="w-[140px]">Mã hóa đơn</span>
                                    <span>
                                        <span>:&nbsp;</span>
                                        <span>HD12312491234214</span>
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="w-[140px]">Thời gian</span>
                                    <span>
                                        <span>:&nbsp;</span>
                                        <span>17/04/2025 12:12:02</span>
                                    </span>
                                </div>
                                <div className="flex">
                                    <span className="w-[140px]">Trạng thái</span>
                                    <span>
                                        <span>:&nbsp;</span>
                                        <span className="text-red-500">Chưa thanh toán</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Nội dung đơn đặt bàn */}
                        <div className="flex flex-col mt-4">
                            <p className="text-base font-medium mb-2">Nội dung đơn đặt bàn</p>
                            <div className="mt-2">
                                <span className="text-base">Bàn đặt trước:</span>
                                <Table 
                                    className="mt-2 table-modal-bill"
                                    columns={deskColumns}
                                    dataSource={deskData}
                                    size="middle"
                                    pagination={false}
                                />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <span className="text-base">Món ăn đặt trước:</span>
                                    <span className="text-blue-500 text-base underline cursor-pointer hover:text-blue-400 transition">Thêm món ăn</span>
                                </div>
                                {preorderData.length > 0 && (
                                    <Table
                                        className="mt-2 table-modal-bill"
                                        columns={mealColumns}
                                        dataSource={preorderData}
                                        size="middle"
                                        pagination={false}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex mt-2 px-2">
                            <div className="flex-1 flex gap-2">
                                <span className="text-base text-gray-400 underline cursor-pointer hover:text-gray-300 transition">Thêm mã giảm giá</span>
                                <div>
                                    <span>(</span>
                                    <span>GIAM20</span>
                                    <span>)</span>
                                </div>
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
                        <div className="my-10 text-base text-right">
                            <span>Thanh toán một phần</span>
                            <span>&nbsp;(</span><span>30%</span><span>):&nbsp;</span>
                            <span className="text-red-500">220.000đ</span>
                            <Checkbox className="ms-2!" onChange={paymentConfirm}></Checkbox>
                        </div>
                        <div className="flex justify-between mb-8">
                            <button className="text-base font-medium py-1 px-4 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-400 transition">Hủy đặt bàn</button>
                            <button className="text-base font-medium py-1 px-4 bg-amber-500 text-white rounded-lg cursor-pointer hover:bg-amber-400 transition">Thanh toán</button>
                        </div>
                    </div>
                </Scrollbars>
            </div>
        </div>
    </>
  )
}
