import useFetchMeals from "../hooks/useFetchMeals"
import MealItem from "./MealItem"
import Error from "./Error"

const Meals = () => {
   const { data, isLoading, error } = useFetchMeals()
      
   if (isLoading) {
      return <h4 className="center">Loading meals...</h4>
   }

   if (error) {
      return <Error title='Failed to fetch meals' message={error}/>
   }

   if (!data) {
      return <p>There are no meals yet!!</p>
   }

   return <ul id="meals">
      {
         data.map(meal => <MealItem key={meal.id} meal={meal}/>)
      }
   </ul>
}

export default Meals