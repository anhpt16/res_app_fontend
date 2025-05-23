import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Menu } from "antd";
import { Scrollbars } from "react-custom-scrollbars-2";
import { InfoIcon, VoucherIcon, BillIcon, TableIcon, MealIcon } from "../../shared/utils/icons";

export const Navigation = () => {
  const location = useLocation();
  
  const navLinkMenu = (isActive) => {
    return `flex items-center gap-5 text-base font-medium ${isActive ? ' text-orange-600!' : ''}`;
  }
  const navLinkSubMenu = (isActive) => {
    return `ps-4 text-base ${isActive ? ' text-orange-600!' : ''}`;
  }
  const renderMenuParent = (path, icon, title) => {
    const active = location.pathname.startsWith(path);
    return (
      <div className={`flex items-center gap-5 text-base font-medium transition-colors duration-200 ${active ? 'text-orange-600' : ''}`}>
        {icon}
        <span className="">{title}</span>
      </div>
  );
}

  const items = [
    {
      key: "table",
      label: renderMenuParent("/user/table", <TableIcon className="w-5 h-5" />, "Đặt bàn"),
      children: [
        {
          key: "table-booking",
          label: (<NavLink className={({isActive}) => navLinkSubMenu(isActive)} to="/user/table-booking">Đặt bàn</NavLink>)
        },
        {
          key: "table-booked",
          label: (<NavLink className={({isActive}) => navLinkSubMenu(isActive)} to="/user/table-booked">Bàn đã đặt</NavLink>)
        },
        {
          key: "table-cancelled",
          label: (<NavLink className={({isActive}) => navLinkSubMenu(isActive)} to="/user/table-canceled">Bàn đã hủy</NavLink>)
        }
      ]
    },
    {
      key: "order",
      label: (
        <NavLink
          to="/user/order"
          className={({ isActive }) => navLinkMenu(isActive)}
        >
          <MealIcon className="w-5 h-5" />
          <span className="">Đặt món</span>
        </NavLink>
      ),
    },
    {
      key: "bill",
      label: (
        <NavLink
          to="/user/bill"
          className={({ isActive }) => navLinkMenu(isActive)}
        >
          <BillIcon className="w-5 h-5" />
          <span className="">Hóa đơn</span>
        </NavLink>
      ),
    },
    {
      key: "voucher",
      label: (
        <NavLink
          to="/user/voucher"
          className={({ isActive }) => navLinkMenu(isActive)}
        >
          <VoucherIcon className="w-5 h-5" />
          <span className="">Mã giảm giá</span>
        </NavLink>
      ),
    },
    {
      key: "profile",
      label: (
        <NavLink
          to="/user/profile"
          className={({ isActive }) => navLinkMenu(isActive)}
        >
          <InfoIcon className="w-5 h-5" />
          <span className="">Thông tin cá nhân</span>
        </NavLink>
      ),
    }
  ]

  return (
    <Menu
    mode="inline"
    items={items}
    selectedKeys={[location.pathname]}
    className="w-[250px]! h-[calc(100vh-112px)]! pt-4! shadow-[0px_4px_4px_rgba(0,0,0,0.25)]!"
    />
  )
}
