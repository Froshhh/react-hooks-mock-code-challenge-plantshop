import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(setPlants)
  }, [])

  const addNewPlant = (myPlant) => {
    setPlants([...plants, myPlant])
  }

  const updateSearch = (searchInput) => {
    setSearchTerm(searchInput)
  }

  let filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search searchTerm={searchTerm} updateSearch={updateSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;