import { useRef } from "react"

import { MealEnum } from "../../../shared/utils/constants/MealEnum";
import { DateIcon } from "../../../shared/utils/icons/Icons";
import CardMealStyle from "./CardMeal.module.css";
import config from "../../../shared/utils/env";
import { formatPrice } from "../../../shared/utils/utils";


export const CardMeal = ({type, dish, onClick}) => {
    const thumbnail = dish.thumbnail ? `${config.API_MEDIA}${dish.thumbnail}` : "/meal_default.png";

    // startX-startY: tọa độ khi người dùng bắt đầu nhấn (chạm)
    const startX = useRef(0);
    const startY = useRef(0);
    const wasDragged = useRef(false);

    // Khi nhấn chuột lưu lại tọa độ x,y và đánh dấu là chưa kéo
    const handleMouseDown = (e) => {
        startX.current = e.clientX;
        startY.current = e.clientY;
        wasDragged.current = false;
    };

    // Khi thả chuột: tính độ lệch x,y so với lúc nhấn -> quá 5px thì tính là kéo
    const handleMouseUp = (e) => {
        const dx = Math.abs(e.clientX - startX.current);
        const dy = Math.abs(e.clientY - startY.current);
        if (dx > 5 || dy > 5) {
        wasDragged.current = true;
        } else {
        wasDragged.current = false;
        }
    };

    const handleClick = (e) => {
        // Nếu là một hành động kéo -> chặn click
        if (wasDragged.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
        }
        onClick?.(e);
    };

    // Tương tự, sử dụng cho thiết bị cảm ứng
    const onTouchStart = (e) => {
        const touch = e.touches[0];
        startX.current = touch.clientX;
        startY.current = touch.clientY;
        wasDragged.current = false;
    }
    // Tương tự, sử dụng cho thiết bị cảm ứng
    const onTouchEnd = (e) => {
        const touch = e.changedTouches[0];
        const dx = Math.abs(touch.clientX - startX.current);
        const dy = Math.abs(touch.clientY - startY.current);
        wasDragged.current = dx > 5 || dy > 5;
    }

    return (
        <>
            <div className="flex gap-5 cursor-(--cursor-view-card) select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            >
                <div className="flex items-center relative">
                    <img className="w-[100px] max-md:w-[80px] aspect-square rounded-full object-cover" src={thumbnail} alt="Image Meal" />
                    { type === MealEnum.DISCOUNT && <p className="absolute top-[-4px] max-md:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">
                        <span>12d</span>
                        <span>:24</span>
                        <span className="max-md:hidden">:24</span>
                        <span className="max-lg:hidden">:24</span>
                    </p> }
                </div>
                <div className="flex flex-col justify-center gap-4 max-w-[450px] overflow-hidden">
                    <span className="text-xl max-md:text-base text-white font-medium line-clamp-1">{dish?.name || ""}</span>
                    <span className="text-base max-md:text-sm text-stone-400 line-clamp-1">{dish?.introduce || ""}</span>
                    <div className="flex items-center gap-2">
                        <div className="px-4 py-1 bg-olive-light rounded-2xl">
                            <span className="text-base max-md:text-sm text-white">
                                { type === MealEnum.DISCOUNT 
                                    ? formatPrice(dish?.priceDiscount || 0)
                                    : formatPrice(dish?.priceDiscount ? dish?.priceDiscount : dish?.price || 0)
                                }đ</span>
                        </div>
                        { (type === MealEnum.DEFAULT || type === MealEnum.DISCOUNT) &&
                            <p className="text-base max-md:text-sm text-white line-through max-lg:hidden">
                                {dish?.priceDiscount && dish?.priceDiscount !== 0 && `${formatPrice(dish?.price)}đ`}
                            </p>
                        }
                        { type === MealEnum.BEST_SELLER &&
                            <p className="text-base max-md:text-sm text-white max-md:hidden">SL: <span>200</span></p>
                        }
                        { type === MealEnum.UPCOMING &&
                            <div className="flex items-center gap-x-1 text-base max-md:text-sm text-white max-lg:hidden">
                                <DateIcon className="h-6 text-yellow-500"/>
                                <span>{dish?.dateStart || ""}</span>
                            </div>
                        }
                        { type === MealEnum.EXPIRED_SOON &&
                            <div className="flex items-center gap-x-1 text-base text-white max-lg:hidden">
                                <DateIcon className="h-6 text-red-600"/>
                                <span>{dish?.dateEnd || ""}</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
