import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCatalog from "../../components/ProductCatalog/ProductCatalog";

function Product() {

  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(function () {

    fetch(`${window.location.origin}/mock-data/books/${id}.json`)
      .then(response => response.json())
      .then(data => {setBook(data); console.log(data);});

  }, [id]);

  return (
    <div className="Product__container-product">
      <ProductCatalog book={book}/>
    </div>
  );
}

export default Product;