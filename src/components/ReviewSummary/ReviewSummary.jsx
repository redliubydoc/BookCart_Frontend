import { Link, useLocation, useParams } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import FiveStar from "../FiveStar/FiveStar";
import StarIcon from "@mui/icons-material/Star";

import "./ReviewSummary.css";

const graphFillColor = {
  1: "red", 
  2: "orange", 
  3: "green", 
  4: "green", 
  5: "green"
};

function ReviewSummary({ reviewSummary }) {

  reviewSummary = {
    averageRating: 4.2,
    review_count: 92,
    rating_count: {
      0: 981,
      1: 50, 
      2: 155, 
      3: 145, 
      4: 181, 
      5: 450
    }
    
  };

  const { id } = useParams();

  return (
    <div className="ReviewSummary__container-review-summary">
        <div className="ReviewSummary__left-sec">
          <span className="ReviewSummary__avg-rating">{reviewSummary.averageRating}</span>
          <Link to={`/product/${id}/review`}>
            <div className="ReviewSummary__container-reviews-ratings">
              <span>{reviewSummary.rating_count[0]} Ratings &</span>
              <span>{reviewSummary.review_count} Reviews</span>
            </div>
          </Link>
        </div>
        <div className="ReviewSummary__right-sec">
          {
            [5, 4, 3, 2, 1].map((i) => 
              <div key={i} className="ReviewSummary__container-review-graph">
                <Link to={`/product/${id}/review?rating=${i}`} className="ReviewSummary__review-star">
                  <span>{i}</span>
                  <span>★</span>
                </Link>
                <div className="ReviewSummary__review-graph">
                  <div className="ReviewSummary__graph-bar">
                    <div className="ReviewSummary__graph-fill" style={{
                      backgroundColor: graphFillColor[i],
                      transform: `translateX(calc(-100% + ${(reviewSummary.rating_count[i] / reviewSummary.rating_count[0]) * 100}%))`
                    }}></div>
                  </div>
                </div>
                <div className="ReviewSummary__review-count">{reviewSummary.rating_count[i]}</div>
              </div>
            )
          }
        </div>
    </div>
  );
}

export default ReviewSummary;

