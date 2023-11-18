import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Pagination from "../../components/Pagination/Pagination";

import "./Home.css";

function Home() {

  const [books, setBooks] = useState([]);

  useEffect(function () {

    fetch(`${window.location.origin}/mock-data/books.json`)
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);


  return (
    <div className="Home__container-home">
        <FilterPanel className={"Home__home-filter-panel"}/>

        <div className="Home__container-main">
          <div className="Home__home-header">
            <span className="Home__header-result">
              <small>{books.length > 0 ? `1 - 20 of 100 results` : `No result found`}</small>
            </span>
      
            <Dropdown  className="Home__header-dropdown"
              defaultItem={{ value: "all", text: "All" }}
              onSelect={() => {}}
              items={[
                { value: "PRICE_LH", text: "Price (Low to High)" },
                { value: "PRICE_HL", text: "Price (High to Low)" },
                { value: "RATING", text: "Rating" },
                { value: "RELEASE_DT", text: "Date of Release" },
              ]}>
            </Dropdown>
          </div>

          <div className="Home__home-product-list">
            { 
              books.map(book =>
                <ProductCard
                  key={book.isbn}
                  isbn={book.isbn}
                  thumbnail={book.thumbnail}
                  price={book.price}>
                </ProductCard>
              )
            }
          </div>

          <div className="Home__home-pagination">
            <Pagination onFst={() => console.log("first page")}
              onLst={() => console.log("last page")}
              onNxt={() => console.log("next page")}
              onPrv={() => console.log("previous page")}/>
          </div>
        </div>
    </div>
  );
}

export default Home;
