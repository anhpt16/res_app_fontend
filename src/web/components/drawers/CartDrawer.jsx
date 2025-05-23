import { useRef, useEffect, useState } from "react";
import { Drawer, Space, Divider, Table, InputNumber } from "antd";

export const CartDrawer = ({open, close}) => {

    const cartDrawerRef = useRef(null);
    const [ gapCartContentFooter, setGapCartContentFooter ] = useState(0);
    useEffect(() => {
        if (!open || !cartDrawerRef.current) return;

        // Đợi một chút để đảm bảo Drawer đã render hoàn toàn
        const timer = setTimeout(() => {
            const footerHeight = cartDrawerRef.current.offsetHeight;
            setGapCartContentFooter(footerHeight + 20);
        }, 100); // Delay nhỏ để tránh đo quá sớm

        return () => clearTimeout(timer);
    }, [open]);


    const deskColumns = [
        { title: "#", key: "index", width: 50, render: (_text, _record, index) => (index + 1), align: "center"},
        { title: "Bàn", key: "desk", dataIndex: "desk" },
        { title: "Thời lượng (Phút)", key: "duration", dataIndex: "duration", align: "center" },
        { title: "Thành tiền (VND)", key: "total", dataIndex: "total", align: "right"},
    ]
    const deskData = [
        { key: "1", desk: "Số 8", duration: "60", total: "200.000" }
    ]

    const mealColumns = [
        { title: "#", key: "index", width: 50, render: (_text, _record, index) => (index + 1), align: "center" },
        { title: "Tên món ăn", key: "name", dataIndex: "name" },
        { title: "Số lượng", key: "count", dataIndex: "count", align: "center", width: 50, render: (_text, record) => (<InputNumber className="w-[60px]!"  defaultValue={3} onChange={countChange} onKeyDown={(e) => e.preventDefault()} onPaste={(e) => e.preventDefault()}/>) },
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
        { key: "1", name: "Bò lúc lắc khoai tây chiên", count: "2", price: "3.000.000", price_discount: "1.230.000", total: "8.060.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" },
        { key: "1", name: "Gỏi cuốn", count: "2", price: "30.000", total: "60.000" }
    ]

    const countChange = () => {}

  return (
    <Drawer
        title="Số lượng"
        placement="right"
        closable={false}
        onClose={close}
        open={open}
        width={600}
        extra={
          <Space>
            <button className="text-gray-600 hover:text-gray-500 transition cursor-pointer" onClick={close}>Đóng</button>
          </Space>
        }
    >
        <div className="w-full h-full">
            <div style={{ paddingBottom: `${gapCartContentFooter}px` }} className="flex flex-col">
                <div>
                    <div className="flex text-base">
                        <span className="w-[140px]">Mã hóa đơn</span>
                        <span>
                            <span>:&nbsp;</span>
                            <span>HD170425121202</span>
                        </span>
                    </div>
                    <div className="flex text-base">
                        <span className="w-[140px]">Bàn số</span>
                        <span>
                            <span>:&nbsp;</span>
                            <span>18</span>
                        </span>
                    </div>
                    <div className="flex text-base">
                        <span className="w-[140px]">Ngày sử dụng</span>
                        <span>
                            <span>:&nbsp;</span>
                            <span>17/04/2025 12:30:00</span>
                        </span>
                    </div>
                </div>
                <Divider className="my-4!" />
                <div className="">
                    <p className="text-base font-medium">Bàn:</p>
                    <Table 
                        className="mt-2 table-modal-bill"
                        columns={deskColumns}
                        dataSource={deskData}
                        size="middle"
                        pagination={false}
                    />
                </div>
                <div className="mt-4 flex-1">
                    <p className="text-base font-medium">Món ăn:</p>
                    <Table
                        className="mt-2 table-modal-bill"
                        columns={mealColumns}
                        dataSource={preorderData}
                        size="middle"
                        pagination={false}
                    />
                </div>
            </div>
            <div ref={cartDrawerRef} className="fixed w-[552px] bg-white bottom-0">
                <div className="flex justify-between items-center px-2 py-4">
                    <span className="text-base font-medium text-amber-600 hover:text-amber-500 transition cursor-pointer">Thanh toán</span>
                    <span className="flex gap-2 text-base">
                        <span>Tổng tiền:</span>
                        <span className="text-red-500">1.200.000</span>
                    </span>
                </div>
            </div>
        </div>
    </Drawer>
  )
}
