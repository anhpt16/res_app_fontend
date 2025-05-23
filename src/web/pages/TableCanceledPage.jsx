import React from "react";

import { Divider, Table } from "antd";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { PaginationTable } from "../../shared/components/pagination/PaginationTable";
import { Link } from "react-router-dom";

export const TableCanceledPage = () => {
  const deskCanceledColumns = [
    { title: "#", key: "index", width: 50, render: (_text, _record, index) => (index + 1), align: "center" },
    { title: "Mã hóa đơn", key: "code", dataIndex: "code" },
    { title: "Số bàn", key: "number", dataIndex: "number", align: "center" },
    { title: "Bắt đầu", key: "time", dataIndex: "time", align: "center" },
    { title: "Trạng thái", key: "status", dataIndex: "status", align: "center" },
    { title: "Nội dung", key: "content", dataIndex: "content", align: "center" },
    { title: "Chi tiết", key: "detail", render: (_text, record) => (<Link to="/user/table-canceled/123" className="text-blue-500 underline cursor-pointer">Xem chi tiết</Link>), align: "center" }
  ]
  const deskCanceledData = [
    { key: "1", code: "HD200425122132123", number: "18", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Hết thời gian thanh toán" },
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
    { key: "1", code: "HD200425122132123", number: "20", time: "17/04/2025 18:30:00", status: "Đã hủy", content: "Người dùng hủy"},
  ]

  return (
    <>
      <div className="w-full h-full p-6 bg-transparent">
        <div className="p-4 bg-white flex flex-col h-full">
          <p className="text-xl font-medium">Bàn đã hủy</p>
          <Divider className="my-2!" />
          <div className="flex-1 overflow-y-auto">
            <Scrollbars>
              <Table 
                className="mt-4 pe-4 h-full table-custom-default"
                columns={deskCanceledColumns}
                dataSource={deskCanceledData}
                size="middle"
                pagination={false}
              />
            </Scrollbars>
          </div>
          <PaginationTable currentPage={1} totalPages={5}/>
        </div>
      </div>
    </>
  )
}
