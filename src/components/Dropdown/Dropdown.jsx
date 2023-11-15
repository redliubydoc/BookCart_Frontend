import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import { useEffect, useRef, useState } from "react";
import { Utils } from '../../utils';

import "./Dropdown.css";

function Dropdown({ className, id, items }) {

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ value: "all", text: "All" });
  const dropdownRef = useRef();

  useEffect(function () {
    console.log("Dropdown :: useEffect");

    setSelectedValue(items.length ? items[0] : { value: "all", text: "All" });

    document.addEventListener("click", closeDropdown);
    return (() => document.removeEventListener("click", closeDropdown));

  }, [items]);

  return (
    <div id={id} className={`Dropdown__dropdown` + (showDropdown ? ` active`: ``) + (className ? ` ${className}` : ``)}
      ref={dropdownRef} 
      onClick={toggleDropdown}>
      <button className="Dropdown__dropdown-trigger">
        <span>{selectedValue.text}</span> <ArrowDropDownTwoToneIcon/>
      </button>

      <div className="Dropdown__container-dropdown-menu">
        <ul className="Dropdown__dropdown-menu">{
          items.map((item) => 
            <li key={item.value} className="Dropdown__dropdown-item" 
              value={JSON.stringify(item)} onClick={doSelect}>{item.text}</li>
          )
        }</ul>
      </div>
    </div>
  );

  function closeDropdown(e) {
    console.log("Dropdown :: closeDropdown");

    if (!Utils.isSameOrDescendant(dropdownRef.current, e.target))
      setShowDropdown(false);
  }

  function toggleDropdown(e) {  
    console.log("Dropdown :: toggleDropdown");

    setShowDropdown(showDropdown => !showDropdown);
  }

  function doSelect(e) {
    console.log("Dropdown :: doSelect");

    setSelectedValue(JSON.parse(e.target.getAttribute("value")));
  }
}

export default Dropdown;