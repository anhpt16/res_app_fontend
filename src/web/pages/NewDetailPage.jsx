import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Tag } from "antd";
import { CardNew } from "../components";
import tagStyle from "../../shared/styles/tag.module.css";

import { useFetchPost } from "../hooks/usePost";
import dayjs from "dayjs";

export const NewDetailPage = () => {
  const { slug } = useParams();

  const {data: postData, isLoading, error} = useFetchPost(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);
  
  if (isLoading) return (<div></div>)
  if (error) return (<div>Error</div>)

  console.log(postData)

  const {
    id,
    title,
    content,
    publishedAt,
    tags = [],
    postsRelated = []
  } = postData?.data || {};

  return (
    <>
      <div className="background-header">
      </div>
      <div className="absolute top-[112px] w-full h-[488px] flex items-center justify-center">
        <div className="max-w-[1300px] mx-auto">
          <div className="font-mont flex flex-col items-center gap-8">
            <h1 className="text-4xl font-semibold text-white text-center" data-id={id}>{title}</h1>
            <div className="flex items-center gap-4">
              <img src="/icons/i_date.svg" alt="Icon Date" />
              <span className="text-base text-white">
                {publishedAt ? dayjs(publishedAt).format("DD/MM/YYYY") : ""}
              </span>
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
            <p className="text-base text-white">{content}</p>
          </div>
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex py-5 border-y border-gray-700">
              <span className="text-base text-white me-4">THẺ:</span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag.slug} className={tagStyle.tagNew}>
                    <Link to={`/new?tagSlug=${tag.slug}`}>
                      {tag.name}
                    </Link>
                  </Tag>
                ))}
              </div>
            </div>
          )}
          {/* Related Posts */}
          {postsRelated && postsRelated.length > 0 && (
            <div className="mt-8">
              <p className="text-xl text-white font-medium mb-6">Các bài viết liên quan</p>
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10">
                {postsRelated.map((post) => (
                  <CardNew key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
