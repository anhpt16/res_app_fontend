import React, { forwardRef } from "react";
import { Carousel } from "antd";

export const ThumbnailCarousel = forwardRef(({ images, current, onThumbnailClick }, ref) => (
  <Carousel
    ref={ref}
    slidesToShow={5}
    swipeToSlide
    focusOnSelect
    dots={false}
    arrows
    style={{ padding: "0 10px" }}
  >
    {images.map((src, i) => (
      <div key={i} onClick={() => onThumbnailClick(i)}>
        <img
          src={src}
          alt={`Thumbnail ${i}`}
          style={{
            width: "100%",
            height: 70,
            objectFit: "cover",
            borderRadius: 5,
            cursor: "pointer",
            border: i === current ? "2px solid #1890ff" : "2px solid transparent",
            padding: 2,
          }}
        />
      </div>
    ))}
  </Carousel>
));