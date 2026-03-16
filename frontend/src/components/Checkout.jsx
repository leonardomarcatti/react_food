import Modal from "./ui/Modal"
import Input from '../components/ui/Input'
import Button from "./ui/Button"
import useSendOrderHook from "../hooks/useSendOrderHook"


const Checkout = () => {
   const { handleCloseCheckout, handleSubmit, cartTotal, progressCTX, isLoading, responseData, handleFinnish } = useSendOrderHook()
   
   let actions = <>
      <Button textOnly onClick={handleCloseCheckout}>Back</Button>
      <Button type='submit'>Submit Order</Button>
   </>

   if (isLoading) {
      actions = <span>Sending...</span>
   }

   if (responseData) {      
      return <Modal open={progressCTX.progress == 'checkout'} onClose={handleCloseCheckout}>
         <h2>Success!</h2>
         <p>Your order was sent</p>
         <Button onClick={handleFinnish}>Close</Button>
      </Modal>
   }

   return <Modal open={progressCTX.progress == 'checkout'} onClose={handleCloseCheckout}>
      <form action="" method="post" onSubmit={handleSubmit}>
         <h2>Checkout</h2>
         <p>Total: {cartTotal}</p>
         <Input label='Full name' type='text' id='name' />
         <Input label='Email Address' type='email' id='email' />
         <Input label='Street' type='text' id='street' />
         <div className="control-row">
            <Input label='Postal Code' type='text' id='postal-code' />
            <Input label='City' type='text' id='city' />
         </div>
         <p className="modal-actions">
            {actions}
         </p>
      </form>
   </Modal>
}

export default Checkout