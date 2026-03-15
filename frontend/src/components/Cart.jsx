import Modal from './ui/Modal'
import { useContext } from 'react'
import {CartContext} from '../store/CartContext'
import {UserContext} from '../store/userProgress'
import Button from './ui/Button'
import CartItem from './CartItem'

const Cart = () => {
   const cartCtx = useContext(CartContext)
   const userCtx = useContext(UserContext)
   const handleCloseCart = () => userCtx.hideCart()
   const handleShowCheckout = () => userCtx.showCheckout()

   const cartTotal = cartCtx.items.reduce((price, item) => {
      return price + item.quantity*item.price
   }, 0)
   return <Modal open={userCtx.progress == 'cart'} onClose={userCtx.progress == 'cart' ? handleCloseCart : null}>
      <h2>Your Cart</h2>
      <ul>
      {
         cartCtx.items.map(item => <CartItem key={item.id} item={item} />)
      }
      </ul>
      <span className='cart-total'>
         <span>Total</span>
         <span>${cartTotal.toFixed(2)}</span>
      </span>
      <p className='modal-actions'>
         <Button textOnly onClick={handleCloseCart}>Close</Button>
         {
            cartCtx.items.length > 0 && <Button onClick={handleShowCheckout}>Checkout</Button>
         }
         
      </p>
   </Modal>
}

export default Cart