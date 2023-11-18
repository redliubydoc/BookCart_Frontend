import { useEffect, useState } from "react";

import "./FilterPanel.css";
import Dropdown from "../Dropdown/Dropdown";

function FilterPanel({ id, className }) {

  const [languages, setLanguages] = useState({});
  const [genres, setGenres] = useState({});

  useEffect(function () {
    fetch(`${window.location.origin}/mock-data/languages.json`)
      .then(response => response.json())
      .then(data => setLanguages(data));

    fetch(`${window.location.origin}/mock-data/genres.json`)
      .then(response => response.json())
      .then(data => setGenres(data));
  }, []);

  return (
    <div className={`container-filter-panel ${className}`} id={id}>

      <div className="filter-panel-separator"></div>  
      <div className="container-header">
        <span>Filter by</span>
      </div>
      <div className="filter-panel-separator"></div>

      <div className="container-main">
        <div className="container-filter">
          <span className="filter-label">Language</span> 
          <Dropdown items={getLanguageItems(languages)} 
            defaultItem={{ value: "all", text: "All" }}
            onSelect={() => {}}></Dropdown>
        </div>

        <div className="container-filter">
          <span className="filter-label">Genre</span> 
          <Dropdown items={getGenreItems(genres)} 
            defaultItem={{ value: "all", text: "All" }}
            onSelect={() => {}}></Dropdown>
        </div>

        <div className="container-filter">
          <span className="filter-label">Price</span> 

          <div className="filter-radio">
            <input className="radio-input" name="grp-1" type="radio"/> 
            <span className="radio-label">All</span> 
          </div>
          <div className="filter-radio">
            <input className="radio-input" name="grp-1" type="radio"/> 
            <span className="radio-label">Under Rs 100</span> 
          </div>
          <div className="filter-radio">
            <input className="radio-input" name="grp-1" type="radio"/> 
            <span className="radio-label">Rs 100 - Rs 200</span> 
          </div>
          <div className="filter-radio">
            <input className="radio-input" name="grp-1" type="radio"/> 
            <span className="radio-label">Rs 200 - Rs 500</span> 
          </div>
          <div className="filter-radio">
            <input className="radio-input" name="grp-1" type="radio"/> 
            <span className="radio-label">Rs 500 - Rs 1,000</span> 
          </div>
          <div className="filter-radio">
            <input className="radio-input" name="grp-1" type="radio"/> 
            <span className="radio-label">Over Rs 1,000</span> 
          </div>
        </div>
      </div>

      <div className="filter-panel-separator"></div>  
      <div className="container-footer">
        <button className="filter-button">Reset All</button>
      </div>
      <div className="filter-panel-separator"></div> 
    </div>
  );

  function getLanguageItems(languages) {

    const items = [{ value: "all", text: "All" }];

    for (let key in languages) {
      items.push({ value: key, text: languages[key].name });
    }

    return items;
  }

  function getGenreItems(genres) {

    const items = [{ value: "all", text: "All" }];

    for (let key in genres) {
      items.push({ value: key, text: genres[key].name });
    }

    return items;
  }
}

export default FilterPanel;