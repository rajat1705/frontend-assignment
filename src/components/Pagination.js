import React from "react";

import styles from "./component.module.css";

const Pagination = (props) => {
  const {
    totalRecords,
    resultsPerPage,
    page,
    pageOptions,
    onChangePage,
    onChangeResultsPerPage,
  } = props;

  const totalPages = Math.ceil(totalRecords / resultsPerPage);

  const startPg = Math.max(1, Math.min(page - 5, totalPages - 9));

  const endPg = Math.min(startPg + 9, totalPages);

  const handlePrevClick = () => onChangePage(page - 1);

  const handleNextClick = () => onChangePage(page + 1);

  const handleSelectPage = (selectedPage) => () => onChangePage(selectedPage);

  const handleChangeResultsPerPage = (e) =>
    onChangeResultsPerPage(e?.target?.value);

  return (
    <div className={styles.page_selection}>
      <select value={resultsPerPage} onChange={handleChangeResultsPerPage}>
        {pageOptions.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
      <button onClick={handlePrevClick} disabled={page === startPg}>
        Prev
      </button>
      {Array(endPg - startPg + 1)
        .fill()
        .map((_, index) => (
          <button
            key={startPg + index}
            onClick={handleSelectPage(startPg + index)}
            className={`${page === startPg + index && styles.selected_page}`}
          >
            {startPg + index}
          </button>
        ))}
      <button onClick={handleNextClick} disabled={page === endPg}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
