import React, { useEffect, useState } from "react";

interface Blogs {
  id: number;
  name: string;
  age: number;
  location: string;
  rating: number;
  imageUrl: string;
  verificationIcon: string;
  liked: boolean;
  newbadge: boolean;
  isFeatured?: boolean;
  isVerified?: boolean;
}

interface PaginationProps {
  onCurrentArticlesChange: (currentArticles: Blogs[]) => void;
  blogs: Blogs[];
}

const Pagination: React.FC<PaginationProps> = ({ onCurrentArticlesChange, blogs }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentArticles = blogs.slice(startIndex, startIndex + itemsPerPage);
    onCurrentArticlesChange(currentArticles);
  }, [currentPage, blogs]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center space-x-2 my-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "border-2 border-red-500 bg-transparent text-red-500 hover:bg-red-100"
            : "border-2 border-red-500 bg-transparent text-red-500 hover:bg-gray-300"
        }`}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === index + 1
              ? "bg-red-500 text-white"
              : "border-2 border-red-500 bg-transparent text-red-500 hover:bg-red-100 hover:bg-gray-300"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "cursor-not-allowed border-2 border-red-500 bg-transparent text-red-500 hover:bg-red-100"
            : "border-2 border-red-500 bg-transparent text-red-500 hover:bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
