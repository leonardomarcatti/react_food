import useHTTP from "./useHTTP"

const useFetchMeals = () => {
   const { data, isLoading, error } = useHTTP('/meals', {}, [])
   return { data, isLoading, error }
}

export default useFetchMeals