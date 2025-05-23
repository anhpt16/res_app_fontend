import React from "react"

export const CardVoucher = ({openDetail}) => {
  return (
    <div className="border-1 border-gray-200 rounded flex gap-2 p-2">
        <div className="w-[90px] h-[80px] overflow-hidden rounded object-cover">
            <img src="/meal_detail_default.webp" alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-between">
            <span className="text-base">Giảm giá 20%</span>
            <div className="flex justify-between items-center">
                <span className="text-sm text-green-500">Hoạt động</span>
                <button className="py-1 px-2 bg-amber-500 hover:bg-amber-600 transition text-white text-sm cursor-pointer rounded" onClick={openDetail}>Xem</button>
            </div>
        </div>
    </div>
  )
}
