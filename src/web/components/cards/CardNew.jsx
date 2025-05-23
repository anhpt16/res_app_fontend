import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./CardNew.module.css";

export const CardNew = () => {
  return (
    <Link to="/" className="group flex flex-col gap-4 animate-fade-up">
        <div className={`overflow-hidden rounded-lg ${styles.imageAnime}`}>
          <img className="h-[300px] object-cover transition-transform duration-500 group-hover:scale-110" src="/image-new-default.jpg" alt="Default Image" />
        </div>
        <span className="text-xl font-medium text-white">Giới thiệu về các món ăn mới trong T5/2025</span>
        <span className="text-base font-medium text-gray-500">20/04/2025</span>
    </Link>
  )
}
