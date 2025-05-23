import { useState, useRef } from "react";
import { Carousel } from "antd";

export const MainCarousel = () => {
    const images = [
    '/meal_detail_default.webp',
    '/meal_detail_default.webp',
    '/meal_detail_default.webp',
    '/meal_detail_default.webp',
    '/meal_detail_default.webp',
    ];

    const mainRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        mainRef.current.goTo(index);
    };

    return (
        <div className="w-[200px] mx-auto">
            {/* Main Carousel */}
            <Carousel
                ref={mainRef}
                afterChange={(index) => setCurrentIndex(index)}
                dots={false}
                draggable
                className="rounded-xl overflow-hidden"
            >
                {images.map((src, i) => (
                <div key={i} className="flex justify-center items-center h-[200px]">
                    <img
                    src={src}
                    alt={`Image ${i}`}
                    className="w-full h-full object-cover"
                    />
                </div>
                ))}
            </Carousel>

            {/* Thumbnails */}
            <div className="flex gap-1 mt-3 overflow-x-auto scrollbar-hide pb-1">
                {images.map((src, i) => (
                <div
                    key={i}
                    className={`w-[34px] h-[34px] flex-shrink-0 cursor-pointer border-2 rounded-sm ${
                    i === currentIndex ? 'border-blue-500' : 'border-transparent'
                    }`}
                    onClick={() => handleThumbnailClick(i)}
                >
                    <img
                    src={src}
                    alt={`Thumb ${i}`}
                    className="w-full h-full object-cover"
                    />
                </div>
                ))}
            </div>
        </div>
    );
};
