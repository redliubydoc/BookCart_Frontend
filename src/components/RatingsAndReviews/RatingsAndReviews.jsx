import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ReviewSummary from "../ReviewSummary/ReviewSummary";
import ReviewList from "../ReviewList/ReviewList";
import Pagination from "../Pagination/Pagination";

import "./RatingsAndReviews.css";

function RatingsAndReviews({ id, isbn }) {

  const [reviews, setReviews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(function() {

    fetch(`${window.location.origin}/mock-data/reviews/${isbn}.json`)
      .then(response => response.json())
      .then(data => setReviews(data.slice(0, 10)))
      .catch(setReviews([]));
        
  }, [isbn]);

  return (
    <div id={id} className="RatingsAndReviews__container-ratings">
      <div className="RatingsAndReviews__container-ratings-header">
        <div className="RatingsAndReviews__header">Ratings & Reviews</div>
        <div className="ProductCatalog__product-details-separator"></div>
        {(reviews.length > 0) && <ReviewSummary/>}
        {(reviews.length === 0) && "No Reviews Found"}
      </div>
      {(reviews.length > 0) && <ReviewList reviews={reviews}/>}
      <Link to={`/product/${isbn}/review`}>Show All Reviews</Link>
      {/* {(reviews.length > 0) && <Pagination className={"RatingsAndReviews__pagination"}/>} */}
    </div>
  );
}

export default RatingsAndReviews;