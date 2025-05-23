import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { WebLayout } from "../layouts";
import { AdminLayout } from "../../admin/layouts";
import { ProfileLayout } from "../../web/layouts";

import { 
  HomePage ,
  AboutPage, 
  CollectionPage, 
  ContactPage, 
  MenuPage, 
  NewPage, 
  NewDetailPage, 
  ReservationInfoPage,
  ProfilePage,
  VoucherPage,
  BillPage,
  BookTablePage,
  TableBookedPage,
  TableBookedDetailPage,
  TableCanceledPage,
  TableCanceledDetailPage,
  OrderFoodPage
} from "../../web/pages";

export const AppRoute = () => {
  const location = useLocation();
  const path = location.pathname;

  const getLayout = () => {
    if (path.startsWith("/user")) return ProfileLayout;
    if (path.startsWith("/admin")) return AdminLayout;
    return WebLayout;
  }

  const Layout = getLayout();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* Web Route */}
        <Route path="/new">
          <Route index element={<NewPage />}></Route>
          <Route path=":slug" element={<NewDetailPage />}></Route>
        </Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/collection" element={<CollectionPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/reservation-info" element={<ReservationInfoPage/>}></Route>
        {/* Web Route Login */}
        <Route path="/user">
          <Route path="profile" element={<ProfilePage/>}></Route>
          <Route path="voucher" element={<VoucherPage />}></Route>
          <Route path="bill" element={<BillPage />}></Route>
          <Route path="table-booking" element={<BookTablePage />}></Route>
          <Route path="table-booked">
            <Route index element={<TableBookedPage />}></Route>
            <Route path=":id" element={<TableBookedDetailPage />}></Route>
          </Route>
          <Route path="table-canceled">
            <Route index element={<TableCanceledPage />}></Route>
            <Route path=":id" element={<TableCanceledDetailPage />}></Route>
          </Route>
          <Route path="order" element={<OrderFoodPage/>}></Route>
        </Route>
        {/* Admin Page */}

        <Route path="*" element={<p>404 - Page Not Found</p>} />
      </Routes>
    </Layout>
  )
}
