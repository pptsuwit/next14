interface Pagination {
  pagination: IPagination;
  setCurrentPage: (page: number) => void;
}
export default function Pagination(props: Pagination) {
  const {
    currentPage = 1,
    recordPerPage = 1,
    totalPage = 0,
    totalRecord = 0,
  } = props.pagination;
  let item = [];

  let endPage = Math.floor(totalRecord / recordPerPage);

  const handlePreviousPage = () => {
    if (currentPage === 1) return;
    props.setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage === totalPage) return;
    props.setCurrentPage(currentPage + 1);
  };
  const handleCurrnetPage = (page: number) => {
    if (currentPage === totalPage) return;
    props.setCurrentPage(page);
  };
  const getLenghtPage = () => {
    if (currentPage == 1) return 5;
    return 3 + currentPage;
  };
  const getStartPage = () => {
    if (
      currentPage == 1 ||
      currentPage == 2 ||
      currentPage - 1 === endPage ||
      currentPage === endPage
    ) {
      return currentPage;
    }

    return currentPage - 2;
  };

  let startPage = getStartPage();

  const skipPage = (page: number) => {
    // if (page === 1 || page === endPage) return false;

    // if (page - 2 === 1) return false;
    return false;
  };
  let lengthPage = getLenghtPage();

  for (let index = startPage; index <= lengthPage; index++) {
    item.push(
      <li key={index}>
        {skipPage(index) ? (
          <div className="mx-2">...</div>
        ) : (
          <button
            onClick={() => handleCurrnetPage(index)}
            type="button"
            className={`font-medium rounded-full text-sm text-center inline-flex items-center h-10 w-10 mx-1 border
           ${
             currentPage === index
               ? "text-white bg-blue-700 border-blue-700"
               : "text-gray-500 bg-white border-gray-300 hover:bg-blue-700 hover:text-white"
           }`}
          >
            <span className="overflow-ellipsis mx-auto">{index}</span>
          </button>
        )}
      </li>
    );
  }

  return (
    <>
      <nav className="bg-red-50 flex justify-center my-2 w-full px-6">
        <ul className="flex items-center -space-x-px h-10 text-base">
          {currentPage !== 1 && (
            <>
              <li>
                <button
                  onClick={handlePreviousPage}
                  type="button"
                  className={`bg-white font-medium rounded-full text-sm flex items-center justify-center h-10 w-10 mx-1  border text-gray-500 border-gray-300 hover:bg-blue-700 hover:text-white`}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCurrnetPage(1)}
                  type="button"
                  className={`font-medium rounded-full text-sm text-center inline-flex items-center h-10 w-10 mx-1 border
                  ${
                    currentPage === 1
                      ? "text-white bg-blue-700 border-blue-700"
                      : "text-gray-500 bg-white border-gray-300 hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  <span className="overflow-ellipsis mx-auto">1</span>
                </button>
              </li>
            </>
          )}

          {item}
          {currentPage !== endPage && (
            <>
              <li>
                <button
                  onClick={() => handleCurrnetPage(1)}
                  type="button"
                  className={`font-medium rounded-full text-sm text-center inline-flex items-center h-10 w-10 mx-1 border
                  ${
                    currentPage === endPage
                      ? "text-white bg-blue-700 border-blue-700"
                      : "text-gray-500 bg-white border-gray-300 hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  <span className="overflow-ellipsis mx-auto">{endPage}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleNextPage}
                  type="button"
                  className={`bg-white font-medium rounded-full text-sm flex items-center justify-center h-10 w-10 mx-1  border text-gray-500 border-gray-300 hover:bg-blue-700 hover:text-white`}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
