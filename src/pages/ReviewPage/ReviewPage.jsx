import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom"
import Pagination from "../../components/Pagination/Pagination";
import ReviewSummary from "../../components/ReviewSummary/ReviewSummary";
import ReviewList from "../../components/ReviewList/ReviewList";

function ReviewPage() {

  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(function() {
    console.log("ReviewPage :: useEffect ::", searchParams.get("rating"));
    const searchRating = parseInt(searchParams.get("rating"));

    fetch(`${window.location.origin}/mock-data/reviews/${id}.json`)
      .then(response => response.json())
      .then(data => setReviews(searchRating ? data.filter(elem => elem.rating === searchRating) : data))
      .catch(setReviews([]));

  }, [id, searchParams]);

  useEffect(function() {

   
  }, [searchParams]);

  return (
    <div style={{
      padding: "50px 20px"
    }}>
      <ReviewSummary/>
      <br /><br />
      <ReviewList reviews={reviews}/>
      <br /><br />
      <Pagination/>
    </div>
  );
}

export default ReviewPage;