import React from "react";

import { Divider, Table } from "antd";
import { Link } from "react-router-dom";

export const TableBookedPage = () => {

  const deskBookedColumns = [
    { title: "#", key: "index", width: 50, render: (_text, _record, index) => (index + 1), align: "center" },
    { title: "Mã hóa đơn", key: "code", dataIndex: "code" },
    { title: "Số bàn", key: "number", dataIndex: "number", align: "center" },
    { title: "Bắt đầu", key: "time", dataIndex: "time", align: "center" },
    { title: "Trạng thái", key: "status", dataIndex: "status", align: "center" },
    { title: "Còn lại", key: "remain", dataIndex: "remain", align: "center" },
    { title: "Chi tiết", key: "detail", render: (_text, record) => (<Link to="/user/table-booked/123" className="text-blue-500 cursor-pointer">Xem chi tiết</Link>), align: "center" }
  ]
  const deskBookedData = [
    { key: "1", code: "HD200425122132123", number: "18", time: "17/04/2025 18:30:00", status: "Chưa thanh toán", remain: "55:32" },
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Thanh toán một phần"}
  ]

  return (
    <>
      <div className="w-full h-full p-6 bg-transparent">
        <div className="p-4 h-full flex flex-col bg-white">
          <span className="text-xl font-medium">Bàn đã đặt</span>
          <Divider className="my-2!" />
          <div className="flex-1">
              <Table 
              className="mt-4 table-custom-default"
              columns={deskBookedColumns}
              dataSource={deskBookedData}
              size="middle"
              pagination={false}
            />
          </div>
        </div>
      </div>
    </>
  )
}
