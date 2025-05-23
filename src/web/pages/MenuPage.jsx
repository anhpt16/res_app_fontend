import { useState } from "react";
import { Link } from "react-router-dom";

import { CardMeal } from "../components";
import { MealEnum } from "../../shared/utils/constants/MealEnum";
import { NewIcon } from "../../shared/utils/icons/Icons";
import { DetailMealModal } from "../components";

import { Divider, Carousel } from "antd";

export const MenuPage = () => {

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const mealItems = Array.from({ length: 20 }, (_, i) => <CardMeal key={i}/>);
  const itemsPerSlide = 6;
  const slides = chunkArray(mealItems, itemsPerSlide);

  const mealDiscountItems = Array.from({ length: 20 }, (_, i) => <CardMeal key={i} type={MealEnum.DISCOUNT} onClick={() => setOpen(true)} />);
  const slidesDiscount = chunkArray(mealDiscountItems, itemsPerSlide);
  const mealBestSellerItems = Array.from({ length: 20 }, (_, i) => <CardMeal key={i} type={MealEnum.BEST_SELLER} onClick={() => setOpen(true)} />);
  const slidesBestSeller = chunkArray(mealBestSellerItems, itemsPerSlide);

  const itemsPerSlideMenu = 6;
  const mealMenuItems = Array.from({ length: 20 }, (_, i) => <CardMeal key={i} type={MealEnum.DEFAULT} onClick={() => setOpen(true)} />);
  const slidesMenu = chunkArray(mealMenuItems, itemsPerSlideMenu);

  const itemsPerSlideUpcoming = 4;
  const mealUpcomingItems = Array.from({ length: 20 }, (_, i) => <CardMeal key={i} type={MealEnum.UPCOMING} onClick={() => setOpen(true)} />);
  const slidesUpcoming = chunkArray(mealUpcomingItems, itemsPerSlideUpcoming);

  const mealExpiredItems = Array.from({ length: 20 }, (_, i) => <CardMeal key={i} type={MealEnum.EXPIRED_SOON} onClick={() => setOpen(true)} />);
  const slidesExpiredSoon = chunkArray(mealExpiredItems, itemsPerSlideUpcoming);

  const [open, setOpen] = useState(false);


  return (
    <>
      <div className="background-header">
      </div>
      <div className="absolute top-[112px] w-full h-[488px] flex items-center justify-center">
        <div className="max-w-[1300px] mx-auto">
          <div className="font-mont flex flex-col items-center gap-8">
            <h1 className="text-4xl font-semibold text-white">THỰC ĐƠN</h1>
            <div className="text-base text-gray-300">
              <Link to="/">Trang chủ</Link>
              <span> / </span>
              <span>Thực đơn</span>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Discount */}
      <section className="w-full bg-stone-950 py-20">
        <div className="max-w-[1500px] mx-auto">
          <p className="text-3xl font-medium text-white text-center">Thực Đơn Giảm Giá</p>
          <div className="w-20 mx-auto">
            <Divider className="bg-amber-500 rounded h-1"/>
          </div>
          <p className="text-olive-light text-base font-medium text-center max-md:px-10">Thực đơn bao gồm các món ăn đang trong thời gian giảm giá</p>
          <div className="my-20 px-10">
            <Carousel infinite={false} draggable arrows slidesToShow={1}>
              {slidesDiscount.map((group, index) => (
                <div className="px-5" key={index}>
                  <div className="grid grid-cols-3 gap-x-6 pt-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-15 max-md:gap-y-8 max-lg:gap-y-10">
                    {group}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* Menu Best Seller */}
      <section className="w-full bg-gray-section py-20">
        <div className="max-w-[1500px] mx-auto">
          <p className="text-3xl font-medium text-white text-center">Thực Đơn Bán Chạy</p>
          <div className="w-20 mx-auto">
            <Divider className="bg-amber-500 rounded h-1"/>
          </div>
          <p className="text-olive-light text-base font-medium text-center max-md:px-10">Thực đơn bao gồm các món ăn bán chạy nhất của cửa hàng</p>
          <div className="my-20 px-10">
            <Carousel infinite={false} draggable arrows slidesToShow={1}>
              {slidesBestSeller.map((group, index) => (
                <div className="px-5" key={index}>
                  <div className="grid grid-cols-3 gap-x-6 pt-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-15 max-md:gap-y-8 max-lg:gap-y-10">
                    {group}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* Menu Categories */}
      <section className="w-full bg-stone-950 py-25">
        <div className="max-w-[1500px] mx-auto flex flex-row max-lg:flex-col px-15">
          {/* Menu */}
          <div className="flex flex-col w-1/3 max-lg:w-full">
            <p className="text-3xl font-medium text-white max-lg:text-center">Danh Mục</p>
            <div className="w-20 max-lg:mx-auto">
              <Divider className="bg-amber-500 rounded h-1"/>
            </div>
            <menu className="mt-2">
              <ul className="flex flex-col flex-wrap max-lg:flex-row max-lg:justify-center max-lg:gap-4 gap-y-4">
                <li className="text-xl text-white font-medium">Khai vị</li>
                <li className="text-xl text-white font-medium">Rau củ</li>
                <li className="text-xl text-white font-medium">Món chính</li>
                <li className="text-xl text-white font-medium">Hải sản</li>
                <li className="text-xl text-white font-medium">Súp</li>
                <li className="text-xl text-white font-medium">Món tráng miệng</li>
                <li className="text-xl text-white font-medium">Đồ uống</li>
                <li className="text-xl text-white font-medium">Combo</li>
              </ul>
            </menu>
          </div>
          {/* List Meal */}
          <div className="mb-20 w-2/3 max-lg:w-full max-lg:mt-20">
            <Carousel infinite={false} draggable arrows slidesToShow={1}>
              {slidesMenu.map((group, index) => (
                <div className="px-5" key={index}>
                  <div className="grid grid-cols-2 gap-x-6 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-15 max-md:gap-y-8 max-lg:gap-y-10">
                    {group}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* Upcoming - Expired Soon */}
      <section className="w-full bg-gray-section py-20">
        <div className="max-w-[1500px] mx-auto flex flex-row max-lg:flex-col px-15">
          {/* Title Upcoming */}
          <div className="flex max-lg:justify-center w-1/3 max-lg:w-full gap-x-4">
            <NewIcon className="h-10 text-yellow-500" />
            <p className="text-3xl font-medium text-white">Sắp Ra Mắt</p>
          </div>
          {/* List Meal Upcomming */}
          <div className="mb-20 w-2/3 max-lg:w-full max-lg:mt-20">
            <Carousel infinite={false} draggable arrows slidesToShow={1}>
              {slidesUpcoming.map((group, index) => (
                <div className="px-5" key={index}>
                  <div className="grid grid-cols-2 gap-x-6 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-15 max-md:gap-y-8 max-lg:gap-y-10">
                    {group}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-section pb-20">
        <div className="max-w-[1500px] mx-auto flex flex-row max-lg:flex-col px-15">
          {/* Title Expired Soon */}
          <div className="flex max-lg:justify-center w-1/3 max-lg:w-full gap-x-4">
            <NewIcon className="h-10 text-red-600" />
            <p className="text-3xl font-medium text-white">Sắp Kết Thúc</p>
          </div>
          {/* List Meal Expired Soon */}
          <div className="mb-20 w-2/3 max-lg:w-full max-lg:mt-20">
            <Carousel infinite={false} draggable arrows slidesToShow={1}>
              {slidesExpiredSoon.map((group, index) => (
                <div className="px-5" key={index}>
                  <div className="grid grid-cols-2 gap-x-6 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-15 max-md:gap-y-8 max-lg:gap-y-10">
                    {group}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      {/* Modal */}
      <DetailMealModal open={open} close={() => setOpen(false)} />
    </>
  )
}
