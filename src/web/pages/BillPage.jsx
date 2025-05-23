import { useState } from "react";
import { Select, Divider, Table, Tooltip } from "antd";
import { Scrollbars } from "react-custom-scrollbars-2";
import { PaginationTable } from "../../shared/components/pagination/PaginationTable";
import { DetailBillModal } from "../components";
import "../../shared/styles/table_antd_custom.css";

export const BillPage = () => {
  const [openDetailBillModal, setOpenDetailBillModal] = useState(false);

  const columns = [
    { title: "#", key: "index", width: 50, render: (_text, _record, index) => (index + 1)},
    { 
      title: "Mã hóa đơn", 
      key: "code", 
      width: 120, 
      dataIndex: "code",
      ellipsis: {
        showTitle: false,
      },
      render: code => (
        <Tooltip placement="topLeft" title={code}>
          {code}
        </Tooltip>
      ),
    },
    { title: "Ngày phát sinh", key: "createdAt", dataIndex: "createdAt" },
    { title: "Họ và tên", key: "name", dataIndex: "name" },
    { title: "Trả trước", key: "prepay", dataIndex: "prepay" },
    { title: "Trạng thái", key: "status", dataIndex: "status" },
    { title: "Tổng tiền", key: "total", dataIndex: "total" },
    { 
      title: "Chi tiết", 
      key: "detail", 
      render: (_text, _record) => (<span className="text-blue-500 underline cursor-pointer" onClick={() => setOpenDetailBillModal(true)}>Xem chi tiết</span>) 
    }
  ]

  const data = [
    { key: "1", code: "HD00113423423423423", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" },
    { key: "1", code: "HD0011", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" },
    { key: "1", code: "HD0011", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" },
    { key: "1", code: "HD0011", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" },
    { key: "1", code: "HD0011", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" },
    { key: "1", code: "HD0011", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" },
    { key: "1", code: "HD0011", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" },
    { key: "1", code: "HD0011", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" },
    { key: "1", code: "HD0011", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" },
    { key: "1", code: "HD0011", createdAt: "12/04/2024", name: "Nguyễn Nhật Anh", prepay: "800.000đ", status: "TT. một phần", total: "2.800.000đ" }
  ]

  const handleSelectChange = () => {}

  return (
    <>
      <div className="w-full h-full p-6 bg-transparent flex flex-col">
        <div className="bg-white w-full h-full py-4 px-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <p className="text-xl font-medium">Hóa đơn</p>
              <Select 
                className="w-[160px]"
                defaultValue=""
                onChange={handleSelectChange}
                options={[
                  { value:  "", label: "Tất cả"},
                  { value: "1", label: "Hoàn thành" },
                  { value: "2", label: "TT.một phần" },
                  { value: "3", label: "Đã hủy" },
                  { value: "4", label: "Hoàn tiền" },
                ]}
              />
            </div>
            <Divider className="mt-2! mb-0!" />
            <Table
              className="mt-4 table-custom-default"
              scroll={{ y: 500 }}
              columns={columns}
              dataSource={data}
              size="middle"
              pagination={false}
            />
          </div>

          {/* Phân trang luôn nằm dưới */}
          <div className="mt-4">
            <PaginationTable currentPage={1} totalPages={5}/>
          </div>
        </div>
      </div>
      <DetailBillModal open={openDetailBillModal} close={() => setOpenDetailBillModal(false)}/>
    </>
  )
}
