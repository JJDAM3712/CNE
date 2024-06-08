import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px text-base h-10">
        <li>
          <a onClick={() => currentPage > 1 && paginate(currentPage - 1)} class={`flex items-center justify-center px-4 h-10 ms-0 leading-tight ${currentPage === 1 ? 'text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg cursor-not-allowed' : 'text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer'}`}>Previous</a>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} class={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === number ? 'text-blue-600 border border-gray-300 bg-blue-50' : 'text-gray-500 bg-white border border-gray-300'} hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}>{number}</a>
          </li>
        ))}
        <li>
          <a onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)} class={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === pageNumbers.length ? 'text-gray-500 bg-white border border-gray-300 rounded-e-lg cursor-not-allowed' : 'text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer'}`}>Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;