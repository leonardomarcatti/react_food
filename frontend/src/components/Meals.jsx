import { useState, useEffect } from "react"

const Meals = () => {
   const [meals, setMeals] = useState([])
   
   const fetchMeals = async () => {
      const response = await fetch('/meals')
      const json = await response.json()
      setMeals(json)
      console.log(json);      
   }

   useEffect(() => {
      fetchMeals()
   }, [])
   
   return <ul id="meals">
      {
         meals.map(meal => <li key={meal.id}>{meal.name}</li>)
      }
   </ul>
}

export default Meals