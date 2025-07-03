import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

import { CardMeal, CardCombo } from "../components";
import { MealEnum } from "../../shared/utils/constants/MealEnum";
import { NewIcon } from "../../shared/utils/icons/Icons";
import { DetailMealModal, DetailComboModal } from "../components";

import { Divider, Carousel } from "antd";
import { 
  useFetchDishesComing, 
  useFetchDishesEnding, 
  useFetchDishesDiscount, 
  useFetchDishesCategory, 
  useFetchCategories, 
  useFetchCombos,
} from "../hooks/useMenu";

export const MenuPage = () => {
  const [openDish, setOpenDish] = useState(false);
  const [openCombo, setOpenCombo] = useState(false);

  // Thực đơn đang chọn
  const [categoryId, setCategoryId] = useState(null);
  // Trạng thái chọn combo
  const [isCombo, setIsCombo] = useState(false);
  // Món ăn đang chọn
  const [dishId, setDishId] = useState(null);
  // Combo đang chọn
  const [comboId, setComboId] = useState(null);

  // Nếu chọn danh mục thì không chọn combo
  useEffect(() => {
    if (categoryId) {
      setIsCombo(false);
    }
  }, [categoryId]);

  // Nếu chọn combo thì không chọn danh mục
  useEffect(() => {
    if (isCombo) {
      setCategoryId(null);
    }
  }, [isCombo]);
  // Khi nhấn vào dish
  const handleOpenDish = (dishId) => {
    setDishId(dishId);
    setOpenDish(true);
  }
  // Khi nhấn vào combo
  const handleOpenCombo = (comboId) => {
    setComboId(comboId);
    setOpenCombo(true);
  }

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const itemsPerSlide = 6;
  const itemsPerSlideUpcoming = 4;

  // Lấy dữ liệu section: giảm giá, danh mục, sắp ra mắt, sắp kết thúc
  const { data: dishesDiscount, isLoading: isLoadingDiscount, isError: isErrorDiscount } = useFetchDishesDiscount();
  const { data: categories, isLoading: isLoadingCategory, isError: isErrorCategory } = useFetchCategories();
  const { data: dishesComing, isLoading: isLoadingComing, isError: isErrorComing } = useFetchDishesComing();
  const { data: dishesEnding, isLoading: isLoadingEnding, isError: isErrorEnding } = useFetchDishesEnding();
  const { data: dishesCategory, isLoading: isLoadingDishesCategory, isError: isErrorDishesCategory } = useFetchDishesCategory(categoryId);
  const { data: combos, isLoading: isLoadingCombos, isError: isErrorCombos } = useFetchCombos();
  // Tự động chọn danh mục đầu tiên nếu chưa có danh mục nào được chọn và chưa chọn thực đơn
  useEffect(() => {
    if (categories?.data && categories.data.length > 0 && !categoryId && !isCombo) {
      setCategoryId(categories.data[0].id);
    }
  }, [categories, categoryId, isCombo]);

  // Thực đơn giảm giá
  const DishDiscountList = useMemo(() => {
    if (isLoadingDiscount) {
      return (
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      )
    }
    if (isErrorDiscount) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-white text-2xl font-medium">Lỗi khi tải dữ liệu</p>
        </div>
      )
    }
    if (dishesDiscount?.data && dishesDiscount.data.length > 0) {
      console.log(dishesDiscount.data);
      const mealDishDiscountItems = dishesDiscount.data.map((dish) => (
        <CardMeal key={dish.id} dish={dish} type={MealEnum.DISCOUNT} onClick={() => handleOpenDish(dish.id)} />
      ));
      const slidesDishDiscount = chunkArray(mealDishDiscountItems, itemsPerSlide);
      return (
        <section className="w-full bg-stone-950 py-20">
          <div className="max-w-[1500px] mx-auto">
            <p className="text-3xl max-md:text-2xl font-medium text-white text-center">Thực Đơn Giảm Giá</p>
            <div className="w-20 mx-auto">
              <Divider className="bg-amber-500 rounded h-1"/>
            </div>
            <p className="text-olive-light text-base max-md:text-sm font-medium text-center max-md:px-10">Thực đơn bao gồm các món ăn đang trong thời gian giảm giá</p>
            <div className="my-20 px-10">
              <Carousel infinite={false} draggable arrows slidesToShow={1}>
                {slidesDishDiscount.map((group, index) => (
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
      )
    }
    return <></>;
  }, [isLoadingDiscount, isErrorDiscount, dishesDiscount]);

  // Thực đơn sắp ra mắt
  const DishComingList = useMemo(() => {
    if (isLoadingComing) {
      return (
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      )
    }
    if (isErrorComing) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-white text-2xl font-medium">Lỗi khi tải dữ liệu</p>
        </div>
      )
    }
    if (dishesComing?.data && dishesComing.data.length > 0) {
      console.log(dishesComing.data);
      const mealDishComingItems = dishesComing.data.map((dish) => (
        <CardMeal key={dish.id} dish={dish} type={MealEnum.UPCOMING} onClick={() => handleOpenDish(dish.id)} />
      ));
      const slidesDishComing = chunkArray(mealDishComingItems, itemsPerSlideUpcoming);
      return (
        <section className="w-full bg-gray-section py-20">
          <div className="max-w-[1500px] mx-auto flex flex-row max-lg:flex-col px-15">
            {/* Title Upcoming */}
            <div className="flex max-lg:justify-center w-1/3 max-lg:w-full gap-x-4">
              <NewIcon className="h-10 text-yellow-500" />
              <p className="text-3xl max-md:text-2xl font-medium text-white">Sắp Ra Mắt</p>
            </div>
            {/* List Meal Upcomming */}
            <div className="mb-20 w-2/3 max-lg:w-full max-lg:mt-20">
              <Carousel infinite={false} draggable arrows slidesToShow={1}>
                {slidesDishComing.map((group, index) => (
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
      )
    }
    return <></>;
  }, [isLoadingComing, isErrorComing, dishesComing]);

  // Thực đơn sắp kết thúc
  const DishEndingList = useMemo(() => {
    if (isLoadingEnding) {
      return (
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      )
    }
    if (isErrorEnding) {
      return (  
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-white text-2xl font-medium">Lỗi khi tải dữ liệu</p>
        </div>
      )
    }
    if (dishesEnding?.data && dishesEnding.data.length > 0) {
      console.log(dishesEnding.data);
      const mealDishEndingItems = dishesEnding.data.map((dish) => (
        <CardMeal key={dish.id} dish={dish} type={MealEnum.EXPIRED_SOON} onClick={() => handleOpenDish(dish.id)} />
      ));
      const slidesDishEnding = chunkArray(mealDishEndingItems, itemsPerSlideUpcoming);
      return (
        <section className="w-full bg-gray-section pb-20">
          <div className="max-w-[1500px] mx-auto flex flex-row max-lg:flex-col px-15">
            {/* Title Expired Soon */}
            <div className="flex max-lg:justify-center w-1/3 max-lg:w-full gap-x-4">
              <NewIcon className="h-10 text-red-600" />
              <p className="text-3xl max-md:text-2xl font-medium text-white">Sắp Kết Thúc</p>
            </div>
            {/* List Meal Expired Soon */}
            <div className="mb-20 w-2/3 max-lg:w-full max-lg:mt-20">
              <Carousel infinite={false} draggable arrows slidesToShow={1}>
                {slidesDishEnding.map((group, index) => (
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
      )
    }
    return <></>;
  }, [isLoadingEnding, isErrorEnding, dishesEnding]);

  // Danh mục
  const CategoryList = useMemo(() => {
    if (isLoadingCategory) {
      return (
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      )
    }
    if (isErrorCategory) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-white text-2xl font-medium">Lỗi khi tải dữ liệu</p>
        </div>
      )
    }
    if (categories?.data && categories.data.length > 0) {
      console.log(categories.data);
      console.log(categoryId);
      return categories.data.map((category) => (
        <li className="text-xl max-md:text-base font-medium" key={category.id}>
          <span className={`inline-block cursor-pointer min-lg:hover:translate-x-2 transition-all duration-300 ease-in-out ${categoryId === category.id ? "text-amber-500" : "text-white"}`} 
            key={category.id} onClick={() => setCategoryId(category.id)}>
            {category.name}
          </span>
        </li>
      ));
    }
    return <></>;
  }, [isLoadingCategory, isErrorCategory, categories, categoryId]);

  // Thực đơn theo danh mục đang chọn
  const DishCategoryList = useMemo(() => {
    // Nếu đang loading danh sách danh mục hoặc không có danh mục nào
    if (isLoadingCategory || categories?.data?.length === 0) {
      return <></>;
    }
    // Nếu loading danh sách danh mục lỗi
    if (isErrorCategory) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-white text-2xl font-medium">Lỗi khi tải dữ liệu</p>
        </div>
      )
    }
    // Nếu chưa có danh mục nào được chọn
    if (!categoryId) {
      return <></>;
    }
    // Nếu đang loading danh sách món ăn theo danh mục
    if (isLoadingDishesCategory) {
      return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
      )
    }
    // Nếu lỗi khi tải danh sách món ăn theo danh mục
    if (isErrorDishesCategory) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-white text-2xl font-medium">Lỗi khi tải dữ liệu</p>
        </div>
      )
    }
    // Nếu có danh sách món ăn theo danh mục
    if (dishesCategory?.data && dishesCategory.data.length > 0) {
      console.log(dishesCategory.data);
      const mealDishCategoryItems = dishesCategory.data.map((dish) => (
        <CardMeal key={dish.id} dish={dish} type={MealEnum.DEFAULT} onClick={() => handleOpenDish(dish.id)} />
      ));
      const slidesDishCategory = chunkArray(mealDishCategoryItems, itemsPerSlide);
      return (
        <Carousel infinite={false} draggable arrows slidesToShow={1}>
          {slidesDishCategory.map((group, index) => (
            <div className="px-5" key={index}>
              <div className="grid grid-cols-2 gap-x-6 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-15 max-md:gap-y-8 max-lg:gap-y-10">
                {group}
              </div>
            </div>
          ))}
        </Carousel>
      )
    }
    return <></>;
  }, [isLoadingDishesCategory, isErrorDishesCategory, dishesCategory, categoryId]);

  // Combo
  const ComboList = useMemo(() => {
    if (isLoadingCombos) {
      return (
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      )
    }
    if (isErrorCombos) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-white text-2xl font-medium">Lỗi khi tải dữ liệu</p>
        </div>
      )
    }
    if (combos?.data && combos.data.length > 0) {
      console.log(combos.data);
      const comboItems = combos.data.map((combo) => (
        <CardCombo key={combo.id} combo={combo} onClick={() => handleOpenCombo(combo.id)} />
      ));
      const slidesCombo = chunkArray(comboItems, itemsPerSlide);
      return (
        <Carousel infinite={false} draggable arrows slidesToShow={1}>
          {slidesCombo.map((group, index) => (
            <div className="px-5" key={index}>
              <div className="grid grid-cols-2 gap-x-6 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-15 max-md:gap-y-8 max-lg:gap-y-10">
                {group}
              </div>
            </div>
          ))}
        </Carousel>
      )
    }
  }, [isLoadingCombos, isErrorCombos, combos]);

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
      {DishDiscountList}
      {/* Menu Best Seller */}
      {/* <section className="w-full bg-gray-section py-20">
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
      </section> */}
      {/* Menu Categories */}
      <section className="w-full bg-stone-950 py-25">
        <div className="max-w-[1500px] mx-auto flex flex-row max-lg:flex-col px-15">
          {/* Menu */}
          <div className="flex flex-col w-1/3 max-lg:w-full">
            <p className="text-3xl max-md:text-2xl font-medium text-white max-lg:text-center">Danh Mục</p>
            <div className="w-20 max-lg:mx-auto">
              <Divider className="bg-amber-500 rounded h-1"/>
            </div>
            <menu className="mt-2">
              <ul className="flex flex-col flex-wrap max-lg:flex-row max-lg:justify-center max-lg:gap-4 gap-y-4">
                {CategoryList}
                <li className={`text-xl max-md:text-base ${isCombo ? "text-amber-500" : "text-white"}`} onClick={() => setIsCombo(true)}>
                  <span className="inline-block cursor-pointer min-lg:hover:translate-x-2 transition-all duration-300 ease-in-out">Combo</span>
                </li>
              </ul>
            </menu>
          </div>
          {/* List Meal */}
          <div className="mb-20 w-2/3 max-lg:w-full max-lg:mt-20">
            {isCombo ? ComboList : DishCategoryList}
          </div>
        </div>
      </section>
      {/* Upcoming*/}
      {DishComingList}
      {/* Expired Soon */}
      {DishEndingList}
      {/* Modal */}
      <DetailMealModal open={openDish} dishId={dishId} close={() => setOpenDish(false)} />
      <DetailComboModal open={openCombo} comboId={comboId} close={() => setOpenCombo(false)} />
    </>
  )
}
