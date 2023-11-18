import React from "react";

import "./NumberedPagination.css";

function NumberedPagination({ id, className, noOfPages=0, currentPage, onPagination }) {
  return (
    <nav id={id} className={"NumberedPagination__container-pagination" + (className ? ` ${className}` : ``)}>
      <ul className="NumberedPagination__pagination">
        {
          [...Array(noOfPages)].map((_, i) => 
            <li key={i} onClick={() => onPagination(i + 1)} 
              className={"NumberedPagination__pagination-action" + (currentPage === (i + 1) ? " active" : "")}>
              <span> {i + 1} </span>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default NumberedPagination;