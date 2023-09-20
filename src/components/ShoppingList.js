import React, {useState} from "react"
import ItemForm from "./ItemForm"
import Filter from "./Filter"
import Item from "./Item"


function ShoppingList ({items, setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchBox, setSearchBox] = useState("All")

  function handleCategoryChange (event) {
    setSelectedCategory(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true
    if (item.name.toLowerCase().includes(searchBox.toLowerCase())) {
      return true
    }

    return item.category === selectedCategory
  })
  const handleSearch = (event) => {
    setSearchBox(event.target.value)
    const name = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    setSelectedCategory(name)
  }
  const onItemFormSubmit = (item) => {
    setItems([...items, item])
  }



  return (

    < div className="ShoppingList" >
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={searchBox} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div >
  )
}

export default ShoppingList
