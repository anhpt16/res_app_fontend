import React from "react";
import { Link } from "react-router-dom";

import logo from "/logo_res.svg";


export const Footer = () => {
  return (
    <footer className="w-full bg-stone-900 flex justify-center">
      <div className="w-[1300px] grid lg:grid-cols-2 my-20">
        <div className="space-y-10 max-lg:mb-10 max-lg:flex max-lg:flex-col max-lg:items-center max-md:px-10">
          <Link to="/" className="flex items-center gap-4 w-fit">
            <img src={logo} alt="Logo Restaurant" />
            <span className="text-xl font-semibold text-white">Bếp của tui</span>
          </Link>
          <div className="flex items-center gap-4">
            <img className="w-6 h-6" src="/icons/i_address.svg" alt="Icon Address" />
            <span className="text-base font-medium text-white">16 Hòa Phong, Việt Lâm, TP.Việt Trì, Tỉnh Phú Thọ</span>
          </div>
          <div className="flex items-center gap-4">
            <img className="w-6 h-6" src="/icons/i_phone.svg" alt="Icon Address" />
            <span className="text-base font-medium text-white">+84 0983 532 451</span>
          </div>
          <div className="flex gap-4">
            <Link>
              <img src="/icons/i_footer_facebook.svg" alt="Icon Facebook" />
            </Link>
            <Link>
              <img src="/icons/i_footer_zalo.svg" alt="Icon Zalo" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col gap-4 max-lg:mb-10">
            <Link className="w-fit" to="/menu">
              <span className="text-base font-medium text-white">Thực đơn</span>
            </Link>
            <Link className="w-fit" to="/reservation">
              <span className="text-base font-medium text-white">Đặt bàn</span>
            </Link>
            <Link className="w-fit" to="/new">
              <span className="text-base font-medium text-white">Tin tức</span>
            </Link>
            <Link className="w-fit" to="/contact">
              <span className="text-base font-medium text-white">Liên hệ</span>
            </Link>
            <Link className="w-fit" to="/collection">
              <span className="text-base font-medium text-white">Bộ sưu tập</span>
            </Link>
            <Link className="w-fit" to="/about">
              <span className="text-base font-medium text-white">Giới thiệu</span>
            </Link>
          </div>
          <span className="text-base font-medium text-white">Copyright © 2025 All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}
