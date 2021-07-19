import React, { useState } from "react";
import Header from './Header';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      
      <ShoppingList items={items} />
      <Header onDarkModeClick={handleDarkModeClick}/>
    </div>
  );
}

export default App;
