import { useDispatch, useSelector } from "react-redux";
import { setOffset } from "../../store/actions/productActions";

const Pagination = () => {
  const { limit, total, offset } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(total / limit);
  const page = Math.floor(offset / limit) + 1;
  const startPage = Math.max(1, Math.min(page - 1, totalPages - 2));
  const visiblePages = Array.from(
    { length: Math.min(3, totalPages) },
    (_, index) => startPage + index,
  );

  const pageButtonClass =
    "h-full w-11.5 border-r border-gray-light-2 text-small font-bold transition-colors cursor-pointer";

  const goToPage = (targetPage) => {
    dispatch(setOffset((targetPage - 1) * limit));
  };

  if (totalPages === 0) return null;

  return (
    <div className="mt-12 flex h-12 overflow-hidden rounded-md border border-gray-light-2 bg-bg-light shadow-light">
      <button
        type="button"
        onClick={() => goToPage(1)}
        disabled={page === 1}
        className={`h-full border-r border-gray-light-2 px-4 text-small font-bold transition-colors ${page === 1 ? "bg-gray-light-1 text-muted" : "cursor-pointer text-primary hover:bg-gray-light-2"}`}
      >
        First
      </button>

      <div className="flex h-full">
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => goToPage(pageNumber)}
            className={`${pageButtonClass} ${page === pageNumber ? "bg-primary text-text-light" : "text-primary hover:bg-gray-light-2"}`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages}
        className={`h-full px-4 text-small font-bold transition-colors ${page === totalPages ? "bg-gray-light-1 text-muted" : "cursor-pointer text-primary hover:bg-gray-light-2"}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
