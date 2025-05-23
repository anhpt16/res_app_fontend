import { useState } from "react";
import { Select, Divider } from "antd";
import { Scrollbars } from "react-custom-scrollbars-2";
import { OrderCardMeal } from "../components";
import { CartDrawer } from "../components";
import { PaginationTable } from "../../shared/components/pagination/PaginationTable";
import { ClockSolidIcon, OrderBackIcon, CartIcon } from "../../shared/utils/icons/Icons";
import { MealEnum } from "../../shared/utils/constants/MealEnum";

export const OrderFoodPage = () => {
  
  
  const handleDeskChange = () => {}

  const [ openCart, setOpenCart ] = useState(false);

  return (
    <>
      <div className="w-full h-full p-6 bg-transparent">
        <div className="flex h-full flex-col gap-4">
          <div className="p-4 bg-white flex justify-between">
            <div className="flex items-center gap-4">
              <span>Chọn bàn:</span>
              <Select 
                className="w-[250px]"
                defaultValue=""
                onChange={handleDeskChange}
                options={[
                  { value:  "", label: "Số 18 - 17/04/2025 - 19:30:00"},
                  { value: "false", label: "Chưa sử dụng" },
                  { value: "true", label: "Đã sử dụng" },
                ]}
              />
              <div className="flex items-center gap-2">
                <ClockSolidIcon className="w-4 h-4" />
                <span>14 phút 24 giây</span>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition">
                <OrderBackIcon className="w-4 h-4" />
                <span>Tiếp tục thanh toán</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-500 transition" onClick={() => setOpenCart(true)}>
                <CartIcon className="w-4 h-4" />
                <span>Giỏ hàng</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-4">
            <div className="w-1/6 flex flex-col bg-white p-4 rounded-lg">
              <p className="text-base font-medium px-4">Danh mục</p>
              <Divider className="my-2!" />
              <Scrollbars>
                <ul className="flex flex-col text-base gap-y-1 py-1 pe-4 overflow-y-auto">
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Giảm giá</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Bán chạy</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Đặc biệt</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Mới cập nhật</li>
                  <Divider className="my-2!" />
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Khai vị</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Rau củ</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Món chính</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Hải sản</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Súp</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Tráng miệng</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Đồ uống</li>
                  <Divider className="my-2!" />
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Thực đơn theo bữa</li>
                  <Divider className="my-2!" />
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Sắp ra mắt</li>
                  <li className="cursor-pointer border-solid border-s-3 border-white hover:border-amber-500 transition py-1 px-4">Sắp kết thúc</li>
                </ul>
              </Scrollbars>
            </div>
            <div className="w-5/6 flex flex-col bg-white p-4 rounded-lg">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span>Thời gian:</span>
                  <Select 
                    className="w-[140px]"
                    defaultValue=""
                    onChange={handleDeskChange}
                    options={[
                      { value:  "", label: "Mặc định"},
                      { value:  "", label: "Mới nhất"},
                      { value: "false", label: "Cũ nhất" },
                    ]}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span>Giá:</span>
                  <Select 
                    className="w-[140px]"
                    defaultValue=""
                    onChange={handleDeskChange}
                    options={[
                      { value:  "", label: "Mặc định"},
                      { value:  "", label: "Giá tăng dần"},
                      { value: "false", label: "Giá giảm dần" },
                    ]}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span>Trạng thái:</span>
                  <Select 
                    className="w-[140px]"
                    defaultValue=""
                    onChange={handleDeskChange}
                    options={[
                      { value:  "", label: "Tất cả"},
                      { value:  "", label: "Còn hàng"},
                      { value: "false", label: "Tạm hết" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex-1 mt-10">
                  <div className="grid grid-cols-2 gap-10">
                    <OrderCardMeal type={MealEnum.DISCOUNT}/>
                    <OrderCardMeal type={MealEnum.DISCOUNT}/>
                    <OrderCardMeal type={MealEnum.DISCOUNT}/>
                    <OrderCardMeal type={MealEnum.DISCOUNT}/>
                    <OrderCardMeal type={MealEnum.DISCOUNT}/>
                    <OrderCardMeal type={MealEnum.DISCOUNT}/>
                  </div>
              </div>
              <PaginationTable currentPage={1} totalPages={5} />
            </div>
          </div>
        </div>
      </div>
      <CartDrawer open={openCart} close={() => setOpenCart(false)}/>
    </>
  )
}
