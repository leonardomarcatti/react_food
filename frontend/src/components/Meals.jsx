import useFetchMeals from "../hooks/useFetchmeals"
import MealItem from "./MealItem"

const Meals = () => {
   const {meals} = useFetchMeals()
   
   return <ul id="meals">
      {
         meals.map(meal => <MealItem key={meal.id} meal={meal}/>)
      }
   </ul>
}

export default Meals