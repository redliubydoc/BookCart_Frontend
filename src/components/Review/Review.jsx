import moment from "moment";
import FiveStar from "../FiveStar/FiveStar";

import "./Review.css";

function Review({ review }) {
  return (

    <div className="Review__review">
      <div className="Review__header">
        <div className="Review__reviewer-header-left-sec">
          <img className="Review__reviewer-img"  
            src={`https://ui-avatars.com/api/?name=${review.username}`} alt=""/>
        </div>

        <div className="Review__reviewer-header-right-sec">
          <div>
            <div className="Review__reviewer-unm">{review.username}</div>
            <div className="Review__date"><small><i>{moment(review.date).format('MMMM D, YYYY')}</i></small></div>
          </div>
          <div className="Review__rating">
            <FiveStar rating={review.rating}/>
          </div>
        </div>
      </div>

      {/* <div className="Review__reviewer-separator"></div> */}

      <div className="Review__body"> 
        <p> {review.comment} </p>
      </div>
    </div>
  );
}

export default Review