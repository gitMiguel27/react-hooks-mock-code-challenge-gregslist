import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, handleDeleteItem }) {
  return (
    <main>
      <ul className="cards">
        {
        items.map(item => {
          return <ListingCard key={item.id} item={item} handleDeleteItem={handleDeleteItem}/>
        })
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
