import styles from './MealItem.module.css'

const MealItem = ({meal}) => {
   return <li className={styles.meal}>
      <article>
         <img src={`http://${window.location.hostname}:3001/${meal.image}`} alt={meal.name}  />
         <div>
            <h3>{meal.name}</h3>
            <p className={styles.meal_price}>{`$ ${meal.price}`}</p>
            <p className={styles.meal_description}>{meal.description}</p>
         </div>
         <p className={styles.meal_actions}>
            <button type="button">Add to Cart</button>
         </p>
      </article>
   </li>
}

export default MealItem