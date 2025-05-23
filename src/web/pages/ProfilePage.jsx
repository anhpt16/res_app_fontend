import { useState } from "react";

import { Divider, Input } from "antd";
import { ClickIcon } from "../../shared/utils/icons/Icons";

export const ProfilePage = () => {



  return (
    <div className="m-6 flex gap-6">
      {/* Thông tin cá nhân */}
      <div className="bg-white w-[550px] h-[450px] px-5 py-4">
        <p className="text-xl font-medium">Thông tin cá nhân</p>
        <Divider className="mt-3! mb-0!"/>
        <div className="mt-8 flex items-center">
          <label className="w-[140px] shrink-0">Họ và tên</label>
          <Input variant="filled"/>
        </div>
        <div className="mt-8 flex items-center">
          <p className="w-[140px] shrink-0">Email</p>
          <Input variant="filled"/>
        </div>
        <div className="mt-8 flex items-center">
          <label className="w-[140px] shrink-0">Số điện thoại</label>
          <Input variant="filled"/>
        </div>
        <div className="mt-8 flex flex-row items-center">
          <label className="w-[140px] shrink-0"></label>
          <button className="bg-amber-500 px-4 py-1 rounded text-white hover:bg-amber-600 transition cursor-pointer">Cập nhật</button>
        </div>
      </div>
      {/* Thông tin tài khoản */}
      <div className="bg-white w-[550px] h-[450px] px-5 py-4">
        <div className="flex justify-between">
          <p className="text-xl font-medium">Tài khoản</p>
          <div className="flex items-center gap-2 hover:text-amber-500 transition cursor-pointer">
            <ClickIcon className="w-6 h-6"/>
            <span className="text-sm font-medium">Đổi mật khẩu</span>
          </div>
        </div>
        <Divider className="mt-3! mb-0!"/>
        <div className="mt-8 flex items-center">
          <label className="w-[140px] shrink-0">Tên tài khoản</label>
          <Input disabled variant="filled"/>
        </div>
        <div className="mt-8 flex items-center">
          <p className="w-[140px] shrink-0">Mật khẩu cũ</p>
          <Input disabled variant="filled"/>
        </div>
        <div className="mt-8 flex items-center">
          <label className="w-[140px] shrink-0">Mật khẩu mới</label>
          <Input disabled variant="filled"/>
        </div>
        <div className="mt-8 flex items-center">
          <label className="w-[140px] shrink-0">Nhập lại</label>
          <Input disabled variant="filled"/>
        </div>
        <div className="mt-8 flex flex-row items-center">
          <label className="w-[140px] shrink-0"></label>
          <button disabled className="bg-gray-200 px-4 py-1 rounded text-white hover:bg-amber-600 transition cursor-not-allowed">Cập nhật</button>
        </div>
      </div>
    </div>
  )
}
