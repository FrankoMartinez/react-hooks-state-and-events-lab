import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")
  // Use selectedCategory to filter out items that don't match and render the items that do
  const filteredItems = items.filter(item => {
    return item.category === selectedCategory
  })

  function changeCaterogy(event) {
    console.log(selectedCategory)
    setCategory(event.target.value)
    console.log(filteredItems)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeCaterogy}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
