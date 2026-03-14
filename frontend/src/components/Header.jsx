import styles from './Header.module.css'
import Button from './ui/Button'
import { useContext } from 'react'
import {CartContext} from '../store/CartContext'
import { UserContext } from '../store/userProgress'

const Header = () => {
   const cartCtx = useContext(CartContext)
   const userCtx = useContext(UserContext)
   const totalItems = cartCtx.items.reduce((total, item) => {
      return total + item.quantity
      }, 0)

   const handleShowCart = () => userCtx.showCart()
      
   return <header id={styles.main_header}>
      <div id={styles.title}>
         <img src='logo.jpg' alt="" />
         <h1>react Food</h1>
      </div>
      <Button textOnly onClick={handleShowCart}>Cart ( {totalItems} )</Button>
   </header>
}

export default Header