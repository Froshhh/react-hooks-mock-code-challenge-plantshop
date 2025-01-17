import React, { useState } from "react";

function NewPlantForm({addNewPlant}) {
  const [newPlantName, setName] = useState("")
  const [newImage, setImage] = useState("")
  const [price, setPrice] = useState(0.00)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let newPlant = {
      name: newPlantName,
      image: newImage,
      price: price
    }

    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newPlant)
    })
      .then(resp => resp.json())
      .then(myPlant => addNewPlant(myPlant))

  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlantName} onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={newImage} onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;