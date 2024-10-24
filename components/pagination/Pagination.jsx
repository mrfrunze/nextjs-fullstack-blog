import React from 'react';

// Функция для создания страниц с точками
function getPaginationPages(currentPage, totalPages) {
  const delta = 2; // Количество страниц до и после текущей
  const range = [];
  const rangeWithDots = [];
  let lastPage;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
      range.push(i);
    }
  }

  range.forEach((page) => {
    if (lastPage) {
      if (page - lastPage === 2) {
        rangeWithDots.push(lastPage + 1);
      } else if (page - lastPage !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(page);
    lastPage = page;
  });

  return rangeWithDots;
}

const Pagination = ({ currentPage, totalPages }) => {
  // Получаем список страниц с помощью функции
  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <div className="flex justify-center mt-10">
      {/* Кнопка Previous */}
      {currentPage > 1 && (
        <a
          href={`?page=${currentPage - 1}`}
          className="bg-gray-300 text-black py-2 px-4 mx-1 rounded hover:bg-gray-400"
        >
          &larr; Previous
        </a>
      )}

      {/* Кнопки для страниц */}
      {pages.map((p, index) => (
        <a
          key={index}
          href={`?page=${p}`}
          className={`py-2 px-4 mx-1 rounded ${
            p === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'
          }`}
        >
          {p}
        </a>
      ))}

      {/* Кнопка Next */}
      {currentPage < totalPages && (
        <a
          href={`?page=${currentPage + 1}`}
          className="bg-gray-300 text-black py-2 px-4 mx-1 rounded hover:bg-gray-400"
        >
          Next &rarr;
        </a>
      )}
    </div>
  );
};

export default Pagination;
