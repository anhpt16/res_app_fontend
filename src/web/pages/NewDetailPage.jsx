import React from 'react';
import { Link } from 'react-router-dom';

import { Tag } from 'antd';

import { CardNew } from '../components';
import tagStyle from "../../shared/styles/tag.module.css";

export const NewDetailPage = () => {
  return (
    <>
      <div className="background-header">
      </div>
      <div className="absolute top-[112px] w-full h-[488px] flex items-center justify-center">
        <div className="max-w-[1300px] mx-auto">
          <div className="font-mont flex flex-col items-center gap-8">
            <h1 className="text-4xl font-semibold text-white text-center">Giới thiệu về các món ăn mới trong T5/2025</h1>
            <div className="flex items-center gap-4">
              <img src="/icons/i_date.svg" alt="Icon Date" />
              <span className="text-base text-white">20/04/2025</span>
            </div>
            <div className="text-base text-gray-300">
              <Link to="/">Trang chủ</Link>
              <span> / </span>
              <Link to="/new">Tin tức</Link>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-stone-950 py-15 max-lg:px-10">
        <div className="max-w-[1300px] mx-auto">
          <div className="mb-10">
            <p className="text-base text-white">Content Section</p>
          </div>
          <div className="flex py-5 border-y-1 border-divider-gray">
            <span className="text-base text-white me-4">THẺ:</span>
            <div className="flex flex-wrap gap-y-4">
              <Tag className={tagStyle.tagNew}><Link to="/new">Đồ ăn</Link></Tag>
              <Tag className={tagStyle.tagNew}><Link to="/new">Đồ ăn</Link></Tag>
              <Tag className={tagStyle.tagNew}><Link to="/new">Đồ ăn</Link></Tag>
              <Tag className={tagStyle.tagNew}><Link to="/new">Đồ ăn</Link></Tag>
              <Tag className={tagStyle.tagNew}><Link to="/new">Đồ ăn</Link></Tag>
            </div>
          </div>
          <div className="">
            <p className="text-xl text-white font-medium my-6">Các bài viết liên quan</p>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10">
              <CardNew />
              <CardNew />
              <CardNew />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
