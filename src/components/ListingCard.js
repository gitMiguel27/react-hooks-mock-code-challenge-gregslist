import React, { useState } from "react";

function ListingCard({ item, handleDeleteItem }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function favoriteClick() {
    setIsFavorite(!isFavorite);
  }

  function deleteItem() {
    // console.log('clicked')
    handleDeleteItem(item)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={favoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={favoriteClick}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={deleteItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
