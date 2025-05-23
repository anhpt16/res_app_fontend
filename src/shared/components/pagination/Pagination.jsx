import React from "react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const generatePageNumbers = () => {
      const pages = [];
  
      // Hiển thị tối đa 5 trang gần currentPage
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, currentPage + 2);
  
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
  
      return pages;
    };
  
    return (
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-stone-900 cursor-pointer rounded hover:bg-stone-700 disabled:opacity-50"
        >
          <img className="w-3 h-6" src="/icons/i_prev.svg" alt="Prev Button" />
        </button>
  
        {generatePageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
            className={`px-3 py-1 text-base rounded cursor-pointer ${
              page === currentPage ? 'bg-amber-500 text-white cursor-default!' : 'bg-stone-900 hover:bg-stone-700 text-white'
            }`}
          >
            {page}
          </button>
        ))}
  
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-stone-900 rounded cursor-pointer hover:bg-stone-700 disabled:opacity-50"
        >
          <img className="w-3 h-6" src="/icons/i_next.svg" alt="Prev Button" />
        </button>
      </div>
    );
  };