interface Props {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<
    React.SetStateAction<number>
  >;
}

function Pagination({
  page,
  totalPages,
  setPage,
}: Props) {

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="
      flex
      items-center
      justify-center
      gap-6
      mt-8
    ">

      <button
        disabled={page === 1}
        onClick={() =>
          setPage((prev) => prev - 1)
        }
        className={`
          px-5
          py-2
          rounded-lg
          text-white
          font-medium
          transition
          ${
            page === 1
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }
        `}
      >
        Previous
      </button>

      <span className="
        text-lg
        font-semibold
        text-gray-700
      ">

        Page {page} of {totalPages}

      </span>

      <button
        disabled={
          page === totalPages
        }
        onClick={() =>
          setPage((prev) => prev + 1)
        }
        className={`
          px-5
          py-2
          rounded-lg
          text-white
          font-medium
          transition
          ${
            page === totalPages
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }
        `}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;