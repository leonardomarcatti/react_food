import { createContext, useState } from "react";

const UserContext = createContext({
   progress: '',
   showCart: () => null,
   hideCart: () => null,
   showCheckout: () => null,
   hideCheckout: () => null,
   finnish: () => null

});

const UserProgressProvider = ({children}) => {
   const [userProgress, setUserProgress] = useState('')   
   const showCart = () => setUserProgress('cart')
   const hideCart = () => setUserProgress('')
   const showCheckout = () => setUserProgress('checkout')
   const hideCheckout = () => setUserProgress('')
   const finnish = () => setUserProgress('finnish')

   const userProgressCtx = {
      progress: userProgress,
      showCart,
      hideCart,
      showCheckout,
      hideCheckout,
      finnish
   }
   return <UserContext.Provider value={userProgressCtx}>{children}</UserContext.Provider>
}



export { UserContext, UserProgressProvider }