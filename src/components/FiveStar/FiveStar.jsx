import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import "./FiveStar.css";

function FiveStar({ rating=0 }) {

  return (
    <div className="FiveStar__container-5-star">
      {[1, 2, 3, 4, 5].map((i) => {
          if (i <= rating) return <StarIcon key={i}/>
          if ((i - 1) < rating && rating < i) return <StarHalfIcon key={i}/>
          if (i > rating) return <StarBorderIcon key={i}/>
        }
      )}
    </div>
  );
}

export default FiveStar;