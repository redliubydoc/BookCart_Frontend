import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import moment from "moment";

import "./ProductCatalog.css";
import RatingsAndReviews from "../RatingsAndReviews/RatingsAndReviews";
import FiveStar from "../FiveStar/FiveStar";
import { Utils } from "../../utils";

function ProductCatalog({ book }) {

  return (
    <div className="ProductCatalog__container-product-catalog">
      <div className="ProductCatalog__container-product-card">
        <img className="ProductCatalog__card-img" src={book.thumbnail} alt="thumbnail"/>
        <button className="ProductCatalog__card-btn">add to cart</button>
      </div>
      <div>
        <div className="ProductCatalog__container-product-details">
          <span className="ProductCatalog__book-title">{book.title}</span>
          <span className="ProductCatalog__book-author">
            by <Link className="ProductCatalog__book-author-link">{book.author}</Link>
          </span> 
          <span className="ProductCatalog__container-book-rating">
            <HashLink className="ProductCatalog__book-rating-count"
              to="#rating-review-section" 
              scroll={elem => Utils.scrollToTargetAdjusted(elem, 70)}>192 Ratings</HashLink>
            <span className="ProductCatalog__book-rating-separator">|</span>
            <FiveStar rating={4.5}/>
          </span>
          <span className="ProductCatalog__book-price"> ₹ 12000 </span>

          <div className="ProductCatalog__product-details-separator"></div>
          <p className=".tmp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam amet voluptas commodi, culpa dolores temporibus, dicta sed ducimus architecto repudiandae alias! Ad ex, laborum voluptatem id deleniti praesentium porro natus.
          Optio facilis adipisci aspernatur dicta corporis in debitis, id placeat asperiores perferendis! Ullam ad placeat, nihil ducimus consequuntur beatae in, repudiandae omnis autem maiores reprehenderit corporis eveniet doloremque officiis debitis.
          Corrupti rerum repellendus quaerat eum. Voluptates optio perspiciatis repellat ducimus, obcaecati perferendis suscipit odit repudiandae adipisci asperiores. Voluptatibus illo iusto ut minus molestiae asperiores ad accusamus necessitatibus, quo deleniti delectus?
          Magnam modi sint aliquam quisquam aut repellendus? Officiis nulla quasi aut dolore asperiores fugiat, sunt explicabo distinctio at quibusdam repellendus quis magnam! Tenetur sit quia ullam pariatur voluptates, voluptatem obcaecati?
          Dignissimos officia nesciunt cumque alias et exercitationem optio aspernatur debitis accusamus, excepturi quam ullam accusantium sequi sunt delectus totam libero. Error maxime suscipit ad distinctio iure minima laudantium at ipsum!</p>
        </div>
        
        <section className="Product__section-product-specification">
          <div className="ProductCatalog__container-product-details">
            <span className="ProductCatalog__book-title">Specifications</span>

            <div className="ProductCatalog__product-details-separator"></div>

            <table className="product-specifications">
              <tbody>
                <tr>
                  <td className="col-specification-label">
                    <span>ISBN</span>
                  </td>
                  <td className="col-specification-value">
                    <span>{book.isbn}</span>  
                  </td>
                </tr>
                <tr>
                  <td className="col-specification-label">
                    <span>Title</span>
                  </td>
                  <td className="col-specification-value">
                    <span>{book.title}</span>  
                  </td>
                </tr>
                <tr>
                  <td className="col-specification-label">
                    <span>Author</span>
                  </td>
                  <td className="col-specification-value">
                    <span><Link className="link">{book.author}</Link></span>  
                  </td>
                </tr>
                <tr>
                  <td className="col-specification-label">
                    <span>Date of Release</span>
                  </td>
                  <td className="col-specification-value">
                    <span>{moment("01/09/1999").format('MMMM D, YYYY')}</span>  
                  </td>
                </tr>
                <tr>
                  <td className="col-specification-label">
                    <span>Edition</span>
                  </td>
                  <td className="col-specification-value">
                    <span>1 st</span>  
                  </td>
                </tr>
                <tr>
                  <td className="col-specification-label">
                    <span>Language</span>
                  </td>
                  <td className="col-specification-value">
                    <span>English</span>  
                  </td>
                </tr>
                <tr>
                  <td className="col-specification-label">
                    <span>Genres</span>
                  </td>
                  <td className="col-specification-value">
                    <span>
                      <Link className="link">#Drama</Link> 
                      <Link className="link">#Horror</Link> 
                      <Link className="link">#Advenrture</Link> 
                    </span>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section id="rating-review-section" className="Product__section-product-reviews">
          <RatingsAndReviews id={"rating-review-section"} isbn={book.isbn}/>
        </section>
        
      </div>
    </div>
  );
}

export default ProductCatalog;