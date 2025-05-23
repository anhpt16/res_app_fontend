import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Divider } from "antd";
import { AuthModal } from "../../web/components";

import logo from "/logo_res.svg";



export const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const isAdminOrUser = path.startsWith("/admin") || path.startsWith("/user");

  const [open, setOpen] = useState(false);

  return (
    <header className={`w-full h-[112px] flex justify-center items-center z-50 ${isAdminOrUser ? "bg-stone-900" : "absolute bg-transparent border-b-1 border-divider-gray"}`}>
        <div className="w-[1300px] flex justify-between items-center max-lg:px-8">
          <img className="hidden max-lg:block cursor-pointer" src="/icons/i_menu_list.svg" alt="Icon List" />
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Logo Restaurant"></img>
            <span className="text-xl font-semibold text-white max-md:hidden">Bếp của tui</span>
          </Link>
          <div className="flex justify-between gap-10 max-lg:hidden">
            <Link to="/" className="text-white text-base font-semibold">
              <span>Thực đơn</span>
            </Link>
            <Link to="/" className="text-white text-base font-semibold">
              <span>Tin tức</span>
            </Link>
            <Link to="/" className="text-white text-base font-semibold">
              <span>Bộ sưu tập</span>
            </Link>
            <Link to="/" className="text-white text-base font-semibold">
              <span>Liên hệ</span>
            </Link>
            <Link to="/" className="text-white text-base font-semibold">
              <span>Giới thiệu</span>
            </Link>
            <Divider type="vertical" style={{borderColor: "white", borderWidth : "2", height : "24px"}} />
            <Link to="/" className="text-white text-base font-semibold">
              <span>Đặt bàn</span>
            </Link>
          </div>
          <div className="text-white text-base font-semibold cursor-pointer" onClick={() => setOpen(true)}>
            <span>Đăng nhập</span>
          </div>
        </div>
        <AuthModal open={open} close={() => setOpen(false)}/>
      </header>
  )
}
