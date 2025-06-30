import React, { useEffect, useState } from "react";
import { getFileType } from "../../../../shared/utils/utils";
import config from "../../../../shared/utils/env";

export const MediaModal = ({ 
  isOpen, 
  selectedMedia, 
  onClose 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // ✅ Cải thiện xử lý scrollbar và padding
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      
      // ✅ Tính toán scrollbar width trước khi ẩn scroll
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // ✅ Lưu trạng thái scroll hiện tại
      const scrollY = window.scrollY;
      
      // ✅ Ẩn scroll và thêm padding để tránh layout shift
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      
      // Trigger animation in
      setTimeout(() => setIsAnimating(true), 10);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      
      // ✅ Khôi phục scroll và vị trí
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      
      // ✅ Khôi phục vị trí scroll
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    };
  }, [isOpen]);

  // Xử lý đóng modal với animation
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300); // Đợi animation kết thúc
  };

  // Xử lý click ngoài modal để đóng
  const handleModalBackdropClick = (e) => {
    // Chỉ đóng khi click vào backdrop, không phải content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!selectedMedia || !isOpen) return null;

  const fileType = getFileType(selectedMedia.fileName);
  const mediaUrl = selectedMedia.fileName ? config.API_MEDIA + selectedMedia.fileName : "";
  const altText = selectedMedia.title || selectedMedia.name || "Media Item";

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer ${
        isAnimating 
          ? 'bg-black/60 backdrop-blur-sm' 
          : 'bg-black/0 backdrop-blur-none'
      }`}
    >
      {/* Modal content */}
      <div 
        className={`relative w-full h-full flex items-center justify-center p-4 transition-all duration-300 ease-out transform ${
          isAnimating 
            ? 'scale-100 opacity-100' 
            : 'scale-95 opacity-0'
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className={`absolute top-4 right-4 text-white hover:text-gray-300 transition-all duration-200 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 backdrop-blur-sm ${
            isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Media content container */}
        <div 
          className={`w-full h-full flex items-center justify-center transition-all duration-300 ease-out ${
            isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
          onClick={handleModalBackdropClick}
        >
          {fileType === "image" ? (
            <img
              src={mediaUrl}
              alt={altText}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 ease-out"
              style={{
                maxWidth: '95vw',
                maxHeight: '95vh',
                width: 'auto',
                height: 'auto'
              }}
              onError={(e) => {
                // Ẩn ảnh và hiển thị nội dung alt
                e.target.style.display = 'none';
                const altDiv = document.createElement('div');
                altDiv.className = "flex items-center justify-center bg-gray-100 rounded-lg shadow-2xl text-gray-600 text-lg font-medium p-8 text-center max-w-[95vw] max-h-[95vh]";
                altDiv.style.maxWidth = '95vw';
                altDiv.style.maxHeight = '95vh';
                altDiv.style.width = 'auto';
                altDiv.style.height = 'auto';
                altDiv.textContent = altText;
                e.target.parentNode.insertBefore(altDiv, e.target);
              }}
            />
          ) : (
            <video
              src={mediaUrl}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 ease-out"
              style={{
                maxWidth: '95vw',
                maxHeight: '95vh',
                width: 'auto',
                height: 'auto'
              }}
              controls
              autoPlay
              onError={(e) => {
                console.log('Modal video load error:', e);
                // Ẩn video và hiển thị nội dung alt
                e.target.style.display = 'none';
                const altDiv = document.createElement('div');
                altDiv.className = "flex items-center justify-center bg-gray-100 rounded-lg shadow-2xl text-gray-600 text-lg font-medium p-8 text-center max-w-[95vw] max-h-[95vh]";
                altDiv.style.maxWidth = '95vw';
                altDiv.style.maxHeight = '95vh';
                altDiv.style.width = 'auto';
                altDiv.style.height = 'auto';
                altDiv.textContent = altText;
                e.target.parentNode.insertBefore(altDiv, e.target);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};