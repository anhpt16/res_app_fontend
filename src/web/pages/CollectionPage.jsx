import React from 'react';
import { Link } from 'react-router-dom';

import Masonry from 'react-masonry-css';


export const CollectionPage = () => {
  const breakpointColumnsObj = {
    default: 3,
    400: 1
  }

  const fakeData = [
  {
    id: 1,
    title: "Image 1",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    title: "Image 2",
    image: "https://picsum.photos/300/250?random=2",
  },
  {
    id: 3,
    title: "Image 3",
    image: "https://picsum.photos/300/180?random=3",
  },
  {
    id: 4,
    title: "Image 4",
    image: "https://picsum.photos/300/220?random=4",
  },
  {
    id: 5,
    title: "Image 5",
    image: "https://picsum.photos/300/300?random=5",
  },
  {
    id: 6,
    title: "Image 6",
    image: "https://picsum.photos/300/270?random=6",
  },
];

  return (
    <>
      <div className="background-header">
      </div>
      <div className="absolute top-[112px] w-full h-[488px] flex items-center justify-center">
        <div className="max-w-[1300px] mx-auto">
          <div className="font-mont flex flex-col items-center gap-8">
            <h1 className="text-4xl font-semibold text-white">BỘ SƯU TẬP</h1>
            <div className="text-base text-gray-300">
              <Link to="/">Trang chủ</Link>
              <span> / </span>
              <span>Bộ sưu tập</span>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-stone-950 py-15 max-lg:py-10">
        <div className="max-w-[1300px] mx-auto max-lg:px-8">
          <Masonry 
          breakpointCols={breakpointColumnsObj} 
          className="flex gap-4"
          columnClassName="flex flex-col space-y-4">
            {fakeData.map(item => (
              <div key={item.id} className="rounded-xl group overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                  <span className="text-white text-xl font-semibold">Xem</span>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    </>
  )
}
