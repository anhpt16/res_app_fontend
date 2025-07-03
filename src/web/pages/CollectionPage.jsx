import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import config from "../../shared/utils/env";
import { getFileType } from "../../shared/utils/utils";
import { MediaModal } from "../components";
import { useFetchCollection } from "../hooks/useCollection";

export const CollectionPage = () => {
  const [page, setPage] = useState(1);
  const [allItems, setAllItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const isLoadingRef = useRef(false);
  
  // ✅ Sử dụng useRef thay vì useState để track items mới
  const newItemsStartIndexRef = useRef(0);
  const animatedItemsRef = useRef(new Set());
  
  const size = 6;
  const breakpointColumnsObj = {
    default: 3,    // Desktop: 3 cột
    1100: 2,       // Tablet lớn: 2 cột  
    768: 2,        // Tablet: 2 cột
    480: 1,        // Mobile lớn: 1 cột
    400: 1
  };

  // Fetch data với page=1 mặc định
  const { data, isLoading, error } = useFetchCollection({ page, size });

  // Process data - sửa logic xử lý
  useEffect(() => {
    if (!data?.data) return;

    const { content: newItems = [], totalPages = 1 } = data.data;
    
    console.log("Collection data:", {
      newItems: newItems.length,
      totalPages,
      requestedPage: page,
      hasMore: page < totalPages
    });

    // ✅ Sửa logic update items và track items mới
    if (page === 1) {
      setAllItems(newItems);
      newItemsStartIndexRef.current = 0; // Tất cả items đều mới
      animatedItemsRef.current.clear(); // Reset animated items
    } else {
      setAllItems(prevItems => {
        const prevLength = prevItems.length;
        newItemsStartIndexRef.current = prevLength;
        return [...prevItems, ...newItems];
      });
    }
    
    // Update pagination state
    const isLastPage = page >= totalPages;
    const hasNoMoreData = newItems.length === 0 || isLastPage;
    setHasMore(!hasNoMoreData);
    
    // Reset loading states
    setIsLoadingMore(false);
    isLoadingRef.current = false;
  }, [data, page]);

  // Infinite scroll with debounce
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const isNearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000;
        
        const canLoadMore = hasMore && !isLoading && !isLoadingMore && !isLoadingRef.current;
        
        if (isNearBottom && canLoadMore) {
          console.log("Loading next page:", page + 1);
          setIsLoadingMore(true);
          isLoadingRef.current = true;
          setPage(prev => prev + 1);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasMore, isLoading, isLoadingMore, page]);

  // Media item component
  const MediaItem = ({ item, index }) => {
    const fileType = getFileType(item.fileName);
    const mediaUrl = item.fileName ? config.API_MEDIA + item.fileName : "";
    
    // ✅ Detect browser để quyết định có dùng poster hay không
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isChromeAndroid = /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    
    // Chỉ dùng poster cho Safari, không dùng cho Chrome Android
    const posterUrl = fileType === "video" && isSafari && !isChromeAndroid 
      ? `${mediaUrl}?thumb=1` 
      : undefined;

    const handleVideoMouseEnter = (e) => {
      e.target.play().catch(console.log);
    };

    const handleVideoMouseLeave = (e) => {
      e.target.pause();
      e.target.currentTime = 0;
    };

    const handleClick = () => {
      setSelectedMedia(item);
      setIsModalOpen(true);
    };

    const handleError = (e) => {
      e.target.style.display = "none";
      const img = document.createElement("img");
      img.src = "";
      img.className = e.target.className;
      img.alt = "Fallback Image";
      e.target.parentNode.insertBefore(img, e.target);
    };

    // ✅ Sử dụng ref để track items đã animate
    const isNewItem = index >= newItemsStartIndexRef.current && !animatedItemsRef.current.has(item.id);
    const animationDelay = isNewItem ? Math.min((index - newItemsStartIndexRef.current) * 100, 500) : 0;

    // ✅ Mark item as animated sau khi component mount
    useEffect(() => {
      if (isNewItem) {
        animatedItemsRef.current.add(item.id);
      }
    }, [isNewItem, item.id]);

    return (
      <div 
        className={`rounded-xl group overflow-hidden relative cursor-pointer ${
          isNewItem ? 'animate-fade-in-scale' : ''
        }`}
        style={{
          animationDelay: isNewItem ? `${animationDelay}ms` : '0ms'
        }}
        onClick={handleClick}
      >
        {fileType === "image" ? (
          <img
            src={mediaUrl}
            alt="Media Item"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => { e.target.src = ""; }}
          />
        ) : (
          <video
            src={mediaUrl}
            poster={posterUrl}
            playsInline
            webkit-playsinline="true"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            muted loop preload="metadata"
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
            onError={handleError}
          />
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            { fileType === "video" &&
              (<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>)
            }
            <span className="text-white text-xl font-semibold">
              {fileType === "video" ? "Xem Video" : "Xem"}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Cải thiện loading state - hiển thị spinner thay vì text
  if (isLoading && page === 1) {
    return (
      <>
        <div className="background-header" />
        <div className="absolute top-[112px] w-full h-[488px] flex items-center justify-center">
          <div className="max-w-[1300px] mx-auto">
            <div className="font-mont flex flex-col items-center gap-8">
              <h1 className="text-4xl font-semibold text-white animate-fade-up">BỘ SƯU TẬP</h1>
              <div className="text-base text-gray-300 animate-fade-up animate-delay-200">
                <Link to="/">Trang chủ</Link> / <span>Bộ sưu tập</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-stone-950 py-15 max-lg:py-10">
          <div className="max-w-[1300px] mx-auto max-lg:px-8">
            <div className="flex justify-center items-center h-64">
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error && page === 1) {
    return (
      <>
        <div className="background-header" />
        <div className="absolute top-[112px] w-full h-[488px] flex items-center justify-center">
          <div className="max-w-[1300px] mx-auto">
            <div className="font-mont flex flex-col items-center gap-8">
              <h1 className="text-4xl font-semibold text-white">BỘ SƯU TẬP</h1>
              <div className="text-base text-gray-300">
                <Link to="/">Trang chủ</Link> / <span>Bộ sưu tập</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-stone-950 py-15 max-lg:py-10">
          <div className="max-w-[1300px] mx-auto max-lg:px-8">
            <div className="flex justify-center items-center h-64">
              <div className="text-white text-xl">Có lỗi xảy ra khi tải dữ liệu</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="background-header" />
      <div className="absolute top-[112px] w-full h-[488px] flex items-center justify-center">
        <div className="max-w-[1300px] mx-auto">
          <div className="font-mont flex flex-col items-center gap-8">
            <h1 className="text-4xl font-semibold text-white animate-fade-up">BỘ SƯU TẬP</h1>
            <div className="text-base text-gray-300 animate-fade-up animate-delay-200">
              <Link to="/">Trang chủ</Link> / <span>Bộ sưu tập</span>
            </div>
          </div>
        </div>
      </div>
      
      <section className="w-full bg-stone-950 py-15 max-lg:py-10">
        <div className="max-w-[1300px] mx-auto max-lg:px-8">
          {allItems.length > 0 ? (
            <>
          <Masonry 
          breakpointCols={breakpointColumnsObj} 
          className="flex gap-4"
                columnClassName="flex flex-col space-y-4"
              >
                {allItems.map((item, index) => (
                  <MediaItem key={item.id} item={item} index={index} />
                ))}
              </Masonry>
              
              {isLoadingMore && (
                <div className="flex justify-center items-center mt-8 animate-fade-in-once">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {!hasMore && allItems.length > 0 && (
                <div className="flex justify-center items-center mt-8 animate-fade-in-once">
                  <div className="text-gray-400 text-lg">Đã hiển thị tất cả nội dung</div>
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-center items-center h-64 animate-fade-in-once">
              <div className="text-white text-xl">Không có dữ liệu</div>
              </div>
          )}
        </div>
      </section>

      <MediaModal 
        isOpen={isModalOpen}
        selectedMedia={selectedMedia}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedMedia(null);
        }}
      />
    </>
  );
};