import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Tag } from "antd";

import { CardNew } from '../components';
import { Pagination } from '../../shared/components/pagination/Pagination';
import tagStyle from "../../shared/styles/tag.module.css";

export const NewPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const tagParam = query.get("tag");

  return (
    <>
      <div className="background-header">
      </div>
      <div className="absolute top-[112px] w-full h-[488px] flex items-center justify-center">
        <div className="max-w-[1300px] mx-auto">
          <div className="font-mont flex flex-col items-center gap-8">
            <h1 className="text-4xl font-semibold text-white">TIN TỨC MỚI NHẤT</h1>
            <div className="text-base text-gray-300">
              <Link to="/">Trang chủ</Link>
              <span> / </span>
              <span>Tin tức</span>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-stone-950 flex flex-col py-30 max-md:py-20 max-lg:px-15 max-md:px-8">
        <div className="max-w-[1300px] mx-auto">
          <div>
            {tagParam && 
            <div className="flex items-center mb-5">
              <span className="text-base text-white me-4">THẺ:</span>
              <div className="flex flex-wrap gap-y-4">
                <Tag className={tagStyle.tagNew}>Đồ ăn</Tag>
              </div>
            </div>}
          </div>
          <div className="mb-10 grid grid-cols-3 grid-rows-2 max-lg:grid-cols-2 max-lg:grid-rows-3 max-md:grid-cols-1 gap-10">
            <CardNew />
            <CardNew />
            <CardNew />
            <CardNew />
            <CardNew />
          </div>
          <Pagination currentPage={2} totalPages={10}/>         
        </div>
      </section>
    </>
  )
}
