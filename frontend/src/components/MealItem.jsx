import styles from './MealItem.module.css'
import Button from './ui/Button'
import { CartContext } from '../store/CartContext';
import { useContext } from 'react';

const MealItem = ({meal}) => {
   const ctx = useContext(CartContext)
   const handleMeal = () => ctx.add(meal)
   
   return <li className={styles.meal}>
      <article>
         <img src={`http://${window.location.hostname}:3001/${meal.image}`} alt={meal.name}  />
         <div>
            <h3>{meal.name}</h3>
            <p className={styles.meal_price}>{`$ ${meal.price}`}</p>
            <p className={styles.meal_description}>{meal.description}</p>
         </div>
         <p className={styles.meal_actions}>
            <Button onClick={handleMeal}>Add to Cart</Button>
         </p>
      </article>
   </li>
}

export default MealItem