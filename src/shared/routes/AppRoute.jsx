import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { WebLayout } from "../layouts";
import { AdminLayout } from "../../admin/layouts";
import { ProfileLayout } from "../../web/layouts";

// import { 
//   HomePage ,
//   AboutPage, 
//   CollectionPage, 
//   ContactPage, 
//   MenuPage, 
//   NewPage, 
//   NewDetailPage, 
//   ReservationInfoPage,
//   ProfilePage,
//   VoucherPage,
//   BillPage,
//   BookTablePage,
//   TableBookedPage,
//   TableBookedDetailPage,
//   TableCanceledPage,
//   TableCanceledDetailPage,
//   OrderFoodPage
// } from "../../web/pages";

const preloadPages = () => {
  // Preload các pages quan trọng
  import("../../web/pages/HomePage");
  import("../../web/pages/NewPage");
  import("../../web/pages/CollectionPage");
  import("../../web/pages/MenuPage");
  import("../../web/pages/ContactPage");
  import("../../web/pages/AboutPage");
};

// Lazy import pages
const HomePage = lazy(() => import("../../web/pages/HomePage").then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("../../web/pages/AboutPage").then(m => ({ default: m.AboutPage })));
const CollectionPage = lazy(() => import("../../web/pages/CollectionPage").then(m => ({ default: m.CollectionPage })));
const ContactPage = lazy(() => import("../../web/pages/ContactPage").then(m => ({ default: m.ContactPage })));
const MenuPage = lazy(() => import("../../web/pages/MenuPage").then(m => ({ default: m.MenuPage })));
const NewPage = lazy(() => import("../../web/pages/NewPage").then(m => ({ default: m.NewPage })));
const NewDetailPage = lazy(() => import("../../web/pages/NewDetailPage").then(m => ({ default: m.NewDetailPage })));
const ReservationInfoPage = lazy(() => import("../../web/pages/ReservationInfoPage").then(m => ({ default: m.ReservationInfoPage })));
const ProfilePage = lazy(() => import("../../web/pages/ProfilePage").then(m => ({ default: m.ProfilePage })));
const VoucherPage = lazy(() => import("../../web/pages/VoucherPage").then(m => ({ default: m.VoucherPage })));
const BillPage = lazy(() => import("../../web/pages/BillPage").then(m => ({ default: m.BillPage })));
const BookTablePage = lazy(() => import("../../web/pages/BookTablePage").then(m => ({ default: m.BookTablePage })));
const TableBookedPage = lazy(() => import("../../web/pages/TableBookedPage").then(m => ({ default: m.TableBookedPage })));
const TableBookedDetailPage = lazy(() => import("../../web/pages/TableBookedDetailPage").then(m => ({ default: m.TableBookedDetailPage })));
const TableCanceledPage = lazy(() => import("../../web/pages/TableCanceledPage").then(m => ({ default: m.TableCanceledPage })));
const TableCanceledDetailPage = lazy(() => import("../../web/pages/TableCanceledDetailPage").then(m => ({ default: m.TableCanceledDetailPage })));
const OrderFoodPage = lazy(() => import("../../web/pages/OrderFoodPage").then(m => ({ default: m.OrderFoodPage })));

export const AppRoute = () => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    preloadPages();
  }, []);

  const getLayout = () => {
    if (path.startsWith("/user")) return ProfileLayout;
    if (path.startsWith("/admin")) return AdminLayout;
    return WebLayout;
  };

  const Layout = getLayout();

  return (
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new">
            <Route index element={<NewPage />} />
            <Route path=":slug" element={<NewDetailPage />} />
          </Route>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reservation-info" element={<ReservationInfoPage />} />
          <Route path="/user">
            <Route path="profile" element={<ProfilePage />} />
            <Route path="voucher" element={<VoucherPage />} />
            <Route path="bill" element={<BillPage />} />
            <Route path="table-booking" element={<BookTablePage />} />
            <Route path="table-booked">
              <Route index element={<TableBookedPage />} />
              <Route path=":id" element={<TableBookedDetailPage />} />
            </Route>
            <Route path="table-canceled">
              <Route index element={<TableCanceledPage />} />
              <Route path=":id" element={<TableCanceledDetailPage />} />
            </Route>
            <Route path="order" element={<OrderFoodPage />} />
          </Route>
          <Route path="*" element={<p>404 - Page Not Found</p>} />
        </Routes>
    </Layout>
  );
};