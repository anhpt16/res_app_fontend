import React from "react";

import { InputNumber } from "antd";
import { MealEnum } from "../../../shared/utils/constants/MealEnum";
import { DateIcon } from "../../../shared/utils/icons/Icons";
import CardMealStyle from "./CardMeal.module.css";

export const OrderCardMeal = ({type, data, onClick}) => {

   

    const handleClick = (e) => {
        onClick?.(e);
    };

  return (
    <>
        <div className="flex gap-5 cursor-pointer select-none"
        onClick={handleClick}
        >
            <div className="flex items-center relative">
                <img src="/meal_default.png" alt="Image Meal" />
                { type === MealEnum.DISCOUNT && <p className="absolute top-[-8px] max-md:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm">
                    <span>12d</span>
                    <span>:24</span>
                    <span className="max-md:hidden">:24</span>
                    <span className="max-lg:hidden">:24</span>
                </p> }
            </div>
            <div className="flex flex-col justify-center gap-2 max-w-[450px] overflow-hidden">
                <span className="text-base font-medium line-clamp-1">Bò lúc lắc khoai tây</span>
                <span className="text-base text-stone-400">
                    <span>Còn: </span>
                    <span>32</span>
                </span>
                <div className="flex items-center gap-2">
                    <div className="px-4 py-1 bg-olive-light rounded-2xl">
                        <span className="text-base text-white">100.000đ</span>
                    </div>
                    { (type === MealEnum.DEFAULT || type === MealEnum.DISCOUNT) &&
                        <p className="text-base text-white line-through max-lg:hidden">120.000đ</p>
                    }
                    { type === MealEnum.BEST_SELLER &&
                        <p className="text-base text-white max-md:hidden">SL: <span>200</span></p>
                    }
                    { type === MealEnum.UPCOMING &&
                        <div className="flex items-center gap-x-1 text-base text-white max-lg:hidden">
                            <DateIcon className="h-6 text-yellow-500"/>
                            <span>12/02/2024</span>
                        </div>
                    }
                    { type === MealEnum.EXPIRED_SOON &&
                        <div className="flex items-center gap-x-1 text-base text-white max-lg:hidden">
                            <DateIcon className="h-6 text-red-600"/>
                            <span>12/02/2024</span>
                        </div>
                    }
                </div>
            </div>
            <div className="flex flex-col justify-center gap-y-2">
                <div className="flex items-center gap-2">
                    <span>SL:</span>
                    <InputNumber defaultValue={0} />
                </div>
                <span className="flex justify-center items-center rounded p-2 bg-amber-500 text-white hover:bg-amber-600 transition">Thêm</span>
            </div>
        </div>
    </>
  )
}
