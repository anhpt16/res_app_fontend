import { useState } from "react";
import { CardVoucher, VoucherModal } from "../components";
import { Select, Divider } from "antd";

export const VoucherPage = () => {
  const [openVoucherModal, setOpenVoucherModal] = useState(false);

  const handleSelectChange = () => {}

  return (
    <>
      <div className="w-full h-full bg-transparent p-6">
        <div className="w-full h-full bg-white py-4 px-5">
          <div className="flex justify-between">
            <p className="text-xl font-medium">Mã giảm giá</p>
            <Select 
              className="w-[150px]"
              defaultValue=""
              onChange={handleSelectChange}
              options={[
                { value:  "", label: "Tất cả"},
                { value: "false", label: "Chưa sử dụng" },
                { value: "true", label: "Đã sử dụng" },
              ]}
            />
          </div>
          <Divider className="mt-2! mb-0!" />
          <div className="grid grid-cols-5 gap-4 max-mac:grid-cols-4 mt-6">
            <CardVoucher openDetail={() => setOpenVoucherModal(true)} />
            <CardVoucher openDetail={() => setOpenVoucherModal(true)} />
            <CardVoucher openDetail={() => setOpenVoucherModal(true)} />
            <CardVoucher openDetail={() => setOpenVoucherModal(true)} />
            <CardVoucher openDetail={() => setOpenVoucherModal(true)} />
            <CardVoucher openDetail={() => setOpenVoucherModal(true)} />
          </div>
        </div>
      </div>
      <VoucherModal open={openVoucherModal} close={() => setOpenVoucherModal(false)} />
    </>
  )
}
