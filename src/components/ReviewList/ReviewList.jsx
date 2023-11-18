import Review from "../Review/Review";

function ReviewList({ reviews }) {

  return (<>
    <div className="card text-dark">
      {
        reviews.map((review, i) => <Review key={i} review={review}/>)
      }
    </div>
  </>);
}

export default ReviewList;
