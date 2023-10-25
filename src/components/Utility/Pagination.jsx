import ReactPaginate from "react-paginate";

const Pagination = () => {
  const handlePageClick = () => {};
  return (
    <div className="flex justify-end">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={5}
        previousLabel="<"
        containerClassName={" flex  text-[20px] "}
        pageClassName={"text-white mx-2"}
        pageLinkClassName={"text-white"}
        previousClassName={"text-white"}
        nextClassName={"text-white"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"text-[25px]"}
      />
    </div>
  );
};

export default Pagination;
