import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Divider } from "antd";
import { AuthModal } from "../../web/components";
import { useSelector } from "react-redux";
import { clearUserInfo } from "../../shared/service/AuthService";
import logo from "/logo_res.svg";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Tooltip } from 'antd';
import { useLogout } from "../../shared/hooks/useAuth";

const itemsUser = [
  {
    key: '1',
    label: (
      <Link to="/menu">
        Thông tin cá nhân
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/menu">
        Đặt bàn
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to="/menu">
        Hóa đơn
      </Link>
    ),
  },
  {
    key: 'logout',
    label: 'Đăng xuất',
  },
]

const itemsAdmin = [
  {
    key: '1',
    label: (
      <Link to="/menu">
        Trang quản trị
      </Link>
    ),
  }
]
export const Header = () => {
  const location = useLocation();
  const { id, name, roles } = useSelector((state) => state.auth);
  let items = [];
  if (roles?.length > 0) {
    roles.forEach(role => {
      if (role.name === "user") {
        items = itemsUser;
      } else if (role.name === "admin") {
        items = itemsAdmin;
      }
    });
  }
  const logoutMutation = useLogout();
  const path = location.pathname;
  const isAdminOrUser = path.startsWith("/admin") || path.startsWith("/user");

  const [open, setOpen] = useState(false);

  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      logoutMutation.mutate(null, {
        onSuccess: () => {
          clearUserInfo();
        },
        onError: () => {
          console.log("logout error");
        }
      });
    }
  };
  return (
    <header className={`w-full h-[112px] flex justify-center items-center z-50 ${isAdminOrUser ? "bg-stone-900" : "absolute bg-transparent border-b-1 border-divider-gray"}`}>
        <div className="w-[1300px] flex justify-between items-center max-lg:px-8">
          <img className="hidden max-lg:block cursor-pointer" src="/icons/i_menu_list.svg" alt="Icon List" />
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Logo Restaurant"></img>
            <span className="text-xl font-semibold text-white max-md:hidden">Bếp của tui</span>
          </Link>
          <div className="flex justify-between gap-10 max-lg:hidden">
            <Link to="/menu" className="text-white text-base font-semibold">
              <span>Thực đơn</span>
            </Link>
            <Link to="/new" className="text-white text-base font-semibold">
              <span>Tin tức</span>
            </Link>
            <Link to="/collection" className="text-white text-base font-semibold">
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
          {id && name && roles?.length > 0 ? (
            <Dropdown menu={{
              items,
              onClick: handleMenuClick,
            }}>
              {/* Đừng dùng <a> nếu không cần mở liên kết */}
              <span style={{ cursor: 'pointer' }}>
                <Space>
                  <UserOutlined style={{color: "white"}} />
                  <span className="text-white">{name}</span>
                </Space>
              </span>
            </Dropdown>
          ) : (
            <div className="text-white text-base font-semibold cursor-pointer" onClick={() => setOpen(true)}>
              <span>Đăng nhập</span>
            </div>
          )}
        </div>
        <AuthModal open={open} close={() => setOpen(false)}/>
      </header>
  )
}
