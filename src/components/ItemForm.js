import React from "react"
import {v4 as uuid} from "uuid"
import {useState} from "react"

function ItemForm ({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "",

  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()


    if (formData.name.trim() && formData.category) {
      const newItem = {
        id: uuid(),
        name: formData.name,
        category: formData.category,
      }


      onItemFormSubmit(newItem)


      setFormData({
        name: "",
        category: "Produce",
      })
    }
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>

      <label>
        Category:
        <select name="category"
          value={formData.category}
          onChange={handleChange}>

          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  )
}

export default ItemForm
