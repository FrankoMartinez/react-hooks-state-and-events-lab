import React, { useState } from "react";

function Item({ name, category }) {
  const [addedToCart, addToCart] = useState(false)
  const itemsAdded = addedToCart ? "Remove From Cart" : "Add To Cart"
  const liClass = addedToCart ? "in-cart" : ""

  function addItem(){
    addToCart(liClass => !liClass)
  }
  
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>{itemsAdded}</button>
    </li>
  );
}

export default Item;
