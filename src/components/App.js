import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(resp => resp.json())
      .then(itemData => {
        setItems(itemData);
      })
  }, [])

  function handleDeleteItem(deletedItem) {
    // console.log('from App', deletedItem);
    fetch(`http://localhost:6001/listings/${deletedItem.id}`, {
      method: "DELETE",
    })
    const updatedItems = items.filter(item => item.id !== deletedItem.id)
    setItems(updatedItems);
  }

  const updatedDisplay = items.filter(item => item.description.toLowerCase().includes(search.toLowerCase()))
  console.log(updatedDisplay)
  

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer items={updatedDisplay} handleDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;
