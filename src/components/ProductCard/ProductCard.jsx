import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ isbn, thumbnail, price }) {

  return (
    <div className="product-card">
      <Link to={`/product/${isbn}`}>
        <img className="card-img" src={thumbnail} alt="thumbnail"/>
      </Link>
      <button className="card-btn">
        <span className="btn-text">Rs {price}</span>
        <AddShoppingCartIcon className="btn-icon"/>    
      </button>
    </div>
  );
}

export default ProductCard;