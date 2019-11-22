import React, { useState } from "react";
import Page from "./Page";

export default function Pages({ children, validatePage}) {
  const [currentPage, setCurrentPage] = useState(0);

  const setPage = (e, direction) => {
    e.preventDefault();
    if (direction === "LEFT") {
      setCurrentPage(currentPage + 1);
    }
    if (direction === "RIGHT") {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="Pages">
      <div className="Pages-Container">
        {children.map((child, i) => {
          const { id } = child.props;
          return (
            <Page key={id} show={currentPage === i}>
              {child}
            </Page>
          );
        })}
      </div>
      <div className="Pagination">
        <button
          className={
            "Pagination-Button Pagination-Button--back" +
            (currentPage < 1 ? " Pagination-Button--hidden" : "")
          }
          onClick={e => setPage(e, "RIGHT")}
          disabled={!validatePage(currentPage - 1)}
        >
          Back
        </button>
        <button
          className={
            "Pagination-Button Pagination-Button--next" +
            (currentPage >= children.length -1 ? " Pagination-Button--hidden" : "")
          }
          onClick={e => setPage(e, "LEFT")}
          disabled={!validatePage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
