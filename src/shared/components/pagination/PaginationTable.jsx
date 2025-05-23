import React from "react";
import { TableFirstIcon, TablePrevIcon, TableNextIcon, TableLastIcon } from "../../utils/icons/Icons";


export const PaginationTable = ({ currentPage, totalPages, onPageChange }) => {
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
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="w-[32px] h-[32px] flex items-center justify-center bg-gray-200 cursor-pointer rounded transition hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:cursor-default"
        >
          <TableFirstIcon className="w-4 h-4"/>
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-[32px] h-[32px] flex items-center justify-center bg-gray-200 cursor-pointer rounded transition hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:cursor-default"
        >
          <TablePrevIcon className="w-2 h-2"/>
        </button>
  
        {generatePageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
            className={`w-[32px] h-[32px] text-base rounded cursor-pointer ${
              page === currentPage ? "bg-amber-500 text-white cursor-default!" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
  
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-[32px] h-[32px] flex items-center justify-center bg-gray-200 rounded cursor-pointer transition hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:cursor-default"
        >
          <TableNextIcon className="w-2 h-2"/>
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-[32px] h-[32px] flex items-center justify-center bg-gray-200 rounded cursor-pointer transition hover:bg-gray-300 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:cursor-default"
        >
          <TableLastIcon className="w-4 h-4"/>
        </button>
      </div>
    );
  };