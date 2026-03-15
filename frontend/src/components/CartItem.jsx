import { useContext } from "react"
import { CartContext } from "../store/CartContext"

const CartItem = ({item}) => {
   const ctx = useContext(CartContext)
   const handlAdd = () => ctx.add(item)
   const handlRemove = () => ctx.remove(item.id)
   
   return <li className="cart-item">
      <p>{`${item.name} - $${item.price}`}</p>
      <p className="cart-item-actions">
         <button type="button" onClick={handlRemove}>-</button>
         <span>{item.quantity}</span>
         <button type="button" onClick={handlAdd}>+</button>
      </p>
      
   </li>
}

export default CartItem