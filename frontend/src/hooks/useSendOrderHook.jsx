
import { useContext, useState } from "react"
import { CartContext } from '../store/CartContext'
import { UserContext } from '../store/userProgress'

const useSendOrderHook = () => {
   const [isLoading, setIsLoading] = useState(false)
   const [responseData, setResponseData] = useState()
   const cartCTX = useContext(CartContext)
   const progressCTX = useContext(UserContext)
   const handleCloseCheckout = () => {
      progressCTX.hideCheckout()
      cartCTX.clear()
   }
   const cartTotal = cartCTX.items.reduce((price, item) => {
      return price + item.quantity * item.price
   }, 0)


   const handleOrders = async (data) => {
      setIsLoading(true)
      const response = await fetch('/orders', {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
         },
         body: JSON.stringify({ order: { items: cartCTX.items, customer: data } })
      })

      const json = await response.json()
      setIsLoading(false)
      setResponseData(json)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      const userData = Object.fromEntries(formData.entries())
      handleOrders(userData)
   }

   return { handleCloseCheckout, handleSubmit, cartTotal, progressCTX, isLoading, responseData }
}

export default useSendOrderHook