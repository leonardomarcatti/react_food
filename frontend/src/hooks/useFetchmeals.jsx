import { useState, useEffect } from "react"

const useFetchMeals = () => {
   const [meals, setMeals] = useState([])

   const fetchMeals = async () => {
      const response = await fetch('/meals')
      const json = await response.json()
      setMeals(json)
   }

   useEffect(() => {
      fetchMeals()
   }, [])

   return {meals}
}

export default useFetchMeals