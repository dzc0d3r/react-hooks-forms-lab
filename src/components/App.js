import React, {useState, useEffect} from "react"
import ShoppingList from "./ShoppingList"
import Header from "./Header"
import itemData from "../data/items"

function App () {
  const [items, setItems] = useState(itemData)
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleDarkModeClick () {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  useEffect(() => {
    console.log("Items changed", items)

    return () => {

    }
  }, [items])

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} setItems={setItems} />
    </div>
  )
}

export default App
