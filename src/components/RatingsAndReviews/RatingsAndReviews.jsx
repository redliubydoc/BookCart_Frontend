import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewSummary from "../ReviewSummary/ReviewSummary";
import ReviewList from "../ReviewList/ReviewList";

import "./RatingsAndReviews.css";

function RatingsAndReviews({ id, isbn }) {

  const [reviews, setReviews] = useState([]);

  useEffect(function() {

    fetch(`${window.location.origin}/mock-data/reviews/${isbn}.json`)
      .then(response => response.json())
      .then(data => setReviews(data.slice(0, 10)))
      .catch((e) => setReviews([]));
        
  }, [isbn]);

  return (
    <div id={id} className="RatingsAndReviews__container-ratings">
      <div className="RatingsAndReviews__container-ratings-header">
        <div className="RatingsAndReviews__header">Ratings & Reviews</div>
        <div className="RatingsAndReviews__header-separator"></div>
        {(reviews.length > 0) && <ReviewSummary/>}
        {(reviews.length === 0) && "No Reviews Found"}
      </div>
      {(reviews.length > 0) && <ReviewList reviews={reviews}/>}
      {(reviews.length > 0) &&
        <div className="RatingsAndReviews__footer link-typ-1">
          <Link to={`/product/${isbn}/review`}>Show All Reviews</Link>
        </div>
      }
    </div>
  );
}

export default RatingsAndReviews;