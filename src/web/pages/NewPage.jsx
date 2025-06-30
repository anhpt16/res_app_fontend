import { useCallback, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tag } from "antd";
import { CardNew } from '../components';
import { Pagination } from '../../shared/components/pagination/Pagination';
import tagStyle from "../../shared/styles/tag.module.css";

import { useFetchPosts } from '../hooks/usePost';

export const NewPage = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search);

  const currentPage = parseInt(query.get("page") || "1");
  const tagSlug = query.get("tagSlug");
  const size = 3;

  const params = {
    page: currentPage,
    size: size,
    ...(tagSlug && {tagSlug: tagSlug})
  }

  const { data: postsData, isLoading, error} = useFetchPosts(params);
  const totalPages = postsData?.data?.pageData?.totalPages || 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Chuyển trang
  const handlePageChange = useCallback((page) => {
    const newSearch = new URLSearchParams(search);
    if (page > 1) {
      newSearch.set("page", page.toString());
    } else {
      newSearch.delete("page");
    }
    const newUrl = newSearch.toString() ? `?${newSearch.toString()}` : '';
    navigate(`/new${newUrl}`);
  }, [search, navigate]);

  // Danh sách bài viết
  const postList = useMemo(() => {
    if (!postsData?.data?.pageData?.content) return [];
    console.log(postsData.data.pageData.content)
    return postsData.data.pageData.content.map((post) => (
      <CardNew key={post.slug} post={post}/>
    ))
  }, [postsData?.data?.pageData?.content]);
  // TagName (nếu có)
  const tagName = postsData?.data?.tagName || "";
 
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
            {tagSlug && 
            <div className="flex items-center mb-5">
              <span className="text-base text-white me-4">THẺ:</span>
              <div className="flex flex-wrap gap-y-4">
                <Tag className={tagStyle.tagNew}>{tagName}</Tag>
              </div>
            </div>
            }
          </div>
          {isLoading ? (
            <div></div>
          ) : error ? (
            <div></div>
          ) : (
            <>
              <div className="mb-10 grid grid-cols-3 grid-rows-2 max-lg:grid-cols-2 max-lg:grid-rows-3 max-md:grid-cols-1 gap-10">
                {postList}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/> 
            </>
          )}
        </div>
      </section>
    </>
  )
}
