import { useState } from "react";

import { Divider, Select, Tooltip } from "antd";
import { Scrollbars } from 'react-custom-scrollbars-2';

import { DetailDeskModal } from "../components";
import { InstructIcon, ClockSolidIcon, ClickIcon } from "../../shared/utils/icons/Icons";

export const BookTablePage = () => {
  const [ openDetailDeskModal, setOpenDetailDeskModal ] = useState(false);
  const handleSelectChange = () => {}

  return (
    <>
      <div className="w-full h-full flex flex-col p-6 bg-transparent">
        <div className="p-4 bg-white">
          <div className="flex items-center gap-2">
            <InstructIcon className="w-4 h-4"/>
            <span className="text-xl font-medium">Đặt bàn</span>
          </div>
          <Divider className="mt-2! mb-4!" />
          <div className="flex">
            <div className="flex items-center gap-6">
              <div className="flex max-mac:flex-col max-mac:items-start items-center gap-2">
                <span>Số lượng người:</span>
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
              <div className="flex max-mac:flex-col max-mac:items-start items-center gap-2">
                <span>Ngày đặt:</span>
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
              <div className="flex max-mac:flex-col max-mac:items-start items-center gap-2">
                <span>Giờ đặt:</span>
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
              <div className="flex max-mac:flex-col max-mac:items-start items-center gap-2">
                <span>Thời gian sử dụng:</span>
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
            </div>
            <div className="flex-1 flex max-mac:flex-col max-mac:items-start items-center gap-2 ms-6">
              <div className="h-[24px]"></div>
              <button className="px-4 py-1 rounded-lg bg-green-600 hover:bg-green-500 transition text-white font-medium cursor-pointer">Chọn bàn nhanh</button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-4 max-mac:gap-2 mt-6 max-mac:mt-4 bg-transparent">
            <div className="w-2/6 flex flex-col gap-4 max-mac:gap-2">
              <div className="p-4 bg-white">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <span>Bàn đang chọn:</span>
                    <span>8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockSolidIcon className="w-4 h-4" />
                    <span>14 phút 23 giây</span>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <button className="px-4 py-1 text-white bg-blue-600 hover:bg-blue-500 transition rounded-lg cursor-pointer" onClick={() => setOpenDetailDeskModal(true)}>Xem bàn</button>
                  <button className="px-4 py-1 text-white bg-green-600 hover:bg-green-500 transition rounded-lg cursor-pointer">Đặt bàn</button>
                </div>
              </div>
              <div className="flex-1 flex flex-col p-4 bg-white">
                <div className="flex justify-between select-none">
                  <span className="text-base font-medium">Danh sách bàn</span>
                  <Tooltip 
                    placement="topLeft" 
                    title={
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 bg-green-500"></div>
                          <span>:Bàn đang chọn</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 bg-gray-300"></div>
                          <span>:Bàn có thể chọn</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 bg-orange-500"></div>
                          <span>:Bàn đang được xem</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 bg-red-500"></div>
                          <span>:Bàn đã được chọn</span>
                        </div>
                      </div>
                    }
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <InstructIcon className="w-4 h-4" />
                      <span>Hướng dẫn</span>
                    </div>
                  </Tooltip>
                </div>
                <Divider className="my-2!" />
                <div className="flex-1">
                  <Scrollbars className="h-full">
                    <div className="grid grid-cols-5 gap-2 select-none pe-3">
                      <div className="text-center rounded text-white bg-green-600">4</div>
                      {[...Array(70)].map((_, i) => (<div className="text-center rounded text-white bg-gray-300 cursor-pointer hover:bg-gray-500 transititon duration-300">{i}</div>))}
                      <div className="text-center rounded text-white bg-orange-400">4</div>
                      <div className="text-center rounded text-white bg-red-400">4</div>
                      <div className="text-center rounded text-white bg-red-400">4</div>
                    </div>
                  </Scrollbars>
                </div>
              </div>
            </div>
            <div className="w-4/6">
              <div className="p-4 bg-white">

              </div>
            </div>
        </div>
      </div>
      <DetailDeskModal open={openDetailDeskModal} close={() => setOpenDetailDeskModal(false)}/>
    </>
  )
}
