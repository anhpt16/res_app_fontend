import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from "dayjs";
import styles from "./CardNew.module.css";
import config from '../../../shared/utils/env';

export const CardNew = React.memo(({post}) => {
  if (!post) return;
  const {
    id,
    slug = "#",
    title = "Không có tiêu đề",
    thumbnail,
    publishedAt
  } = post

  return (
    <Link to={`/new/${slug}`} data-id={id} className="group flex flex-col gap-4 animate-fade-up">
        <div className={`overflow-hidden rounded-lg ${styles.imageAnime}`}>
          <img className="h-[300px] object-cover transition-transform duration-500 group-hover:scale-110" src={thumbnail ? config.API_MEDIA + thumbnail : "/image-new-default.jpg"} alt="Image" />
        </div>
        <span className="text-xl font-medium text-white">
          {title}
        </span>
        <span className="text-base font-medium text-gray-500">
          {publishedAt ? dayjs(publishedAt).format("DD/MM/YYYY") : ""}
        </span>
    </Link>
  )
});
