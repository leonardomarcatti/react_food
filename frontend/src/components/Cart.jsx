import Modal from './ui/Modal'
import { useContext } from 'react'
import {CartContext} from '../store/CartContext'
import {UserContext} from '../store/userProgress'
import Button from './ui/Button'

const Cart = () => {
   const cartCtx = useContext(CartContext)
   const userCtx = useContext(UserContext)
   const handleCloseCart = () => userCtx.hideCart()

   const cartTotal = cartCtx.items.reduce((price, item) => {
      return price + item.quantity*item.price
   }, 0)
   return <Modal open={userCtx.progress == 'cart'}>
      <h2>Your Cart</h2>
      <ul>
      {
         cartCtx.items.map(item => <li key={item.id}>{item.name} - {item.quantity}</li>)
      }
      </ul>
      <p className='cart-total'>{cartTotal}</p>
      <p className='modal-actions'>
         <Button textOnly onClick={handleCloseCart}>Close</Button>
         <Button onClick={handleCloseCart}>Checkout</Button>
      </p>
   </Modal>
}

export default Cart