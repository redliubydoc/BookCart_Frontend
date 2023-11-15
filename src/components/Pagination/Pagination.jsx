import React from "react";
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import FirstPageTwoToneIcon from '@mui/icons-material/FirstPageTwoTone';
import LastPageTwoToneIcon from '@mui/icons-material/LastPageTwoTone';

import "./Pagination.css";

function Pagination({ id, className, onPrv, onNxt, onFst, onLst }) {
  return (
    <nav id={id} className={"Pagination__container-pagination" + (className ? ` ${className}` : ``)}>
      <ul className="Pagination__pagination">
        <li className="Pagination__pagination-action" onClick={onFst}>
          <FirstPageTwoToneIcon/>
        </li>
        <li className="Pagination__pagination-action" onClick={onPrv}>
          <KeyboardArrowLeftTwoToneIcon/>
        </li>
        <li className="Pagination__pagination-action" onClick={onNxt}>
          <KeyboardArrowRightTwoToneIcon/>
        </li>
        <li className="Pagination__pagination-action" onClick={onLst}>
          <LastPageTwoToneIcon/>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;