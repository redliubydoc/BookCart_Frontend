import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom"
import ReviewSummary from "../../components/ReviewSummary/ReviewSummary";
import ReviewList from "../../components/ReviewList/ReviewList";
import NumberedPagination from "../../components/NumberedPagination/NumberedPagiation";
import Dropdown from "../../components/Dropdown/Dropdown";
import ReplyIcon from "@mui/icons-material/Reply";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import "./ReviewPage.css";

function ReviewPage() {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(function () {
    console.log("ReviewPage :: useEffect");

    const searchRating = parseInt(searchParams.get("rating"));
    const searchSortBy = searchParams.get("sort_by");
    const searchPg = parseInt(searchParams.get("pg")) > 0 ? parseInt(searchParams.get("pg")) : 1;
    const searchPgLimit = 10;

    setLoading(() => {
     
      window.setTimeout(() => {
        
        fetch(`${window.location.origin}/mock-data/reviews/${id}.json`)
          .then(response => response.json())
          .then(data => {

            const page = {
              items: data,
              offset: searchPgLimit,
              page: searchPg,
              items_count: data.length,
              page_count: Math.ceil(data.length / searchPgLimit)
            };

            if (searchSortBy === "RNR_LH") {

              data = data.sort((reviewOne, reviewTwo) => reviewOne.rating - reviewTwo.rating);

              page.items = data;
              page.items_count = data.length;
              page.page = searchPg;
              page.page_count = Math.ceil(data.length / searchPgLimit);
            }

            if (searchSortBy === "RNR_HL") {

              data = data.sort((reviewOne, reviewTwo) => reviewTwo.rating - reviewOne.rating);

              page.items = data;
              page.items_count = data.length;
              page.page = searchPg;
              page.page_count = Math.ceil(data.length / searchPgLimit);
            }

            if (searchRating) {

              data = data.filter(elem => elem.rating === searchRating);

              page.items = data;
              page.items_count = data.length;
              page.page = searchPg;
              page.page_count = Math.ceil(data.length / searchPgLimit);
            }

            if (searchPg) {

              data = data.slice((searchPg - 1) * searchPgLimit, searchPg * searchPgLimit);

              page.items = data;
              page.page = searchPg;
            }

            console.log(page);
            setReviews(() => {
              setLoading(false);
              return { ...page };
            });
          }).catch(() => setReviews([]));
      }, 1000);

      return true;
    });

    

  }, [id, searchParams]);

  const onSelect = useCallback(
    (item) => setSearchParams(item.value === "ALL" ? {} : { sort_by: item.value }), [setSearchParams]
  );

  function onPagination(pageNo) {
    setSearchParams((searchParams) => {
      const newSearchParams = {};

      for (const searchParam of searchParams) newSearchParams[searchParam[0]] = searchParam[1];
      newSearchParams["pg"] = pageNo;
      return newSearchParams;
    });
  }

  function getDropdownItems() {
    return [
      { value: "ALL", text: "All" },
      { value: "RNR_HL", text: "Positive First" },
      { value: "RNR_LH", text: "Negative First" }
    ];
  }

  function getDefaultDropdownItem() {

    switch(searchParams.get("sort_by")) {

      case "RNR_HL": return { value: "RNR_HL", text: "Positive First" };
      case "RNR_LH": return { value: "RNR_LH", text: "Negative First" };
      default: return { value: "ALL", text: "All" }
    }
  }

  return (
    <div className="ReviewPage__container-page-review">
      <div className="ReviewPage__container-page-review-header">
        <div className="ReviewPage__page-review-header">Ratings & Reviews</div>
        <div className="ReviewPage__page-review-header-separator"></div>
        <div className="ReviewPage__page-review-header-content">
          <ReviewSummary />
          <Dropdown className="dropdown" 
            defaultItem={getDefaultDropdownItem} 
            onSelect={onSelect} 
            items={getDropdownItems()} />
        </div>
        <div className="ReviewPage__page-review-header-back link-typ-1">
          <Link to={`/product/${id}`}><ReplyIcon className="ico" /></Link>
        </div>
      </div>
      <ReviewList reviews={reviews.items ? reviews.items : []} />
      <div className="ReviewPage__page-review-container-footer">
        <NumberedPagination currentPage={reviews.page ? reviews.page : 1} noOfPages={reviews.page_count} onPagination={onPagination} />
      </div>

      <Backdrop open={loading}> 
        <CircularProgress color="inherit" /> 
      </Backdrop>
    </div>
  );
}

export default ReviewPage;